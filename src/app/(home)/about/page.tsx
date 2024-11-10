import AboutCarousel from '@/components/about/carousel';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import AboutAgcoms from '@/components/about';
import Mission from '@/components/about/mission';
import Values from '@/components/about/values';
import AboutRequest from '@/components/about/about-request';
import Governace from '@/components/about/governace';

export default function About() {
	return (
		<div>
			<Breadcrumb className=" py-6 px-4 lg:px-16">
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
							About us
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<AboutCarousel />
			<AboutAgcoms />
			<Mission />
			<Values />
			<Governace />
			<AboutRequest />
		</div>
	);
}
