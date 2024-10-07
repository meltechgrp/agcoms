import prisma from '@/lib/prisma';
import { join } from 'path';
import { stat, mkdir, writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	try {
		const formData = await req.formData();
		const images = formData.getAll('image') as File[];
		const title = formData.get('title') as string;
		if (!title) return NextResponse.json({ message: 'Title is required' });

		const existingBlog = await prisma.blog.findFirst({ where: { title } });
		if (!existingBlog) return NextResponse.json({ message: 'Blog not found' });

		const existingImages = await prisma.image.findMany({
			where: { blogId: existingBlog.id },
			select: { url: true },
		});
		const existingImageUrls = existingImages.map((img) => img.url);

		const relativeUploadDir = '/blog-banners';
		const uploadDir = join(process.cwd(), 'public', relativeUploadDir);

		await ensureDirectoryExists(uploadDir);

		const newFiles = await Promise.all(
			images.map(async (image) => {
				const fileUrl = `${relativeUploadDir}/${image.name}`;
				if (existingImageUrls.includes(fileUrl)) return null;

				const buffer = Buffer.from(await image.arrayBuffer());
				await writeFile(join(uploadDir, image.name), buffer);
				return fileUrl;
			})
		);

		const uploadedFiles = newFiles.filter(Boolean) as string[];

		await prisma.image.createMany({
			data: uploadedFiles.map((url) => ({ url, blogId: existingBlog.id })),
		});

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
