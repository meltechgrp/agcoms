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
		const blogs = await prisma.blog.findMany({
			...(args.cursor && { cursor: { id: args.cursor } }),
			take,
			orderBy,
			include: {
				category: {
					select: {
						name: true,
					},
				},
				images: {
					select: {
						url: true,
					},
					take: 2,
				},
			},
		});
		return blogs;
	} catch (error) {
		console.error(error);
		return [];
	}
}

export type PostsType = Awaited<ReturnType<typeof getPosts>>;
export async function getPostData(blogId?: string) {
	try {
		if (!blogId) return null;
		const blog = await prisma.blog.findUnique({
			where: { id: blogId },
			select: {
				id: true,
				createdAt: true,
				content: true,
				category: {
					select: { name: true },
				},
				title: true,
				images: {
					select: { url: true },
					take: 2,
				},
			},
		});
		return blog;
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
			await prisma.blog.update({
				where: {
					id,
				},
				data: {
					title,
					content,
					category: {
						connect: {
							name: category,
						},
					},
					...(images?.length
						? {
								images: {
									connectOrCreate: images.map(({ url }) => ({
										where: {
											url, // Assuming you're matching images by their URL
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
			return {
				data: true,
			};
		} else {
			await prisma.blog.create({
				data: {
					...(images
						? {
								images: {
									createMany: {
										data: images.map(({ url }) => ({ url })),
									},
								},
						  }
						: {}),
					title,
					content,
					category: {
						connect: {
							name: category,
						},
					},
				},
			});
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
		await prisma.blog.delete({
			where: { id: postId },
		});
		revalidatePath('/admin/blog');
		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
}
