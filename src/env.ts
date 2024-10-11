import { z } from 'zod';

const schema = z.object({
	NEXT_PUBLIC_APP_URL: z.string(),
	NODE_ENV: z.string(),
	SUPABASE_ANON_KEY: z.string(),
	SUPABASE_URL: z.string(),
	POSTGRES_URL: z.string(),
	aws_access_key_id: z.string(),
	aws_secret_access_key: z.string(),
	endpoint_url: z.string(),
	region: z.string(),
});
export const env = schema.parse(process.env);
