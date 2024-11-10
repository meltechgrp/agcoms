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

export default async function Contact() {
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
							Contact us
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div className="space-y-8 grid">
				<div className="relative  space-y-4 flex flex-col items-center">
					<Image
						src={'lecture.jpg'}
						className="w-full h-[28rem] md:h-[44rem]"
						alt={'agcoms banner'}
						bucketName="banners"
						folderName="home-banners"
					/>
					<div className=" absolute flex flex-col left-5 bottom-[6rem] md:bottom-[10rem] space-y-2 md:space-y-4 text-white backdrop-blur-sm rounded-xl bg-black/30 w-[70%] md:w-[45%] px-8 py-7 md:p-10">
						<h1 className="text-base md:text-3xl border-bottom self-start flex ">
							CONTACT US
						</h1>
						<p className="text-[11px] line-clamp-5 md:line-clamp-none md:text-sm">
							We’re here to support you every step of the way. Connect with us
							today to learn more about how AGCOMS can enhance your productivity
							and success.
						</p>
					</div>
				</div>
				<div className="grid md:grid-cols-[55%,auto]">
					<div className="space-y-6 flex flex-col py-10  px-4 md:px-16">
						<h2 className="text-xl self-start font-bold border-bottom leading-tight">
							Company Information
						</h2>
						<div className="grid md:grid-cols-2 md:gap-10 gap-6">
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
										<span className="flex gap-2 text-sm">
											Location:{' '}
											<span className="text-sm font-light">
												18 Ziguinchor street, Wuse zone 4 Abuja
											</span>
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
								<div className="flex flex-col gap-2">
									<span className="flex gap-2 text-sm">
										Location:{' '}
										<span className="text-sm font-light">
											Plot 2 Block XI Phase V, Core Area, Asaba Delta State
											Nigeria
										</span>
									</span>
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
												href="mailto:info@agcomsinternational.com">
												Info@agcomsinternational.com
											</a>
										</span>
										<span className="flex text-nowrap items-center gap-2 text-sm">
											Phone:{' '}
											<a className=" text-tertiary" href="tel:+2349169211111">
												+234 916 9211 111
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
												href="mailto:info@agcomsinternational.com">
												Info@agcomsinternational.com
											</a>
										</span>
										<span className="flex text-nowrap items-center gap-2 text-sm">
											Phone:{' '}
											<a className=" text-tertiary" href="tel:+2349169211111">
												+234 916 9211 111
											</a>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className=" pt-10 md:pb-16 w-full px-4 md:px-8 gap-4 flex flex-col">
						<h2 className="text-xl self-start font-bold border-bottom leading-tight">
							WE'D LOVE TO HEAR FROM YOU
						</h2>
						<ContactForm />
					</div>
				</div>
				<div className="grid">
					<div className="w-full h-[20rem] md:h-[30rem]">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.7776881059563!2d7.487482474735255!3d9.057544991351342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b7e10ed7395%3A0x5b8b34b8e5c70c56!2s18%20Ziguinchor%20Street%2C%20Wuse%20Zone%204%2C%20Abuja!5e0!3m2!1sen!2sus!4v1698651000000!5m2!1sen!2sus"
							width="100%"
							height="100%"
							className="border-0"
							loading="lazy"></iframe>
					</div>
				</div>
			</div>
		</div>
	);
}
