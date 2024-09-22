import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { NavMenuData } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

interface Props {
	params: {
		category: string;
	};
}
function ProductCategory({ params: { category } }: Props) {
	const cat = useMemo(() => {
		return NavMenuData[0].sub.find(
			(c) => c.title.toLowerCase() === category || c?.slug === category
		);
	}, [category]);
	return (
		<div>
			<Breadcrumb className="px-4 sm:px-12 py-6">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink
							className="text-base font-medium text-green-500"
							href="/">
							Home
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator className=" text-green-500 font-bold" />
					<BreadcrumbItem>
						<BreadcrumbLink
							className="text-base font-medium text-green-500"
							href="/products">
							Products
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator className=" text-green-500 font-bold" />
					<BreadcrumbItem>
						<BreadcrumbPage className="text-sm text-gray-500 font-normal  capitalize">
							{category}
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div>
				<div className="py-2 relative h-80 flex justify-center items-center">
					<h2 className="text-5xl capitalize text-white font-bold relative z-10">
						{cat?.title || ''}
					</h2>
					<Image
						src={`/p-categories/${category}.avif`}
						alt={category}
						width={1300}
						height={320}
						className="w-full h-full object-cover absolute top-0 left-0 right-0 bottom-0"
					/>
				</div>
				<div className="px-4 sm:px-12 py-10">
					<div className="flex justify-between gap-6 flex-wrap">
						{cat?.categories?.map((c) => (
							<div key={c.title} className="w-[45%] sm:w-[22%] space-y-2">
								<h3 className="text-base capitalize text-gray-800 font-bold">
									{c?.title || ''}
								</h3>
								<ul className="grid gap-1 py-2">
									{c.cats.map((i) => (
										<Link key={i.title} href={i.link}>
											<li>
												<h4 className="text-sm text-green-700 font-medium">
													{i.title}
												</h4>
											</li>
										</Link>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductCategory;
