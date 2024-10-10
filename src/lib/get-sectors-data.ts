'use server';

import prisma from '@/lib/prisma';

export const GetBlogCategories = async () => {
	const categories = await prisma.blogCategory.findMany({
		select: {
			name: true,
		},
	});
	if (categories) return categories;
	return [];
};
