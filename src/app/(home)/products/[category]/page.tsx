import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { NavMenuData } from '@/lib/constants';
import Link from 'next/link';
import { useCallback, useMemo } from 'react';
import Agriculture from './agriculture';

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
	const PageDetails = useCallback(() => {
		switch (category) {
			case 'agriculture':
				return <Agriculture />;
			default:
				return <div></div>;
		}
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
				<div className="py-2 relative sm:h-80 space-y-4 flex flex-col justify-center items-center">
					<img
						src={`/p-categories/${category}.avif`}
						alt={category}
						className="w-screen sm:w-[1350px] object-fill h-[150px] sm:h-[320px] sm:object-cover relative sm:absolute sm:top-0 sm:left-0"
					/>
					<h2 className="text-3xl sm:text-5xl text-center sm:text-start capitalize text-black sm:text-white font-bold relative z-10">
						{cat?.title || ''}
					</h2>
				</div>
				<div className="px-4 sm:px-12 py-10 bg-[#f4f3f3]">
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
				<PageDetails />
			</div>
		</div>
	);
}

export default ProductCategory;
