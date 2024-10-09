'use server';

import { createAdminClient } from '@/config/appwrite';
import { Query } from 'node-appwrite';

export async function getProductCategories() {
	try {
		const { databases } = await createAdminClient();

		const { documents: categories } = await databases.listDocuments(
			process.env.APPWRITE_DATABASE!,
			process.env.APPWRITE_COLLECTION_PRO_CATS!
		);
		return categories;
	} catch (error) {
		console.log('Failed to get categories', error);
		return [];
	}
}

export type ProCategories = Awaited<ReturnType<typeof getProductCategories>>;
export async function getProductSubCategories(category: string) {
	try {
		if (!category) return [];
		const { databases } = await createAdminClient();

		const { documents: categories } = await databases.listDocuments(
			process.env.APPWRITE_DATABASE!,
			process.env.APPWRITE_COLLECTION_PRO_SUB_CATS!,
			[Query.select(['category', category])]
		);
		return categories;
	} catch (error) {
		console.log('Failed to get sub categories', error);
		return [];
	}
}

export type ProSubCategories = Awaited<
	ReturnType<typeof getProductSubCategories>
>;
