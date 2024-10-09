import { z } from 'zod';

const schema = z.object({
	POSTGRES_URL: z.string(),
	NEXT_PUBLIC_APP_URL: z.string(),
	NODE_ENV: z.string(),
	APPWRITE_API_KEY: z.string(),
	APPWRITE_ENDPOINT: z.string(),
	APPWRITE_PROJECT: z.string(),
	APPWRITE_DATABASE: z.string(),
	APPWRITE_COLLECTION_PRODYCTS: z.string(),
	APPWRITE_BLOGS_STORAGE_BUCKET: z.string(),
	APPWRITE_PRODUCTS_STORAGE_BUCKET: z.string(),
	APPWRITE_EXTRA_STORAGE_BUCKET: z.string(),
});
export const env = schema.parse(process.env);
