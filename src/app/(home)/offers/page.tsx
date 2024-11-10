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
import { Card } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { financeCardData } from '@/components/financing/data';
import { Separator } from '@/components/ui/separator';
import { getPosts } from '@/lib/actions/blog-actions';
import Image from '@/components/shared/image';

async function Financing() {
	const data = await getPosts({
		orderBy: {
			createdAt: 'desc',
		},
		take: 3,
		skip: 0,
	});
	return (
		<div className="">
			<Breadcrumb className="px-4 lg:px-12 py-6">
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
							Financing
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div>
				<div className="py-2 lg:h-[460px] relative space-y-4">
					<Image
						src={'financing.jpg'}
						alt={'Financing'}
						bucketName="banners"
						folderName="home-banners"
						className="w-screen lg:w-[1350px] object-fill h-[250px] lg:h-[460px] lg:object-cover relative lg:absolute lg:top-0 lg:left-0"
					/>
					<div className="relative px-8 py-8 flex flex-col z-10 w-full space-y-2 items-center lg:items-end">
						<h2 className="text-3xl lg:text-5xl text-center lg:text-end  capitalize text-black lg:text-white font-bold">
							Run your business
						</h2>
						<p className="text-center lg:text-end text-black lg:text-white">
							with a partner you can trust
						</p>
						<div className="space-x-3 py-5">
							<Link href={'#'}>
								<Button
									className="h-12 w-36 border-2 font-bold text-sm bg-transparent border-green-600 lg:border-white lg:text-white text-green-600 lg:hover:bg-white hover:bg-green-500 lg:hover:text-green-500 hover:text-white transition-colors duration-700"
									variant={'outline'}>
									Contact Us
								</Button>
							</Link>
							<Link href={'#'}>
								<Button
									className="h-12 w-36 border-2 font-bold text-sm bg-transparent border-green-600 lg:border-white lg:text-white text-green-600 lg:hover:bg-white hover:bg-green-500 lg:hover:text-green-500 hover:text-white transition-colors duration-700"
									variant={'outline'}>
									View Offers
								</Button>
							</Link>
						</div>
					</div>
				</div>
				<div className=" pt-4 lg:pt-8 grid gap-10">
					<div className="grid lg:grid-cols-4 gap-4 px-4 lg:px-12">
						{financeCardData.map((c, i) => (
							<div key={c.title} className="flex flex-col lg:flex-row gap-4">
								<Card className="px-6 bg-[#f5f4f4] py-6 flex flex-col space-y-4">
									<h2 className="text-xl text-green-600 lg:text-2xl border-b border-gray-300 pb-3">
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
											className="border-gray-600 hidden lg:block"
										/>
										<Separator
											orientation="horizontal"
											className="border-gray-600  lg:hidden"
										/>
									</>
								)}
							</div>
						))}
					</div>
					<div className="bg-[#333] grid lg:grid-cols-[auto,60%] text-white">
						<div className="py-8 pt-16 px-4 lg:px-12 flex flex-col gap-4">
							<h3 className="text-xl font-bold">Get Finance</h3>
							<p>
								Whether you are getting ready for a new season or starting a new
								construction project, we can ensure that you have what you need
								to be successful and alleviate any concerns, stresses, or
								frustrations you may carry.
							</p>
							<p>
								This is why we offer value that no other lender can — a deep
								understanding of your industry, unmatched equipment expertise,
								and personal financial solutions, provided to you how you
								prefer, as fast as possible.
							</p>
						</div>
						<div
							style={{
								position: 'relative',
								paddingBottom: '56.25%',
								overflow: 'hidden',
								maxWidth: '100%',
								height: 'auto',
							}}>
							<iframe
								style={{
									position: 'absolute',
									top: 0,
									left: 0,
									width: '100%',
									height: '100%',
								}}
								src="https://www.youtube.com/embed/esOg1TBrVBM"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen></iframe>
						</div>
					</div>
					{/* <div className="grid lg:grid-cols-3 gap-4 px-4 mt-3 lg:px-12 ">
						{financeData.map((b) => (
							<div
								key={b.title}
								className=" bg-transparent shadow-none h-full w-full flex flex-col  gap-2">
								<div className="w-full">
									<Image
										src={b.image.src}
										alt={b.title}
										className="w-full object-cover h-48 rounded-md"
									/>
								</div>
								<div className="flex flex-1 flex-col gap-1 py-2">
									<h2 className="text-lg lg:text-xl text-green-500">
										{b.title}
									</h2>
									<div className="flex-1">
										<p className="text-base text-black">{b.des}</p>
									</div>
								</div>
								<Link href={b.link}>
									<Button
										variant={'outline'}
										className="border-2 border-green-600 text-green">
										{b.slug}
									</Button>
								</Link>
							</div>
						))}
					</div> */}
					<div className="grid gap-8 px-4 py-8 bg-[#f4f3f3] lg:px-12">
						<div>
							<h1 className="text-xl lg:text-3xl text-center">
								Latest News & Updates
							</h1>
						</div>
						<div className="grid lg:grid-cols-3 gap-4 px-4 lg:px-12 ">
							{data.map((b) => (
								<div
									key={b.title}
									className=" bg-transparent shadow-none h-full w-full flex flex-col  gap-2">
									<div className="w-full">
										<img
											src={b.images[0].url || ''}
											alt={b.title}
											className="w-full object-cover h-48 rounded-md"
										/>
									</div>
									<div className="flex flex-1 flex-col gap-1 py-2">
										<h2 className="text-lg lg:text-xl text-green-500">
											{b.title}
										</h2>
										<div className="flex-1">
											<p className="text-base  line-clamp-6 text-black">
												{b.content}
											</p>
										</div>
									</div>
									<Link href={`/blogs/${b.id}`}>
										<Button
											variant={'outline'}
											className="border-2 border-green-600 text-green">
											Read More
										</Button>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Financing;
