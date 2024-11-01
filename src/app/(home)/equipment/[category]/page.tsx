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
import ProductCard from './components/product-card';
import { uniqueId } from '@/lib/utils';
import { Button } from '@/components/ui/button';

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
			description: true,
			brochureLink: true,
			images: {
				select: {
					url: true,
				},
				take: 1,
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
				},
				take: 9,
				orderBy: {
					createdAt: 'desc',
				},
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
							href="/equipment">
							Equipment
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
							scale={true}
							className="w-screen sm:w-[1350px] object-fill h-[150px] sm:h-[420px] sm:object-cover relative sm:absolute sm:top-0 sm:left-0"
							bucketName="banners"
							folderName="product-categories"
						/>
						<div className=" hidden absolute sm:flex flex-col left-5 bottom-[1.5rem] sm:bottom-[5rem] space-y-2 sm:space-y-4 text-white backdrop-blur-md rounded-xl bg-black/30 w-[60%] sm:w-[45%] px-7 py-8 sm:p-10">
							<h1 className="text-base sm:text-3xl border-bottom self-start flex ">
								{data.name} Equipment
							</h1>
							<p className="text-sm line-clamp-5 sm:line-clamp-none sm:text-sm">
								{data.description}
							</p>
							<div>
								<Link
									href={data?.brochureLink || '#'}
									download
									target="_blank"
									rel="noopener noreferrer">
									<Button
										className=" bg-tertiary hover:bg-tertiary/90 text-white"
										size={'lg'}>
										Download Brochure
									</Button>
								</Link>
							</div>
						</div>
					</div>
					<div className=" sm:hidden flex flex-col gap-3 px-4 ">
						<h1 className="text-base sm:text-3xl border-bottom self-start flex ">
							{data.name} Equipment
						</h1>
						<p className="text-sm">{data.description}</p>
						<div>
							<Link
								href={data?.brochureLink || '#'}
								download
								target="_blank"
								rel="noopener noreferrer">
								<Button
									className=" bg-tertiary hover:bg-tertiary/90 text-white"
									size={'lg'}>
									Download Brochure
								</Button>
							</Link>
						</div>
					</div>
					<div className="px-4 sm:px-12 py-10 bg-[#f4f3f3]">
						<div className="flex justify-between gap-6 flex-wrap">
							<ul className="grid grid-cols-2 sm:grid-cols-5 gap-2 py-2">
								{data.products.map((p) => (
									<Link key={p.id} href={`/equipment/${data.slug}/${p.id}`}>
										<div key={p.id} className=" space-y-2">
											<h4 className="text-sm text-green-700 font-medium">
												{p.name}
											</h4>
										</div>
									</Link>
								))}
							</ul>
						</div>
					</div>
					{data.products.length && (
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
					)}
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
