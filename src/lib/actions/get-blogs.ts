'use server';

import { createAdminClient } from '@/config/appwrite';

export async function getBlogs() {
	try {
		const { databases } = await createAdminClient();

		// Fetch Blogs
		const { documents: blogs } = await databases.listDocuments(
			process.env.APPWRITE_DATABASE!,
			process.env.APPWRITE_COLLECTION_BLOGS!
		);
		return blogs;
	} catch (error) {
		console.log('Failed to get blogs', error);
		return [];
	}
}
export type Blogs = Awaited<ReturnType<typeof getBlogs>>;
