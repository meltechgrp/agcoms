'use client';
import { cn } from '@/lib/utils';
import { useMemo, useState } from 'react';
import useImageHandler from '@/hooks/useImageHandler';

interface Props {
	bucketName: string;
	folderName: string;
	height?: number | string;
	width?: number | string;
	className?: string;
	src: string;
	alt: string;
}

const Image = ({
	className,
	src,
	alt,
	bucketName,
	folderName,
	...props
}: Props) => {
	const { getImageUrl } = useImageHandler(bucketName, folderName);
	return useMemo(
		() => (
			<img
				{...props}
				src={getImageUrl(src)}
				alt={alt}
				style={{ color: 'transparent' }}
				className={cn('w-full h-full object-cover', className)}
			/>
		),
		[props]
	);
};

export default Image;
