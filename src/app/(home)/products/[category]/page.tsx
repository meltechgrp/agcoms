import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';
import Image from '@/components/shared/image';
import prisma from '@/lib/prisma';
import SubCard from './components/sub-card';
import ProductCard from './components/product-card';
import { uniqueId } from '@/lib/utils';

interface Props {
	params: {
		category: string;
	};
}
async function ProductCategory({ params: { category } }: Props) {
	const data = await prisma.productCategories.findUnique({
		where: {
			slug: category,
		},
		select: {
			name: true,
			slug: true,
			images: {
				select: {
					url: true,
				},
				take: 1,
			},
			subcategories: {
				select: {
					name: true,
					slug: true,
					description: true,
					products: {
						select: {
							id: true,
							name: true,
						},
					},
					images: {
						select: {
							url: true,
						},
						take: 1,
					},
				},
			},
			products: {
				select: {
					id: true,
					name: true,
					description: true,
					images: {
						select: {
							url: true,
						},
						take: 1,
					},
					category: {
						select: {
							name: true,
							slug: true,
						},
					},
					subcategory: {
						select: {
							name: true,
							slug: true,
						},
					},
				},
				take: 6,
			},
		},
	});
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
						<BreadcrumbPage className="text-sm text-gray-500 font-normal  capitalize">
							{category}
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			{data ? (
				<div className="grid gap-4">
					<div className="py-2 relative sm:h-[420px] space-y-4 flex flex-col justify-center items-center">
						<Image
							src={data.images[0].url}
							alt={category}
							className="w-screen sm:w-[1350px] object-fill h-[150px] sm:h-[420px] sm:object-cover relative sm:absolute sm:top-0 sm:left-0"
							bucketName="banners"
							folderName="product-categories"
						/>
						<h2 className="text-3xl sm:text-5xl text-center sm:text-start capitalize text-black sm:text-white font-bold relative z-10">
							{data.name}
							<span className="absolute inset-0 bg-black rounded-lg blur-lg -z-10"></span>
						</h2>
					</div>
					<div className="px-4 sm:px-12 py-10 bg-[#f4f3f3]">
						<div className="flex justify-between gap-6 flex-wrap">
							{data.subcategories.map((c) => (
								<div key={c.name} className="w-[45%] sm:w-[22%] space-y-2">
									<h3 className="text-base capitalize  text-gray-800 font-bold">
										{c?.name || ''}
									</h3>
									<ul className="grid gap-1 py-2">
										{c.products.map((p) => (
											<Link
												key={p.id}
												href={`/products/${data.slug}/${c.slug}/${p.id}`}>
												<li>
													<h4 className="text-sm text-green-700 font-medium">
														{p.name}
													</h4>
												</li>
											</Link>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>

					<div className="px-4 sm:px-12 py-10">
						<div className="grid sm:grid-cols-2 gap-6 sm:gap-12">
							{data.subcategories.map((c) => (
								<SubCard key={uniqueId()} category={category} {...c} />
							))}
						</div>
					</div>
					<div className="px-4 sm:px-12  space-y-3">
						<div className="py-2 px-2 bg-gray-300 flex justify-between">
							<h3 className="text-base font-medium">Recent products</h3>
						</div>
						<div className="grid sm:grid-cols-3 gap-4">
							{data.products.map((p) => (
								<ProductCard key={uniqueId()} {...p} />
							))}
						</div>
					</div>
				</div>
			) : (
				<div className="flex justify-center items-center h-96">
					<h4 className="text-xl">Category not found! </h4>
				</div>
			)}
		</div>
	);
}

export default ProductCategory;
