'use server';

import prisma from '@/lib/prisma';

export interface ActionResponse<T> {
	fieldError?: Partial<Record<keyof T, string | undefined>>;
	formError?: string;
	data?: boolean;
	res?: Partial<Record<keyof T, string | undefined>>;
}

export const GetBlogCategories = async () => {
	const categories = await prisma.blogCategory.findMany({
		select: {
			name: true,
		},
	});
	if (categories) return categories;
	return [];
};
