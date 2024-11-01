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
							Request a Quotation
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div className="grid sm:grid-cols-2 gap-6 py-4">
				<div className="flex flex-col  px-4 sm:px-12 space-y-4 pt-4 sm:pt-12">
					<h2 className="text-lg sm:text-2xl border-bottom self-start">
						Core Values and Code of Business Conduct
					</h2>
					<p className="text-gray-600 text-base sm:leading-7">
						We hold ourselves to the highest standards of ethics, prioritizing
						honesty, respect, and accountability in all our dealings. Our Code
						of Business Conduct sets clear expectations for ethical behavior
						across all levels of the organization. It reinforces our dedication
						to fair business practices, responsible sourcing, and sustainable
						development, aligning our operations with the best interests of our
						stakeholders and the communities we serve.
					</p>
					<Button
						onClick={() => router.replace('?request=quote')}
						variant="outline"
						className="h-12 w-[15rem] flex bg-tertiary hover:bg-blue-500 text-white hover:text-white transition-colors duration-700 font-bold">
						Get in Touch
					</Button>
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
			<div>
				<div className="py-2">
					<Image
						src={'request.jpg'}
						alt={'Contact us'}
						folderName="home-banners"
						bucketName="banners"
						className="w-full h-[350px] sm:h-[520px] object-cover"
					/>
				</div>
				<div className="w-fit mx-auto my-6 px-4 sm:px-12 space-y-4 flex flex-col">
					<h2 className="text-lg sm:text-2xl border-bottom self-start">
						Ethics and Compliance
					</h2>
					<p className="text-base sm:w-1/2">
						Our commitment to ethics and compliance is at the heart of
						everything we do, guiding our actions and decisions to ensure trust,
						integrity, and transparency in every relationship.
					</p>
					<Button
						onClick={() => router.replace('?request=quote')}
						className="bg-green-400 hover:bg-green-500 text-black font-semibold w-56 h-12">
						Let’s Talk
					</Button>
				</div>
			</div>
			<RequestForm open={!!searchParams?.request} />
		</div>
	);
}

export default Contact;
