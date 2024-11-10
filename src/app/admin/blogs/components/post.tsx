'use client';
import {
	AlertTriggerButton,
	AlertWrapper,
	useAlertToggle,
} from '@/components/shared/alert-wrapper';
import { format } from 'date-fns';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import NewPost from './new-post';
import { toast } from 'sonner';
import { DeletePost, PostType } from '@/lib/actions/blog-actions';
import { uniqueId } from '@/lib/utils';
import HtmlText from '@/components/shared/html-text';
import Image from '@/components/shared/image';

type Props = {
	open: boolean;
	postId?: string;
	post: PostType;
	edit?: string;
};

export function PostAlert({ open, post, postId, edit }: Props) {
	const router = useAlertToggle();
	return (
		<AlertWrapper
			alertKey="postId"
			alertValue={postId || 'new'}
			open={open}
			className={'md:min-w-[56rem] overflow-scroll max-h-screen md:w-[75vw]'}>
			<div className="overflow-y-scroll">
				{postId === 'new' || edit === 'true' ? (
					<NewPost post={post} />
				) : (
					<>
						<div className="space-y-4">
							<h2 className="text-xl">Post Details</h2>
						</div>
						{post && (
							<div className=" mt-1">
								<div className="w-full">
									<div className="flex flex-col gap-5 py-3">
										<div className="grid md:grid-cols-3 gap-4">
											{post?.images?.map((im) => (
												<div
													key={uniqueId()}
													className="flex justify-center w-full h-32 items-center">
													<Image
														src={im.url}
														alt={post.title}
														bucketName="images"
														folderName="blog-images"
													/>
												</div>
											))}
										</div>
										<Card className="py-2 px-4">
											<CardContent className="space-y-4 px-4 py-1">
												<div className="flex justify-between items-center w-full text-sm">
													<span className="text-gray-500">Title:</span>
													<span>{post?.title || ''}</span>
												</div>
												<div className="flex justify-between items-center w-full text-sm">
													<span className="text-gray-500">Date created:</span>
													<time className="text-sm text-gray-500 ml-auto">
														{post?.createdAt
															? format(new Date(post.createdAt), 'MMM dd, yyyy')
															: ''}
													</time>
												</div>
												<div className="flex justify-between items-center w-full text-sm">
													<span className="text-gray-500">post ID:</span>
													<span>{post?.id || ''}</span>
												</div>
											</CardContent>
										</Card>
										<Card className="px-4 py-2">
											<HtmlText
												text={post.content}
												className="text-xs font-semibold"
											/>
										</Card>
										<div className="flex gap-4 items-center">
											<Link href={`?postId=${post.id}&edit=true`} className="">
												<Button
													className=" border-2"
													variant={'outline'}
													size={'lg'}>
													Edit Post
												</Button>
											</Link>
											<AlertTriggerButton
												alertKey="postId"
												alertValue={post?.id || 'new'}
												className="px-8 py-2">
												Cancel
											</AlertTriggerButton>
											<Button
												onClick={async () => {
													const res = await DeletePost(post?.id || '');
													if (!res) {
														toast.error('Please try again');
													} else {
														router('postId', post.id);
														toast.success('Post deleted successfully');
													}
												}}
												className="px-8 py-2">
												Delete
											</Button>
										</div>
									</div>
								</div>
							</div>
						)}
					</>
				)}
			</div>
		</AlertWrapper>
	);
}
