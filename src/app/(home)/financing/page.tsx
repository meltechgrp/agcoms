import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import banner from '@/assets/images/category/financing.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { financeCardData } from '@/components/financing/data';
import { Separator } from '@/components/ui/separator';
function Financing() {
	return (
		<div className="">
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
							Financing
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div>
				<div className="py-2 sm:h-[450px] relative space-y-4">
					<Image
						src={banner}
						alt={'Financing'}
						style={{ width: 'auto', height: 'auto' }}
						className="w-screen sm:w-[1350px] object-fill h-[250px] sm:h-[500px] sm:object-cover relative sm:absolute sm:top-0 sm:left-0"
					/>
					<div className="relative px-8 py-8 flex flex-col z-10 w-full space-y-2 items-center sm:items-end">
						<h2 className="text-3xl sm:text-5xl text-center sm:text-end  capitalize text-black sm:text-white font-bold">
							Run your business
						</h2>
						<p className="text-center sm:text-end text-black sm:text-white">
							with a partner you can trust
						</p>
						<div className="space-x-3 py-5">
							<Link href={'#'}>
								<Button
									className="h-12 w-36 border-2 font-bold text-sm bg-transparent border-green-600 sm:border-white sm:text-white text-green-600 sm:hover:bg-white hover:bg-green-500 sm:hover:text-green-500 hover:text-white transition-colors duration-700"
									variant={'outline'}>
									Contact Us
								</Button>
							</Link>
							<Link href={'#'}>
								<Button
									className="h-12 w-36 border-2 font-bold text-sm bg-transparent border-green-600 sm:border-white sm:text-white text-green-600 sm:hover:bg-white hover:bg-green-500 sm:hover:text-green-500 hover:text-white transition-colors duration-700"
									variant={'outline'}>
									View Offers
								</Button>
							</Link>
						</div>
					</div>
				</div>
				<div className="px-4 sm:px-12 pt-4 sm:pt-8">
					<div className="grid sm:grid-cols-4 gap-4">
						{financeCardData.map((c, i) => (
							<div key={c.title} className="flex flex-col sm:flex-row gap-4">
								<Card className="px-6 bg-[#f5f4f4] py-6 flex flex-col space-y-4">
									<h2 className="text-xl text-green-600 sm:text-2xl border-b border-gray-300 pb-3">
										{c.title}
									</h2>
									<p className="text-base flex-1 text-black/90">{c.des}</p>
									<div className="flex items-center text-green-500">
										<Link
											href={'#'}
											className="text-sm text-green-700 hover:gap-1 transition-all duration-1000 flex items-center font-bold">
											Read More <ChevronRight className="w-4 h-4 ml-1" />
										</Link>
									</div>
								</Card>
								{i < financeCardData.length - 1 && (
									<>
										<Separator
											orientation="vertical"
											className="border-gray-600 hidden sm:block"
										/>
										<Separator
											orientation="horizontal"
											className="border-gray-600  sm:hidden"
										/>
									</>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Financing;
