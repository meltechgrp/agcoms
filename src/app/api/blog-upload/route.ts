import { PrismaClient } from '@prisma/client';
import mime from 'mime';
import { join } from 'path';
import { stat, mkdir, writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import _ from 'lodash';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
	const formData = await req.formData();
	const images = formData.getAll('image') as File[];

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
				const filename = `${image.name.replace(
					/\.[^/.]+$/,
					''
				)}.${mime.getExtension(image.type)}`;

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
		return NextResponse.json({ uploadedFiles });
	} catch (e) {
		console.error('Error while trying to save to the file\n', e);
		return NextResponse.json(
			{ error: 'Failed to save images to the files.' },
			{ status: 500 }
		);
	}
}
