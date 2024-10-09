import { join } from 'path';
import { stat, mkdir, writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	try {
		const formData = await req.formData();
		const images = formData.getAll('image') as File[];
		const title = formData.get('title') as string;
		if (!title) return NextResponse.json({ message: 'Title is required' });

		const relativeUploadDir = '/blog-banners';
		const uploadDir = join(process.cwd(), 'public', relativeUploadDir);

		await ensureDirectoryExists(uploadDir);

		const newFiles = await Promise.all(
			images.map(async (image) => {
				const fileUrl = `${relativeUploadDir}/${image.name}`;

				const buffer = Buffer.from(await image.arrayBuffer());
				await writeFile(join(uploadDir, image.name), buffer);
				return fileUrl;
			})
		);

		const uploadedFiles = newFiles.filter(Boolean) as string[];

		return NextResponse.json({ uploadedFiles });
	} catch (e) {
		console.error('Error handling upload', e);
		return NextResponse.json(
			{ error: 'Something went wrong' },
			{ status: 500 }
		);
	}
}

async function ensureDirectoryExists(directory: string) {
	try {
		await stat(directory);
	} catch (e: any) {
		if (e.code === 'ENOENT') {
			await mkdir(directory, { recursive: true });
		} else {
			throw new Error(`Failed to create directory: ${e.message}`);
		}
	}
}
