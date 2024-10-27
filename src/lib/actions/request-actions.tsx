'use server';

import { ActionResponse } from '@/types';
import { MessageFormInput, MessageFormSchema } from '../validators/auth';
import prisma from '../prisma';

export async function saveRequest(
	_: any,
	data: MessageFormInput
): Promise<ActionResponse<MessageFormInput>> {
	try {
		const parsed = MessageFormSchema.safeParse(data);
		if (!parsed.success) {
			const err = parsed.error.flatten();
			return {
				fieldError: {
					fullName: err.fieldErrors.fullName?.[0],
					message: err.fieldErrors.message?.[0],
					town: err.fieldErrors.town?.[0],
					phone: err.fieldErrors.phone?.[0],
					email: err.fieldErrors.email?.[0],
				},
			};
		}
		const { fullName, email, message = '', town, phone } = data;
		await prisma.message.create({
			data: {
				fullName,
				email,
				message,
				town,
				phone,
			},
		});
		return {
			data: true,
		};
	} catch (error) {
		console.log(error);
		return {
			formError: 'Error occurred',
		};
	}
}

export async function getMessages() {
	try {
		const requests = await prisma.message.findMany({
			select: {
				id: true,
				createdAt: true,
				fullName: true,
				email: true,
				message: true,
				town: true,
				phone: true,
			},
			take: 6,
			orderBy: { createdAt: 'desc' },
		});
		return requests;
	} catch (error) {
		console.log(error);
		return [];
	}
}

export type RequestType = Awaited<ReturnType<typeof getMessages>>;
