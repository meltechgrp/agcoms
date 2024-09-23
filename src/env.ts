import { z } from 'zod';

const schema = z.object({
	DATABASE_URL: z.string(),
	SMTP_HOST: z.string(),
	SMTP_PORT: z.string(),
	SMTP_USER: z.string(),
	SMTP_PASSWORD: z.string(),
	NEXT_PUBLIC_APP_URL: z.string(),
	NODE_ENV: z.string(),
});
export const env = schema.parse(process.env);
