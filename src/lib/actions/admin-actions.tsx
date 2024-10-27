'use server';

import prisma from '@/lib/prisma';

const superAdmins = process.env.WHITELISTED_EMAILS?.split(',') || [];
export async function handleAddAdmin(payload: {
	email: string;
	allowedRoutes: string[];
}) {
	const { email, allowedRoutes } = payload;
	if (superAdmins.includes(email)) return false;
	const alreadyExists = await prisma.adminAllowedEmail.findUnique({
		where: {
			email: email.toLowerCase(),
		},
	});
	if (alreadyExists) return false;
	await prisma.adminAllowedEmail.create({
		data: {
			email: email.toLowerCase(),
			allowedPages: allowedRoutes,
		},
	});
	return true;
}
export async function handleRemoveAdmin(email: string) {
	if (superAdmins.includes(email)) return false;
	const alreadyExists = await prisma.adminAllowedEmail.findUnique({
		where: {
			email: email.toLowerCase(),
		},
	});
	if (!alreadyExists) return false;
	await prisma.adminAllowedEmail.delete({
		where: {
			email: email.toLowerCase(),
		},
	});
	await prisma.user.deleteMany({
		where: {
			email: {
				equals: email.toLowerCase(),
				mode: 'insensitive',
			},
		},
	});
	return true;
}
export async function handleUpdateAdmin(payload: {
	email: string;
	allowedRoutes: string[];
}) {
	const { email, allowedRoutes } = payload;
	if (superAdmins.includes(email)) return false;
	const alreadyExists = await prisma.adminAllowedEmail.findUnique({
		where: {
			email: email.toLowerCase(),
		},
	});
	if (!alreadyExists) return false;
	await prisma.adminAllowedEmail.update({
		where: {
			email: email.toLowerCase(),
		},
		data: {
			allowedPages: allowedRoutes,
		},
	});
	return true;
}
