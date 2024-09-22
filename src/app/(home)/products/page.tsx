'use client';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import ProductNavigation from '@/components/products/p-nav';
import ProductSections from '@/components/products/p-sections';

function Products() {
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
						<BreadcrumbPage className="text-sm text-gray-500 font-normal  capitalize">
							Products
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div className=" pt-4 sm:py-4">
				<div className="px-4 sm:px-12 mb-12">
					<h1 className="text-xl sm:text-3xl text-center">
						Products, Machines & Equipment
					</h1>
				</div>
				<ProductNavigation />
				<ProductSections />
			</div>
		</div>
	);
}

export default Products;
