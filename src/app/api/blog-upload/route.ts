import prisma from '@/lib/prisma';
import mime from 'mime';
import { join } from 'path';
import { stat, mkdir, writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import _ from 'lodash';

export async function POST(req: NextRequest) {
	const formData = await req.formData();
	const images = formData.getAll('image') as File[];
	const title = formData.get('title') as string;
	if (!title) return NextResponse.json([]);
	console.log('in api');
	const uploadedFiles: string[] = [];
	for (const image of images) {
		// Ensure the file is valid
		if (image && image instanceof File) {
			const buffer = Buffer.from(await image.arrayBuffer());
			const relativeUploadDir = `/blog-banners`;

			const uploadDir = join(process.cwd(), 'public', relativeUploadDir);

			// Create the directory if it doesn't exist
			try {
				await stat(uploadDir);
			} catch (e: any) {
				if (e.code === 'ENOENT') {
					await mkdir(uploadDir, { recursive: true });
				} else {
					console.error(
						'Error while trying to create directory when uploading a file\n',
						e
					);
					return NextResponse.json(
						{ error: 'Something went wrong.' },
						{ status: 500 }
					);
				}
			}

			try {
				// Generate a unique filename
				const filename = `${image.name}`;

				// Write the file to the upload directory
				await writeFile(`${uploadDir}/${filename}`, buffer);
				const fileUrl = `${relativeUploadDir}/${filename}`;

				// Save the uploaded file path to the array
				uploadedFiles.push(fileUrl);
			} catch (e) {
				console.error('Error while trying to upload a file\n', e);
				return NextResponse.json(
					{ error: 'Something went wrong.' },
					{ status: 500 }
				);
			}
		}
	}
	try {
		let c = await prisma.blog.findFirst({ where: { title: title } });
		console.log(c, uploadedFiles);
		c &&
			uploadedFiles?.map(async (img) => {
				await prisma.image.create({
					data: {
						url: img,
						blog: {
							connect: { id: c.id },
						},
					},
				});
			});
		return NextResponse.json({ uploadedFiles });
	} catch (e) {
		console.error('Error while trying to save to the file\n', e);
		return NextResponse.json(
			{ error: 'Failed to save images to the files.' },
			{ status: 500 }
		);
	}
}
