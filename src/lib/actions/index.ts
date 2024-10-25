'use server';

import prisma from '@/lib/prisma';

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
};

export type ProNavData = Awaited<ReturnType<typeof getProNavData>>;
