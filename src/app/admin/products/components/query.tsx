'use server';
import { ActionResponse } from '@/lib/auth/actions';
// import { validateRequest } from '@/lib/auth/validate-request';
import { PostFormInput, PostFormSchema } from '@/lib/validators/auth';

export async function getBlogs(args: {
	cursor?: string;
	take: number;
	skip: number;
	orderBy: {
		createdAt: 'asc' | 'desc';
	};
}) {
	try {
		const { take, skip, orderBy } = args;
		return [];
	} catch (error) {
		console.log(error);
		return [];
	}
}
export type BlogsData = Awaited<ReturnType<typeof getBlogs>>;
export async function getPostData(blogId?: string) {
	try {
		if (!blogId) return null;
		return null;
	} catch (error) {
		console.log(error);
		return null;
	}
}

export type PostData = Awaited<ReturnType<typeof getPostData>>;

export async function CreatePost(
	_: any,
	form: PostFormInput
): Promise<ActionResponse<PostFormInput>> {
	try {
		// const { user } = await validateRequest();
		// if (!user) {
		// 	return {
		// 		formError: 'User not authenticated',
		// 	};
		// }
		const parsed = PostFormSchema.safeParse(form);
		if (!parsed.success) {
			const err = parsed.error.flatten();
			return {
				fieldError: {
					title: err.fieldErrors.title?.[0],
					content: err.fieldErrors.content?.[0],
					imagePaths: err.fieldErrors.imagePaths?.[0],
					category: err.fieldErrors.category?.[0],
				},
			};
		}
		const { title, content, imagePaths, category, id } = form;

		if (id) {
			return {
				data: true,
			};
		}
		return {
			data: true,
		};
	} catch (error) {
		console.log(error);
		return {
			formError: 'Error occuried',
		};
	}
}

export async function DeletePost(postId: string) {
	try {
		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
}
