'use server';

import { revalidatePath } from 'next/cache';
import { ActionResponse } from '.';
import prisma from '../prisma';
import { PostFormInput, PostFormSchema } from '../validators/auth';

export async function getPosts(args: {
	cursor?: string;
	take: number;
	skip: number;
	orderBy: {
		createdAt: 'asc' | 'desc';
	};
}) {
	try {
		const { take, skip, orderBy } = args;
		const posts = await prisma.posts.findMany({
			...(args.cursor && { cursor: { id: args.cursor } }),
			take,
			orderBy,
			include: {
				images: {
					select: {
						url: true,
					},
					take: 2,
				},
			},
		});
		return posts;
	} catch (error) {
		console.error(error);
		return [];
	}
}

export type PostsType = Awaited<ReturnType<typeof getPosts>>;
export async function getPostData(postId?: string) {
	try {
		if (!postId) return null;
		const post = await prisma.posts.findUnique({
			where: { id: postId },
			select: {
				id: true,
				createdAt: true,
				content: true,
				title: true,
				images: {
					select: { url: true },
					take: 2,
				},
			},
		});
		return post;
	} catch (error) {
		console.log(error);
		return null;
	}
}

export type PostType = Awaited<ReturnType<typeof getPostData>>;

export async function createPost(
	_: any,
	data: PostFormInput
): Promise<ActionResponse<PostFormInput>> {
	try {
		const parsed = PostFormSchema.safeParse(data);
		if (!parsed.success) {
			const err = parsed.error.flatten();
			return {
				fieldError: {
					title: err.fieldErrors.title?.[0],
					content: err.fieldErrors.content?.[0],
					category: err.fieldErrors.category?.[0],
					images: err.fieldErrors.images?.[0],
				},
			};
		}
		const { id, images, title, content, category } = data;
		if (id) {
			await prisma.posts.update({
				where: {
					id,
				},
				data: {
					title,
					content,
					...(images?.length
						? {
								images: {
									connectOrCreate: images.map(({ url }) => ({
										where: {
											url,
										},
										create: {
											url,
										},
									})),
								},
						  }
						: {}),
				},
			});
			revalidatePath('/admin/blogs');
			return {
				data: true,
			};
		} else {
			await prisma.posts.create({
				data: {
					...(images
						? {
								images: {
									create: images.map(({ url }) => ({ url })),
								},
						  }
						: {}),
					title,
					content,
				},
			});
			revalidatePath('/admin/blog');
			return {
				data: true,
			};
		}
	} catch (error) {
		console.log(error);
		return {
			formError: 'Error occurred',
		};
	}
}

export async function DeletePost(postId: string) {
	try {
		if (!postId) return false;
		await prisma.posts.delete({
			where: { id: postId },
		});
		revalidatePath('/admin/blog');
		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
}
