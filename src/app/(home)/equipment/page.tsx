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
			<Breadcrumb className="px-4 lg:px-12 py-6">
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
			<div className=" pt-4 lg:py-4">
				<div className="lg:pb-8 relative lg:h-[500px] gap-6 flex flex-col justify-center items-center">
					<div className=" relative w-screen lg:w-[1350px] object-fill h-[150px] lg:h-[500px] lg:top-0 lg:left-0">
						<Image
							src={'equipment.jpg'}
							alt={'Equipment'}
							scale={true}
							className=" lg:object-cover relative lg:absolute w-full h-full"
							bucketName="banners"
							folderName="home-banners"
						/>
					</div>
					<div className=" hidden absolute lg:flex flex-col left-5 bottom-[1.5rem] lg:bottom-[5rem] space-y-2 lg:space-y-4 text-white backdrop-blur-md rounded-xl bg-black/30 w-[60%] lg:w-[45%] px-7 py-8 lg:p-10">
						<h1 className="text-base lg:text-3xl border-bottom self-start flex ">
							Equipment Brochure
						</h1>
						<p className="text-sm line-clamp-5 lg:line-clamp-none lg:text-sm">
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
				<div className=" lg:hidden py-6 flex flex-col gap-3 px-4 ">
					<h1 className="text-base lg:text-3xl border-bottom self-start flex ">
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
