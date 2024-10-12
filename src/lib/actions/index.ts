'use server';

import prisma from '@/lib/prisma';

export interface ActionResponse<T> {
	fieldError?: Partial<Record<keyof T, string | undefined>>;
	formError?: string;
	data?: boolean;
	res?: Partial<Record<keyof T, string | undefined>>;
}

export const getBlogCategories = async () => {
	const categories = await prisma.blogCategory.findMany({
		select: {
			name: true,
		},
	});
	if (categories) return categories;
	return [];
};
export const getProCats = async () => {
	const proCats = await prisma.category.findMany({
		select: {
			name: true,
		},
	});
	if (proCats) return proCats;
	return [];
};
export const getProSubCats = async (name: string) => {
	const proSubs = await prisma.subcategory.findMany({
		where: {
			category: {
				name,
			},
		},
		select: {
			name: true,
		},
	});
	if (proSubs) return proSubs;
	return [];
};
