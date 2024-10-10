'use server';

import { z } from 'zod';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { generateId, Scrypt } from 'lucia';
import { isWithinExpirationDate, TimeSpan, createDate } from 'oslo';
import { generateRandomString, alphabet } from 'oslo/crypto';

import {
	AuthLoginSchema,
	AuthSignupFormSchema,
	type AuthLoginInput,
	type AuthSignupFormInput,
	resetPasswordSchema,
	ResetPasswordInput,
} from '@/lib/validators/auth';

import { sendMail, EmailTemplate } from '@/lib/email';
import { Paths } from '@/lib/constants';
import { env } from '@/env';
import { UserType } from '@prisma/client';
import prisma from '../prisma';
import { validateRequest } from './validate-request';
import { lucia } from '.';
import { scrypt } from 'crypto';

export interface ActionResponse<T> {
	fieldError?: Partial<Record<keyof T, string | undefined>>;
	formError?: string;
	data?: boolean;
	res?: Partial<Record<keyof T, string | undefined>>;
}

export async function login(
	_: unknown,
	form: AuthLoginInput
): Promise<ActionResponse<AuthLoginInput>> {
	const parsed = AuthLoginSchema.safeParse(form);
	if (!parsed.success) {
		const err = parsed.error.flatten();
		return {
			fieldError: {
				email: err.fieldErrors.email?.[0],
				password: err.fieldErrors.password?.[0],
			},
		};
	}

	const { email, password } = parsed.data;

	const existingUser = await prisma.user.findFirst({
		where: {
			email: {
				equals: email,
				mode: 'insensitive',
			},
		},
		select: {
			id: true,
			password: true,
			emailVerified: true,
		},
	});
	if (!existingUser) {
		return {
			formError: 'Incorrect email or password',
		};
	}

	if (!existingUser || !existingUser?.password) {
		return {
			formError: 'Incorrect email or password',
		};
	}
	// const validPassword = await new scrypt().verify(
	// 	existingUser.password,
	// 	password
	// );
	// if (!validPassword) {
	// 	return {
	// 		formError: 'Incorrect email or password',
	// 	};
	// }
	if (existingUser.emailVerified === null) {
		return await sendEmailVerificationCode(existingUser.id, email);
	}

	const session = await lucia.createSession(existingUser.id, {});
	const sessionCookie = lucia.createSessionCookie(session.id);
	cookies().set(
		sessionCookie.name,
		sessionCookie.value,
		sessionCookie.attributes
	);
	return redirect(Paths.Dashboard);
}

export async function signup(
	_: unknown,
	form: AuthSignupFormInput
): Promise<ActionResponse<AuthSignupFormInput>> {
	const parsed = AuthSignupFormSchema.safeParse(form);
	if (!parsed.success) {
		const err = parsed.error.flatten();
		return {
			fieldError: {
				email: err.fieldErrors.email?.[0],
				password: err.fieldErrors.password?.[0],
				firstName: err.fieldErrors.firstName?.[0],
				lastName: err.fieldErrors.lastName?.[0],
				phone: err.fieldErrors.phone?.[0],
				businessName: err.fieldErrors.businessName?.[0],
				country: err.fieldErrors.country?.[0],
				countryCode: err.fieldErrors.countryCode?.[0],
			},
		};
	}

	const { email, password, firstName, lastName, phone, country, countryCode } =
		form;

	const existingUser = await prisma.user.findFirst({
		where: {
			email: {
				equals: email,
				mode: 'insensitive',
			},
		},
	});

	if (existingUser) {
		return {
			formError: 'Cannot create account with that email',
		};
	}

	const hashedPassword = await new Scrypt().hash(password);
	const user = await prisma.$transaction(async () => {
		const user = await prisma.user.create({
			data: {
				email,
				password: hashedPassword,
				userType: UserType.USER,
				firstName,
				lastName,
				phone,
				country,
				countryCode,
			},
		});
		return user;
	});

	return await sendEmailVerificationCode(user.id, email);
}

async function sendEmailVerificationCode(userId: string, email: string) {
	const verificationCode = await generateEmailVerificationCode(userId, email);
	await sendMail(email, EmailTemplate.EmailVerification, {
		code: verificationCode,
	});

	const session = await lucia.createSession(userId, {});
	const sessionCookie = lucia.createSessionCookie(session.id);
	cookies().set(sessionCookie.name, sessionCookie.value);
	return redirect(Paths.VerifyEmail);
}

export async function logout(): Promise<{ error: string } | void> {
	const { session } = await validateRequest();
	if (!session) {
		return {
			error: 'No session found',
		};
	}
	await lucia.invalidateSession(session.id);
	const sessionCookie = lucia.createBlankSessionCookie();
	cookies().set(
		sessionCookie.name,
		sessionCookie.value,
		sessionCookie.attributes
	);
	return redirect('/');
}

export async function resendVerificationEmail(): Promise<{
	error?: string;
	success?: boolean;
}> {
	const { user } = await validateRequest();
	if (!user) {
		return redirect(Paths.Login);
	}

	const lastSent = await prisma.verificationToken.findFirst({
		where: {
			userId: user.id,
		},
		select: {
			expiresAt: true,
		},
	});

	if (lastSent && isWithinExpirationDate(lastSent.expiresAt)) {
		return {
			error: `Please wait ${timeFromNow(lastSent.expiresAt)} before resending`,
		};
	}
	const verificationCode = await generateEmailVerificationCode(
		user.id,
		user.email
	);
	await sendMail(user.email, EmailTemplate.EmailVerification, {
		code: verificationCode,
	});

	return { success: true };
}

export async function verifyEmail(
	_: unknown,
	code: string
): Promise<{ error: string } | void> {
	if (typeof code !== 'string' || code.length !== 6) {
		return { error: 'Invalid code' };
	}
	const { session: userSession, user } = await validateRequest();
	if (!userSession) {
		return redirect(Paths.Login);
	}

	const dbCode = await prisma.$transaction(async (tx) => {
		const item = await tx.verificationToken.findFirst({
			where: {
				userId: user.id,
			},
		});
		if (item) {
			await tx.verificationToken.delete({
				where: {
					id: item.id,
				},
			});
		}
		return item;
	});

	if (!dbCode || dbCode.token !== code)
		return { error: 'Invalid verification code' };

	if (!isWithinExpirationDate(dbCode.expiresAt))
		return { error: 'Verification code expired' };

	if (dbCode.email !== user.email) return { error: 'Email does not match' };
	await prisma.user.update({
		where: {
			id: user.id,
		},
		data: {
			emailVerified: new Date(),
		},
	});
	await lucia.invalidateUserSessions(user.id);
	const session = await lucia.createSession(user.id, {});
	const sessionCookie = lucia.createSessionCookie(session.id);
	cookies().set(
		sessionCookie.name,
		sessionCookie.value,
		sessionCookie.attributes
	);
	redirect(Paths.Dashboard);
}

export async function sendPasswordResetLink(
	_: unknown,
	email: string
): Promise<{ error?: string; success?: boolean }> {
	const parsed = z.string().trim().email().safeParse(email);
	if (!parsed.success) {
		return { error: 'Provided email is invalid.' };
	}
	try {
		const user = await prisma.user.findFirst({
			where: {
				email: {
					equals: email,
					mode: 'insensitive',
				},
			},
		});

		if (!user || !user.emailVerified)
			return { error: 'Provided email is invalid.' };

		const verificationToken = await generatePasswordResetToken(user.id);

		const verificationLink = `${env.NEXT_PUBLIC_APP_URL}/auth/reset-password/${verificationToken}`;

		await sendMail(user.email, EmailTemplate.PasswordReset, {
			link: verificationLink,
		});

		return { success: true };
	} catch (e) {
		console.log(e);
		return { error: 'Failed to send verification email.' };
	}
}

export async function resetPassword(
	_: unknown,
	formData: ResetPasswordInput
): Promise<{ error?: string; success?: boolean }> {
	const parsed = resetPasswordSchema.safeParse(formData);

	if (!parsed.success) {
		const err = parsed.error.flatten();
		return {
			error: err.fieldErrors.password?.[0] ?? err.fieldErrors.token?.[0],
		};
	}
	const { token, password } = parsed.data;

	const dbToken = await prisma.$transaction(async (tx) => {
		const item = await tx.passwordResetTokens.findFirst({
			where: {
				token,
			},
		});

		if (item) {
			await tx.passwordResetTokens.delete({
				where: {
					id: item.id,
				},
			});
		}
		return item;
	});

	if (!dbToken) return { error: 'Invalid password reset link' };

	if (!isWithinExpirationDate(dbToken.expiresAt))
		return { error: 'Password reset link expired.' };

	await lucia.invalidateUserSessions(dbToken.userId);
	const hashedPassword = await new Scrypt().hash(password);
	const user = await prisma.user.update({
		where: {
			id: dbToken.userId,
		},
		data: {
			password: hashedPassword,
		},
	});

	const session = await lucia.createSession(user.id, {});
	const sessionCookie = lucia.createSessionCookie(session.id);
	cookies().set(
		sessionCookie.name,
		sessionCookie.value,
		sessionCookie.attributes
	);
	redirect(Paths.Dashboard);
}

const timeFromNow = (time: Date) => {
	const now = new Date();
	const diff = time.getTime() - now.getTime();
	const minutes = Math.floor(diff / 1000 / 60);
	const seconds = Math.floor(diff / 1000) % 60;
	return `${minutes}m ${seconds}s`;
};

async function generateEmailVerificationCode(
	userId: string,
	email: string
): Promise<string> {
	await prisma.verificationToken.deleteMany({
		where: {
			userId,
		},
	});
	const code = generateRandomString(6, alphabet('0-9')); // 8 digit code
	await prisma.verificationToken.create({
		data: {
			userId,
			email,
			token: code,
			expiresAt: createDate(new TimeSpan(10, 'm')), // 10 minutes
		},
	});
	return code;
}

async function generatePasswordResetToken(userId: string): Promise<string> {
	await prisma.passwordResetTokens.deleteMany({
		where: {
			userId,
		},
	});
	const tokenId = generateId(40);
	await prisma.passwordResetTokens.create({
		data: {
			token: tokenId,
			userId,
			expiresAt: createDate(new TimeSpan(2, 'h')),
		},
	});

	return tokenId;
}
