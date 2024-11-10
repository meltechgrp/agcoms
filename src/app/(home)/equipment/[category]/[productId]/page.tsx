import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { getProductData } from '@/lib/actions/product-actions';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import HtmlText from '@/components/shared/html-text';
import ImageSlides from '@/components/image-slides';
import ProductCard from '../components/product-card';
import Link from 'next/link';

interface Props {
	params: {
		productId: string;
	};
}
async function Product({ params }: Props) {
	const { productId } = params;
	const product = await getProductData(productId);
	return (
		<div>
			<Breadcrumb className="px-4 lg:px-12 py-6">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink
							className="text-sm font-medium text-blue-500"
							href="/equipment">
							Equipment
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator className=" text-blue-500 font-bold" />
					<BreadcrumbItem>
						<BreadcrumbLink
							className="text-sm font-medium text-blue-500"
							href={`/equipment/${product?.category.slug}`}>
							{product?.category.name}
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator className=" text-blue-500 font-bold" />
					<BreadcrumbItem>
						<BreadcrumbPage className="text-sm text-gray-500 font-normal  capitalize">
							{product?.name}
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			{product ? (
				<div className=" space-y-8 ">
					<div className="grid lg:grid-cols-[60%,auto] bg-white">
						<div className="relative h-[18rem] lg:h-[36rem]">
							<ImageSlides images={product.images} />
						</div>
						<div className="px-7 lg:px-8 py-4">
							<div className="space-y-3 pb-4">
								<h2 className="text-2xl lg:text-3xl text-blue-600 font-bold">
									{product.name}
								</h2>
								<HtmlText
									text={product.description}
									className="text-sm px-3 [&_ul]:space-y-2 [&_li]:list-disc [&_li]:marker:text-blue-600 [&_li]:list-outside  font-semibold"
								/>
								<Separator />
							</div>
							<div className="my-4">
								<Link href={'/requests'}>
									<Button
										variant="outline"
										className="bg-blue-600 text-white transition-colors duration-700 font-bold">
										Contact us
									</Button>
								</Link>
							</div>
						</div>
					</div>
					{product?.category?.products && (
						<div className="space-y-4">
							<div className="flex justify-center bg-[#e5e5e5] px-2">
								<h3 className="px-3 py-4 text-xl  font-medium">
									Related models
								</h3>
							</div>
							<div className="grid lg:grid-cols-3 gap-4 px-4 lg:px-12">
								{product.category?.products.map((p) => (
									<ProductCard key={p.id} {...p} />
								))}
							</div>
						</div>
					)}
				</div>
			) : (
				<div className="flex justify-center items-center h-96">
					<h4 className="text-xl">Product not found! </h4>
				</div>
			)}
		</div>
	);
}

export default Product;
