'use client';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from '@/components/shared/image';
import RequestForm from './components/request-form';
import { useRouter } from 'next/navigation';

interface Props {
	searchParams: {
		request?: string;
	};
}

function Contact({ searchParams }: Props) {
	const router = useRouter();
	return (
		<div className="">
			<Breadcrumb className=" py-6 px-4 sm:px-12">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink
							className="text-base font-medium text-blue-500"
							href="/">
							Home
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator className=" text-blue-500 font-bold" />
					<BreadcrumbItem>
						<BreadcrumbPage className="text-sm text-gray-500 font-normal  capitalize">
							Request
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div>
				<div className="flex my-8  px-4 sm:px-12 justify-between items-center">
					<h1 className="text-xl  sm:text-4xl text-center">
						Request for Quotation
					</h1>
					<Button
						onClick={() => router.replace('?request=quote')}
						variant="outline"
						className="h-12 hidden sm:flex text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-700 font-bold border-2 border-blue-500">
						Request a quote
					</Button>
				</div>
				<div className="py-2">
					<Image
						src={'request.jpg'}
						alt={'Contact us'}
						folderName="home-banners"
						bucketName="banners"
						className="w-full h-[350px] sm:h-[520px] object-cover"
					/>
				</div>
				<div className="w-fit mx-auto my-6 px-4 sm:px-12 space-y-4 flex flex-col items-center">
					<h3 className="text-xl text-center sm:text-2xl">
						Agcoms Operations Center™
					</h3>
					<p className="text-center">
						Manage your farm or jobsite, including equipment, performance and
						more
					</p>
					<Button
						onClick={() => router.replace('?request=quote')}
						className="bg-green-400 hover:bg-green-500 text-black font-semibold w-56 h-12">
						Request a quote
					</Button>
				</div>
			</div>
			<div className="grid sm:grid-cols-[auto,65%] gap-6 pt-16">
				<div className="flex flex-col  px-4 sm:px-12 space-y-4 pt-4 sm:pt-12">
					<h2 className="text-lg sm:text-2xl">Dealer Tools</h2>
					<p className="text-gray-600">
						Agcoms offers a suite of digital tools to provide exceptional
						customer service.
					</p>
				</div>
				<div className="row-start-1 sm:col-start-2">
					<Image
						src={'help.jpg'}
						alt="Dealer Tools"
						bucketName="banners"
						folderName="home-banners"
						className="w-full h-[200px] sm:h-[400px] object-cover"
					/>
				</div>
			</div>
			<RequestForm open={!!searchParams?.request} />
		</div>
	);
}

export default Contact;
