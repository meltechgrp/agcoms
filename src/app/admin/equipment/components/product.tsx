'use client';
import {
	AlertTriggerButton,
	AlertWrapper,
} from '@/components/shared/alert-wrapper';
import { format } from 'date-fns';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import NewProduct from './new-product';
import { toast } from 'sonner';
import { cn, uniqueId } from '@/lib/utils';
import { deleteProduct, ProductType } from '@/lib/actions/product-actions';
import Image from '@/components/shared/image';
import HtmlText from '@/components/shared/html-text';

type Props = {
	open: boolean;
	productId?: string;
	product: ProductType;
	edit?: string;
};

export function ProductAlert({ open, product, productId, edit }: Props) {
	return (
		<AlertWrapper
			alertKey="productId"
			alertValue={productId || 'new'}
			open={open}
			className={cn(
				'lg:min-w-[56rem] overflow-scroll max-h-screen lg:w-[75vw]',
				productId === 'new' || edit === 'true' ? 'px-0 py-0' : ''
			)}>
			<div className="overflow-y-scroll">
				{productId === 'new' || edit === 'true' ? (
					<NewProduct product={product} />
				) : (
					<>
						<div className="space-y-4">
							<h2 className="text-xl">Product Details</h2>
						</div>
						<div className=" mt-1">
							<div className="w-full">
								<div className="flex flex-col gap-5 py-3">
									<div className="grid lg:grid-cols-3 gap-4">
										{product?.images.map((im) => (
											<div
												key={uniqueId()}
												className="flex justify-center w-full h-32 items-center">
												<Image
													src={im.url}
													alt={product.name}
													bucketName="images"
													folderName="product-images"
												/>
											</div>
										))}
									</div>
									<Card className="py-2 px-4">
										<CardContent className="space-y-4 px-4 py-1">
											<div className="flex justify-between items-center w-full text-sm">
												<span className="text-gray-500">Title:</span>
												<span>{product?.name || ''}</span>
											</div>
											<div className="flex justify-between items-center w-full text-sm">
												<span className="text-gray-500">Date created:</span>
												<time className="text-sm text-gray-500 ml-auto">
													{product?.createdAt
														? format(
																new Date(product.createdAt),
																'MMM dd, yyyy'
														  )
														: ''}
												</time>
											</div>
											<div className="flex justify-between items-center w-full text-sm">
												<span className="text-gray-500">product ID:</span>
												<span>{product?.id || ''}</span>
											</div>
											<div className="flex justify-between items-center w-full text-sm">
												<span className="text-gray-500">Category:</span>
												<span>{product?.category?.name || ''}</span>
											</div>
										</CardContent>
									</Card>
									<Card className="px-4 py-2">
										<HtmlText
											text={product?.description ?? ''}
											className="text-xs font-semibold"
										/>
									</Card>
									<div className="flex gap-4 items-center">
										<Link
											href={`?productId=${product?.id}&edit=true`}
											className="">
											<Button
												className=" border-2"
												variant={'outline'}
												size={'lg'}>
												Edit Product
											</Button>
										</Link>
										<AlertTriggerButton
											alertKey="productId"
											alertValue={product?.id || 'new'}
											className="px-8 py-2">
											Cancel
										</AlertTriggerButton>
										<AlertTriggerButton
											onClick={async () => {
												const res = await deleteProduct(product?.id || '');
												if (!res) {
													toast.error('Please try again');
												} else {
													toast.success('Product deleted successfully');
												}
											}}
											alertKey="productId"
											alertValue={product?.id || 'new'}
											className="px-8 py-2">
											Delete
										</AlertTriggerButton>
									</div>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</AlertWrapper>
	);
}
