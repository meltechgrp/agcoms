'use server';

import prisma from '@/lib/prisma';
// import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';

export interface ActionResponse<T> {
	fieldError?: Partial<Record<keyof T, string | undefined>>;
	formError?: string;
	data?: boolean;
	res?: Partial<Record<keyof T, string | undefined>>;
}

export const getProCats = async () => {
	const proCats = await prisma.productCategories.findMany({
		select: {
			name: true,
		},
	});
	if (proCats) return proCats;
	return [];
};

export const getProNavData = async () => {
	try {
		const nav = await prisma.products.findMany({
			select: {
				id: true,
				name: true,
				category: {
					select: {
						name: true,
						slug: true,
					},
				},
			},
		});
		return nav ? nav : [];
	} catch (error) {
		console.log(error);
		return [];
	}
};

export type ProNavData = Awaited<ReturnType<typeof getProNavData>>;

export async function getDashboardData() {
	try {
		const data = await prisma.$transaction(async (tx) => {
			const equipments = await tx.products.count();
			const admins = await tx.user.count();
			const posts = await tx.posts.count();
			const requests = await tx.message.count();

			return {
				equipments,
				admins,
				posts,
				requests,
			};
		});
		return data;
	} catch (error) {
		console.log(error);
		return {
			equipments: 0,
			admins: 0,
			posts: 0,
			requests: 0,
		};
	}
}

export type DashboardData = Awaited<ReturnType<typeof getDashboardData>>;

export async function getProductImages() {
	try {
		const data = await prisma.products.findMany({
			select: {
				id: true,
				name: true,
				images: {
					select: {
						url: true,
					},
					take: 1,
				},
				category: {
					select: {
						slug: true,
					},
				},
			},
			take: 10,
			orderBy: {
				createdAt: 'desc',
			},
		});
		return data;
	} catch (error) {
		console.log(error);
		return [];
	}
}
