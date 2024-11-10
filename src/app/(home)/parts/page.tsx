import Image from '@/components/shared/image';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import PartsBanner from './components/banner';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Parts() {
	return (
		<div>
			<Breadcrumb className=" py-6 px-4 md:px-16">
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
							Parts & Servoce
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div>
				<div>
					<PartsBanner />
				</div>
				<section
					id="genuine-parts"
					className="py-15 px-4 md:px-16 bg-[#f3f1f1] space-y-6 h-[70vh] flex flex-col justify-center">
					<h2 className="text-2xl md:text-3xl self-start font-bold border-bottom leading-tight">
						Genuine Parts
					</h2>
					<p className="text-gray-600 md:w-1/2 text-base md:text-lg leading-9">
						Using original parts is crucial for the longevity and optimal
						functioning of your equipment. Our high-quality, genuine parts are
						specifically designed to match each machine's specifications,
						providing durability and performance that generic parts simply can’t
						match. We keep a wide range of essential parts in stock, so you can
						get what you need, when you need it.
					</p>
				</section>
				<section
					id="expert-service"
					className="grid md:grid-cols-[55%,auto] gap-y-6">
					<div className="w-full h-[20rem] md:h-[30rem]">
						<Image
							src={'lecture.jpg'}
							className="w-full h-full"
							alt={'agcoms banner'}
							bucketName="banners"
							folderName="home-banners"
						/>
					</div>
					<div className="  w-full px-4 py-10 md:px-8 gap-4 flex flex-col">
						<h2 className="text-2xl md:text-3xl self-start font-bold border-bottom leading-tight">
							Expert Service
						</h2>
						<p className=" text-base md:text-lg leading-9">
							Our skilled technicians are trained to handle all aspects of
							equipment maintenance and repair. From routine servicing to
							complex overhauls, we’re committed to providing timely and
							professional support that keeps your equipment reliable. With
							in-depth knowledge across various industries and equipment types,
							our service team can help you prevent issues before they arise,
							saving you time and money in the long run.
						</p>
					</div>
				</section>
				<section
					id="online-support"
					className="py-15 px-4 md:px-16 bg-[#f3f1f1] space-y-6 h-[70vh] flex flex-col justify-center">
					<h2 className="text-2xl md:text-3xl self-start font-bold border-bottom leading-tight">
						Online Support & Assistance
					</h2>
					<p className="text-gray-600 md:w-1/2 text-base md:text-lg leading-9">
						We also offer online support for troubleshooting, maintenance tips,
						and personalized assistance. With AGCOMS by your side, you can focus
						on your work while we handle the technicalities.
					</p>
					<ul className="grid grid-cols-2 md:w-1/2 gap-2">
						{[
							'Filters',
							'Maintenance kits',
							'Fluids and lubricants',
							'Belt and Chain',
							'Operator Station',
							'Blades',
							'Batteries',
							'Select Compact Utility Tractor Attachment',
						].map((item) => (
							<li
								key={item}
								className="text-sm marker:text-tertiary marker:size-4 list-inside list-item list-disc">
								{item}
							</li>
						))}
					</ul>
					<div className="flex gap-4">
						<Link href={'/requests'}>
							<Button
								size="md"
								variant={'outline'}
								className="h-12 border border-tertiary text-black px-8 md:h-9 font-medium text-sm">
								Request a Part
							</Button>
						</Link>
						<Link href={'/contact'}>
							<Button
								size="md"
								variant={'outline'}
								className="h-12 border border-tertiary text-black px-8 md:h-9 font-medium text-sm">
								Book a Service
							</Button>
						</Link>
					</div>
				</section>

				<section id="order-online" className="grid md:grid-cols-2 gap-y-6">
					<div className=" py-10 w-full px-8 md:px-9 gap-4 flex flex-col">
						<h2 className="text-2xl md:text-3xl self-start font-bold border-bottom leading-tight">
							Order Online
						</h2>
						<p className=" text-base md:text-lg leading-9">
							Ordering equipment parts and accessories has never been easier.
							With our secure online ordering platform, you can quickly browse,
							select, and purchase the items you need, all from the comfort of
							your location. Our streamlined process ensures a hassle-free
							experience with fast delivery options to keep your operations
							running smoothly.
						</p>
						<div>
							<Link href={'/requests'}>
								<Button
									size="md"
									variant={'outline'}
									className="h-12 border border-tertiary text-black px-8 md:h-9 font-medium text-sm">
									Order Now
								</Button>
							</Link>
						</div>
					</div>
					<div className="w-full h-[20rem] md:h-[30rem]">
						<Image
							src={'lecture.jpg'}
							className="w-full h-full"
							alt={'agcoms banner'}
							bucketName="banners"
							folderName="home-banners"
						/>
					</div>
				</section>
			</div>
		</div>
	);
}
