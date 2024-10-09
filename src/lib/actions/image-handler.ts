'use server';
import { Ids } from '@/components/shared/image-uploader';
import { createAdminClient } from '@/config/appwrite';
import { ID } from 'node-appwrite';

export async function uploadImage(
	_: any,
	formData: FormData
): Promise<{ error?: string; data?: Ids }> {
	try {
		const { storage } = await createAdminClient();

		const images: File[] = (formData.getAll('image') || []) as any;

		const responses = await Promise.all(
			images.map(async (image) => {
				const response = await storage.createFile(
					process.env.NEXT_PUBLIC_APPWRITE_PRODUCT_IMAGES!,
					ID.unique(),
					image
				);
				return response.$id;
			})
		);
		return { data: responses };
	} catch (error) {
		console.log('Error uploading image', error);
		return {
			error: 'Error uploading image',
		};
	}
}
export async function getImage(id: string) {
	try {
		const { storage } = await createAdminClient();

		const imageUrl = await storage.getFilePreview(
			process.env.NEXT_PUBLIC_APPWRITE_PRODUCT_IMAGES!,
			id
		);
		return imageUrl;
	} catch (error) {
		console.log(error);
	}
}
