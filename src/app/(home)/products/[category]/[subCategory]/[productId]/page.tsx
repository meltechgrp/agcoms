import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Image from '@/components/shared/image';
import { getProductData } from '@/lib/actions/product-actions';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import HtmlText from '@/components/shared/html-text';
import Features from './components/features';
import Specifications from './components/specs';
import ScrollLink from '@/components/shared/scroll-link';

interface Props {
	params: {
		productId: string;
	};
}
async function Product({ params }: Props) {
	const { productId } = params;
	const data = await getProductData(productId);
	return (
		<div>
			<Breadcrumb className="px-4 sm:px-12 py-6">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink
							className="text-sm font-medium text-blue-500"
							href="/">
							Home
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator className=" text-blue-500 font-bold" />
					<BreadcrumbItem>
						<BreadcrumbLink
							className="text-sm font-medium text-blue-500"
							href="/products">
							Products
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator className=" text-blue-500 font-bold" />
					<BreadcrumbItem>
						<BreadcrumbLink
							className="text-sm font-medium text-blue-500"
							href={`/products/${data?.category.slug}`}>
							{data?.category.name}
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator className=" text-blue-500 font-bold" />
					<BreadcrumbItem>
						<BreadcrumbLink
							className="text-sm font-medium text-blue-500"
							href={`/products/${data?.category.slug}/${data?.subcategory?.slug}`}>
							{data?.subcategory?.name}
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator className=" text-blue-500 font-bold" />
					<BreadcrumbItem>
						<BreadcrumbPage className="text-sm text-gray-500 font-normal  capitalize">
							{data?.name}
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			{data ? (
				<div className=" space-y-8 ">
					<div className="grid px-4 sm:px-12 sm:grid-cols-[60%,auto]">
						<div className="relative h-full">
							<div>
								<Image
									src={data.images[0].url}
									className="rounded-md bg-transparent"
									alt={data.name}
									bucketName="images"
									folderName="product-images"
								/>
							</div>
						</div>
						<div className="px-3 py-4">
							<div className="space-y-3 pb-4">
								<h2 className="text-2xl font-bold">{data.name}</h2>
								<HtmlText
									text={data.description}
									className="text-sm px-3 [&_ul]:space-y-2 [&_li]:list-disc [&_li]:marker:text-blue-600 [&_li]:list-outside  font-semibold"
								/>
								<Separator />
							</div>
							<div className="my-4">
								<Button
									variant="outline"
									className="bg-blue-600 text-white transition-colors duration-700 font-bold">
									Contact us
								</Button>
							</div>
						</div>
					</div>
					<div>
						<div className="flex bg-[#e5e5e5] px-2">
							<ScrollLink
								className="px-3 py-4 text-base text-blue-700 bg-[#eff0f0] font-bold"
								to="feats"
								name="Features"
							/>
							<ScrollLink
								className="px-3 py-4 text-base font-bold text-black"
								to="specs"
								name="Specifications"
							/>
						</div>
						<div>
							<Features data={data} />
							<Specifications data={data} />
						</div>
					</div>
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
