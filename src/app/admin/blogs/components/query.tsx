'use server';
import { validateRequest } from '@/lib/auth/validate-request';
import prisma from '@/lib/prisma';

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
		const blogs = await prisma.blog.findMany({
			select: {
				id: true,
				createdAt: true,
				content: true,
				category: true,
				title: true,
				slug: true,
				bannerImage: true,
			},
			...(args.cursor && { cursor: { id: args.cursor } }),

			orderBy,
		});
		return blogs;
	} catch (error) {
		console.log(error);
		return [];
	}
}
export type BlogsData = Awaited<ReturnType<typeof getBlogs>>;
export async function getReportData(blogId?: string) {
	try {
		if (!blogId) return null;
		const blogs = await prisma.blog.findUnique({
			where: { id: blogId },
			select: {
				id: true,
				createdAt: true,
				content: true,
				category: true,
				title: true,
				slug: true,
				bannerImage: true,
			},
		});
		return blogs;
	} catch (error) {
		console.log(error);
		return null;
	}
}

export type ReportData = Awaited<ReturnType<typeof getReportData>>;

// export async function addComment(id: string, comment: string) {
// 	try {
// 		if (!comment) return null;
// 		const { user } = await validateRequest();
// 		if (!user) return null;

// 		const report = await prisma.reportComment.create({
// 			data: {
// 				comment,
// 				creator: { connect: { id: user.id } },
// 				report: { connect: { id } },
// 			},
// 		});
// 		return report;
// 	} catch (error) {
// 		console.log('Error updating report', error);
// 		return null;
// 	}
// }
