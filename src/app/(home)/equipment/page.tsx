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
import { getProNavData } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from '@/components/shared/image';

async function Products() {
	const data = await getProNavData();
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
							Equipment
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div className=" pt-4 sm:py-4">
				<div className="sm:pb-8 relative sm:h-[500px] gap-6 flex flex-col justify-center items-center">
					<div className=" relative w-screen sm:w-[1350px] object-fill h-[150px] sm:h-[500px] sm:top-0 sm:left-0">
						<Image
							src={'equipment.jpg'}
							alt={'Equipment'}
							scale={true}
							className=" sm:object-cover relative sm:absolute w-full h-full"
							bucketName="banners"
							folderName="home-banners"
						/>
					</div>
					<div className=" hidden absolute sm:flex flex-col left-5 bottom-[1.5rem] sm:bottom-[5rem] space-y-2 sm:space-y-4 text-white backdrop-blur-md rounded-xl bg-black/30 w-[60%] sm:w-[45%] px-7 py-8 sm:p-10">
						<h1 className="text-base sm:text-3xl border-bottom self-start flex ">
							Equipment Brochure
						</h1>
						<p className="text-sm line-clamp-5 sm:line-clamp-none sm:text-sm">
							Explore the potential of AGCOMS International’s robust equipment
							lineup. Our comprehensive brochure offers detailed insights into
							our range of machinery for agriculture, construction, forestry,
							golf, and turf. Each piece is engineered to excel in diverse
							environments, ensuring maximum efficiency and reliability.
							Discover specifications, features, and unique benefits tailored to
							your industry’s needs
						</p>
						<div>
							<Link
								href={'#'}
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
				<div className=" sm:hidden py-6 flex flex-col gap-3 px-4 ">
					<h1 className="text-base sm:text-3xl border-bottom self-start flex ">
						Equipment Brochure
					</h1>
					<p className="text-sm">
						Explore the potential of AGCOMS International’s robust equipment
						lineup. Our comprehensive brochure offers detailed insights into our
						range of machinery for agriculture, construction, forestry, golf,
						and turf. Each piece is engineered to excel in diverse environments,
						ensuring maximum efficiency and reliability. Discover
						specifications, features, and unique benefits tailored to your
						industry’s needs
					</p>
					<div>
						<Link href={'#'} download target="_blank" rel="noopener noreferrer">
							<Button
								className=" bg-tertiary hover:bg-tertiary/90 text-white"
								size={'lg'}>
								Download Brochure
							</Button>
						</Link>
					</div>
				</div>
				<ProductNavigation />
				<ProductSections navData={data} />
			</div>
		</div>
	);
}

export default Products;
