'use client';
import React, { useEffect, useMemo } from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { useFormState } from 'react-dom';
import { uploadImage } from '@/lib/actions/image-handler';

export type Ids = string[];

const bucketId = process.env.NEXT_PUBLIC_APPWRITE_PRODUCT_IMAGES;
const key = process.env.NEXT_PUBLIC_APPWRITE_API_KEY;

export const productImageUrl = (id: string) =>
	`https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${id}/view?project=agcom&key=${key}`;

interface Props {
	saveImages: (images: Ids) => void;
	className?: string;
	images?: Ids;
}

export default function ImageUploader({ saveImages, images }: Props) {
	const maxNumber = 4;
	const [state, formAction] = useFormState(uploadImage, {});
	function handleUpload(images: ImageListType) {
		const formData = new FormData();
		images.forEach((image) => {
			image?.file && formData.append('image', image.file);
		});
		formAction(formData);
	}
	useEffect(() => {
		if (state?.error) toast.error(state.error);
		if (state?.data) {
			console.log(state);
			saveImages(state.data);
		}
	}, [state?.error, state?.data]);
	return (
		<div className="grid gap-3">
			<ImageUploading
				multiple
				value={[]}
				onChange={handleUpload}
				maxNumber={maxNumber}>
				{({
					imageList,
					onImageUpload,
					onImageRemoveAll,
					onImageRemove,
					isDragging,
					dragProps,
				}) => (
					<div className="grid gap-4">
						<div className="flex gap-3">
							<Button
								size={'sm'}
								type="button"
								style={isDragging ? { color: 'red' } : undefined}
								onClick={onImageUpload}
								{...dragProps}>
								Click or Drop here
							</Button>
							&nbsp;
							<Button size={'sm'} type="button" onClick={onImageRemoveAll}>
								Remove all images
							</Button>
						</div>
						<div className="flex flex-wrap gap-4">
							{images &&
								images.map((image, index) => (
									<div key={index} className="grid gap-1">
										<img
											src={productImageUrl(image)}
											alt=""
											className="w-[150px] sm:w-[250px] h-100px] sm:h-[150px] object-cover"
										/>
										<div className="flex gap-3">
											<Button
												size={'sm'}
												type="button"
												onClick={() => onImageRemove(index)}>
												Remove
											</Button>
										</div>
									</div>
								))}
						</div>
					</div>
				)}
			</ImageUploading>
		</div>
	);
}

function arrayBufferToImageString(buffer: ArrayBuffer): Promise<string> {
	return new Promise((resolve, reject) => {
		const blob = new Blob([buffer], { type: 'image/jpeg' });
		const reader = new FileReader();
		reader.onload = () => {
			if (typeof reader.result === 'string') {
				resolve(reader.result);
			} else {
				reject(new Error('Failed to convert ArrayBuffer to Base64 string'));
			}
		};
		reader.onerror = () => reject(new Error('Error reading ArrayBuffer'));
		reader.readAsDataURL(blob);
	});
}
