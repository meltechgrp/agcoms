import HtmlText from '@/components/shared/html-text';
import Image from '@/components/shared/image';
import { Card } from '@/components/ui/card';
import { ProductsType } from '@/lib/actions/product-actions';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

type Props = Partial<ProductsType[0]> & {
	className?: string;
};

const ProductCard = (props: Props) => {
	const { id, name, className, images, category, description } = props;
	return (
		<Card className={cn('  w-full bg-white space-y-1', className)}>
			<div className="w-full h-56 sm:h-64">
				{images && (
					<Image
						src={images[0].url}
						className="rounded-md"
						alt={name ?? ''}
						bucketName="images"
						folderName="product-images"
						scale={true}
						zoomIn={true}
					/>
				)}
			</div>
			<div className="">
				<Link
					href={`/equipments/${category?.slug}/${id}`}
					className="flex flex-col gap-2 px-3 py-2">
					<h2 className="text-base self-start border-b border-black">{name}</h2>
					<HtmlText
						text={description ?? ''}
						className="font-bold [&_li]:text-start [&_ul]:space-y-2 text-xs line-clamp-3 "
					/>
				</Link>
			</div>
		</Card>
	);
};

export default ProductCard;
