'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { PostFormInput, PostFormSchema } from '@/lib/validators/auth';
import { useFormState } from 'react-dom';
import { Input } from '@/components/ui/input';
import { CreatePost, PostData } from './query';
import {
	AlertTriggerButton,
	useAlertToggle,
} from '@/components/shared/alert-wrapper';
import { toast } from 'sonner';
import { LoaderIcon } from 'lucide-react';
import { AlertDialogFooter } from '@/components/ui/alert-dialog';
import BlogCategorySelect from '@/components/shared/select-blog-category';
import ImageUploader from '@/components/shared/image-uploader';
import { Textarea } from '@/components/ui/text-area';
import { ImageListType } from 'react-images-uploading';

const NewPost = (props: { data?: PostData }) => {
	const { data } = props;
	const [images, setImages] = useState<ImageListType>([]);
	const form = useForm<PostFormInput>({
		resolver: zodResolver(PostFormSchema),
		defaultValues: {
			id: data?.id,
			title: data?.title || '',
			content: data?.content || '',
			category: data?.category?.name || '',
			imagePaths: [],
		},
	});
	const [loading, setLoading] = React.useState(false);
	const dismissAlert = useAlertToggle();
	const [state, dispatch] = useFormState(CreatePost, undefined);

	const handleUpload = async () => {
		const formData = new FormData();
		images.forEach((image) => {
			if (image.file) {
				formData.append('image', image.file);
			}
		});
		try {
			const response = await fetch('/api/blog-upload', {
				method: 'POST',
				body: formData,
			});

			const data: { uploadedFiles: string[] } = await response.json();
			console.log('Uploade:', data);
			form.setValue(
				'imagePaths',
				data.uploadedFiles.map((u) => {
					return { url: u };
				})
			);
			return data.uploadedFiles.length > 0 ? true : false;
		} catch (error) {
			console.error('Upload failed:', error);
			toast.error('Failed to upload images');
			return false;
		}
	};

	async function handleSubmit(data: PostFormInput) {
		setLoading(true);
		const saved = await handleUpload();
		if (saved) return dispatch(data);
		toast.error('Upload failed');
	}
	useEffect(() => {
		if (state?.fieldError) {
			setLoading(false);
			Object.entries(state.fieldError).forEach(([key, value]) => {
				form.setError(key as any, {
					type: 'manual',
					message: value,
				});
			});
		}
		if (state?.formError) {
			setLoading(false);
			toast.error(state.formError);
		}
		if (state?.data) {
			setLoading(false);
			toast.success(
				data?.id
					? 'Publication updated successfully'
					: 'Publication created successfully'
			);
			form.reset();
			data ? dismissAlert('edit', 'true') : dismissAlert('postId', 'new');
		}
	}, [state?.formError, state?.fieldError, state?.data]);
	return (
		<>
			<div className="space-y-4">
				<h2 className="space-x-3">
					<span className="text-xl font-medium">
						{data?.id ? 'Update Publication' : 'Add New Publication'}
					</span>
				</h2>
			</div>
			<div className="my-4">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(handleSubmit)}
						encType="multipart/form-data">
						<div className="grid gap-4">
							<FormField
								control={form.control}
								name="id"
								render={({ field }) => (
									<FormItem hidden>
										<FormControl>
											<Input type="text" placeholder="id" {...field} />
										</FormControl>
									</FormItem>
								)}
							/>
							<div className="grid sm:grid-cols-2 gap-4">
								<FormField
									control={form.control}
									name="title"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Publbication title</FormLabel>
											<FormControl>
												<Input
													type="text"
													placeholder="Publbication title"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="category"
									render={() => (
										<FormItem>
											<FormLabel>Category</FormLabel>
											<FormControl>
												<BlogCategorySelect
													name={form.getValues('category')}
													onValueChange={(name) => {
														form.setValue('category', name);
													}}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<FormField
								control={form.control}
								name="imagePaths"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Publbication images</FormLabel>
										<FormControl>
											<ImageUploader
												images={images}
												saveImages={(images) => {
													setImages(images);
												}}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="content"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Publbication content</FormLabel>
										<FormControl>
											<Textarea placeholder="Publbication content" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<AlertDialogFooter className="w-full flex flex-row gap-3 mt-3 ">
								<AlertTriggerButton alertKey="postId" alertValue="new" asChild>
									<Button
										size={'lg'}
										className="w-full"
										variant={'outline'}
										type="button">
										Cancel
									</Button>
								</AlertTriggerButton>
								<Button
									disabled={loading}
									size={'lg'}
									className="w-full"
									type="submit">
									{loading && (
										<LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
									)}
									{data?.id ? 'Update' : 'Save'}
								</Button>
							</AlertDialogFooter>
						</div>
					</form>
				</Form>
			</div>
		</>
	);
};

export default NewPost;
