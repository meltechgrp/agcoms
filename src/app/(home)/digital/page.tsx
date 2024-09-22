import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import digital from '@/assets/images/category/digital.avif';
import dealerTools from '@/assets/images/dealer-tools-image.avif';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function Digital() {
	return (
		<div className="px-4 sm:px-12">
			<Breadcrumb className=" py-6">
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
							Digital Tools
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div>
				<div className="flex my-8 justify-between items-center">
					<h1 className="text-3xl sm:text-5xl text-center">Digital Tools</h1>
					<Link href={'#'}>
						<Button
							variant="outline"
							className="h-12 text-black hover:bg-black hover:text-white transition-colors duration-700 font-bold border-2 border-black">
							Create an account
						</Button>
					</Link>
				</div>
				<div className="py-2">
					<Image
						src={digital}
						alt={'Dgital Tools'}
						style={{ width: '100%', height: 'auto' }}
						className="w-full h-[350px] sm:h-[520px] object-cover"
					/>
				</div>
				<div className="w-fit mx-auto my-6 space-y-4 flex flex-col items-center">
					<h3 className="text-xl text-center sm:text-2xl">
						John Deere Operations Center™
					</h3>
					<p className="text-center">
						Manage your farm or jobsite, including equipment, performance and
						more
					</p>
					<Link href={'#'}>
						<Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold w-56 h-12">
							Sign in to Operations Center
						</Button>
					</Link>
				</div>
			</div>
			<div className="grid sm:grid-cols-[auto,65%] gap-6 pt-16">
				<div className="flex flex-col space-y-4 pt-4 sm:pt-12">
					<h2 className="text-lg sm:text-2xl">Dealer Tools</h2>
					<p className="text-gray-600">
						John Deere offers a suite of digital tools for dealers to provide
						exceptional customer service.
					</p>

					<Link href={'#'} className="mx-auto sm:mx-0">
						<Button
							variant={'outline'}
							className="border-green-600 border-2 hover:bg-green-500 text-green-600 hover:text-white transition-colors duration-700 font-semibold w-24 h-12">
							Sign in
						</Button>
					</Link>
				</div>
				<div className="row-start-1">
					<Image
						src={dealerTools}
						alt="Dealer Tools"
						style={{ width: '100%', height: 'auto' }}
						className="w-full h-[200px] sm:h-[400px] object-cover"
					/>
				</div>
			</div>
		</div>
	);
}

export default Digital;
