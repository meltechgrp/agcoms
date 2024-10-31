'use client';
import Image from '@/components/shared/image';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import ContactForm from './form';

export default function Contact() {
	return (
		<div>
			<Breadcrumb className=" py-6 px-4 sm:px-16">
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
							Contact us
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div>
				<div className="py-10 space-y-4 flex flex-col items-center">
					<h2 className="text-2xl font-bold border-b-4 border-tertiary pb-1 leading-tight">
						CONTACT US
					</h2>
					<p className="text-gray-600 text-center sm:w-1/2 text-base sm:text-lg leading-relaxed">
						We’re here to support you every step of the way. Connect with us
						today to learn more about how AGCOMS can enhance your productivity
						and success.
					</p>
				</div>
				<div className="flex flex-col-reverse sm:grid sm:grid-cols-[55%,auto]">
					<div className="space-y-6 flex flex-col py-10  px-4 sm:px-16">
						<h2 className="text-xl self-start font-bold border-b-4 border-tertiary pb-1 leading-tight">
							Company Information
						</h2>
						<div className="grid sm:grid-cols-2 sm:gap-10 gap-6">
							<div className="flex flex-col gap-2">
								<h4 className="text-base font-medium">
									Corporate Headquarters
								</h4>
								<div className="space-y-2">
									<h5 className="text-[13px]">
										Our corporate office is at the heart of our operations,
										where we strategize, innovate, and ensure quality service.
									</h5>
									<div className="flex flex-col gap-2">
										<span className="flex items-center gap-2 text-sm">
											Location: <span>189 Peter Odili Rd</span>
										</span>
										<span className="flex text-nowrap items-center gap-2 text-sm">
											Phone:{' '}
											<a className=" text-tertiary" href="tel:+2341234567890">
												+234 123 456 7890
											</a>
										</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col gap-2">
								<h4 className="text-base font-medium">Branch Locations</h4>
								<div className="space-y-2">
									<h5 className="text-[13px]">
										We operate in several regions to serve our clients more
										effectively. Please contact us for information on our branch
										nearest to you.
									</h5>
								</div>
							</div>
							<div className="flex flex-col gap-2">
								<h4 className="text-base font-medium">Customer Support </h4>
								<div className="space-y-2">
									<h5 className="text-[13px]">
										Our dedicated support team is available to answer your
										queries and assist with your needs.
									</h5>
									<div className="flex flex-col gap-2">
										<span className="flex items-center gap-2 text-sm">
											Email:{' '}
											<a
												className=" text-tertiary"
												href="mailto:info@company.com">
												info@company.com
											</a>
										</span>
										<span className="flex text-nowrap items-center gap-2 text-sm">
											Phone:{' '}
											<a className=" text-tertiary" href="tel:+2341234567890">
												+234 123 456 7890
											</a>
										</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col gap-2">
								<h4 className="text-base font-medium">Additional Contacts</h4>
								<div className="space-y-2">
									<h5 className="text-[13px]">
										For media inquiries, investor relations, or partnership
										opportunities, reach out at
									</h5>
									<div className="flex flex-col gap-2">
										<span className="flex items-center gap-2 text-sm">
											Email:{' '}
											<a
												className=" text-tertiary"
												href="mailto:info@company.com">
												info@company.com
											</a>
										</span>
										<span className="flex text-nowrap items-center gap-2 text-sm">
											Phone:{' '}
											<a className=" text-tertiary" href="tel:+2341234567890">
												+234 123 456 7890
											</a>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full h-[20rem] sm:h-[35rem]">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.4580178777443!2d7.053832574308436!3d4.8201141964698355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cb0eae04fd8f%3A0xe54d33191baba991!2s189%20Peter%20Odili%20Rd%2C%20Trans%20Amadi%2C%20Port%20Harcourt%20500101%2C%20Rivers%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1698651000000!5m2!1sen!2sus"
							width="100%"
							height="100%"
							className="border-0"
							loading="lazy"></iframe>
					</div>
				</div>
				<div className="grid sm:grid-cols-[55%,auto]">
					<div className="w-full h-[20rem] sm:h-[40rem]">
						<Image
							src={'lecture.jpg'}
							className="w-full h-full"
							alt={'agcoms banner'}
							bucketName="banners"
							folderName="home-banners"
						/>
					</div>
					<div className=" pt-10 w-full px-4 sm:px-8 gap-4 flex flex-col">
						<h2 className="text-xl self-start font-bold border-b-4 border-tertiary pb-1 leading-tight">
							WE'D LOVE TO HEAR FROM YOU
						</h2>
						<ContactForm />
					</div>
				</div>
			</div>
		</div>
	);
}