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
import ProductCategorySelect from '@/components/shared/select-product-category';
import ImageUploader from '@/components/shared/image-uploader';
import { Textarea } from '@/components/ui/text-area';
import { ImageListType } from 'react-images-uploading';
import ProductSubCategorySelect from '@/components/shared/select-product-subCat';

const NewPost = (props: { product?: any }) => {
	const { product } = props;
	const [images, setImages] = useState<ImageListType>([]);
	const form = useForm<PostFormInput>({
		resolver: zodResolver(PostFormSchema),
		defaultValues: {
			id: product?.id,
			title: product?.title || '',
			content: product?.content || '',
			category: product?.category?.name || '',
			imagePaths: product?.images || [],
		},
	});
	const [loading, setLoading] = React.useState(false);
	const dismissAlert = useAlertToggle();
	const [state, dispatch] = useFormState(CreatePost, undefined);

	const handleUpload = async (title: string) => {
		if (!title) return false;
		console.log(title, 'in a lot');
		const formData = new FormData();
		images.forEach((image) => {
			if (image.file) {
				formData.append('image', image.file);
			}
		});
		formData.append('title', title);
		try {
			return null;
		} catch (error) {
			console.error('Upload failed:', error);
			toast.error('Failed to upload images');
			return false;
		}
	};

	async function handleSubmit(data: PostFormInput) {
		setLoading(true);
		return dispatch(data);
	}
	useEffect(() => {
		const urls = product?.images.map((im: any) => ({ dataURL: im.url }));
		urls && setImages([...urls]);
	}, [product]);
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
			console.log('at state data', form.getValues('title'));
			handleUpload(form.getValues('title') as string)
				.then(() => {
					setLoading(false);
					toast.success(
						product?.id
							? 'Product updated successfully'
							: 'Product created successfully'
					);
					form.reset();
					return product
						? dismissAlert('edit', 'true')
						: dismissAlert('productId', 'new');
				})
				.catch(() => {
					setLoading(false);
					return toast.error('Failed to upload publication images');
				});
		}
	}, [state?.formError, state?.fieldError, state?.data]);
	return (
		<>
			<div className="space-y-4">
				<h2 className="space-x-3">
					<span className="text-xl font-medium">
						{product?.id ? 'Update Product' : 'Add New Product'}
					</span>
				</h2>
			</div>
			<div className="my-4 px-2">
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
							<FormField
								control={form.control}
								name="title"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Product title</FormLabel>
										<FormControl>
											<Input
												type="text"
												placeholder="Product title"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className="grid sm:grid-cols-2 gap-4">
								<FormField
									control={form.control}
									name="category"
									render={() => (
										<FormItem>
											<FormLabel>Category</FormLabel>
											<FormControl>
												<ProductCategorySelect
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
								<FormField
									control={form.control}
									name="category"
									render={() => (
										<FormItem>
											<FormLabel>Sub category</FormLabel>
											<FormControl>
												<ProductSubCategorySelect
													category={form.getValues('category')}
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
										<FormLabel>Product images</FormLabel>
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
										<FormLabel>Product content</FormLabel>
										<FormControl>
											<Textarea placeholder="Product content" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<AlertDialogFooter className="w-full flex flex-row gap-3 mt-3 ">
								<AlertTriggerButton
									alertKey="productId"
									alertValue={product ? 'true' : 'new'}
									type="button"
									className="px-8 py-2 flex-1">
									Cancel
								</AlertTriggerButton>
								<Button
									disabled={loading}
									size={'lg'}
									className=" flex-1"
									type="submit">
									{loading && (
										<LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
									)}
									{product?.id ? 'Update' : 'Save'}
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
