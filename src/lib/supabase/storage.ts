import { S3Client } from '@aws-sdk/client-s3';
import { env } from '@/env';

export const storageClient = new S3Client({
	forcePathStyle: true,
	region: env.region!,
	endpoint: env.endpoint_url!,
	credentials: {
		accessKeyId: env.aws_access_key_id!,
		secretAccessKey: env.aws_secret_access_key!,
	},
});
