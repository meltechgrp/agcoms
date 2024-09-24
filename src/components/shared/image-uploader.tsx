import React from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { Button } from '../ui/button';

interface Props {
	saveImages: (images: ImageListType) => void;
	className?: string;
	images: ImageListType;
}

export default function ImageUploader({ saveImages, images }: Props) {
	const maxNumber = 4;

	return (
		<div className="grid gap-3">
			<ImageUploading
				multiple
				value={images}
				onChange={saveImages}
				maxNumber={maxNumber}>
				{({
					imageList,
					onImageUpload,
					onImageRemoveAll,
					onImageRemove,
					isDragging,
					dragProps,
				}) => (
					// write your building UI
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
							{imageList.map((image, index) => (
								<div key={index} className="grid gap-1">
									<img
										src={image.dataURL}
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
