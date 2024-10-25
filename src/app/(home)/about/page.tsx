import AboutRequest from '@/components/about/about-request';
import AboutCarousel from '@/components/about/carousel';
import RequestForm from '../requests/components/request-form';

interface Props {
	searchParams: {
		request?: string;
	};
}

export default function About({ searchParams }: Props) {
	return (
		<div>
			<AboutCarousel />
			<div className="px-4 sm:px-16 space-y-6 py-20">
				<h1 className="text-2xl sm:text-5xl">AGCOMS</h1>
				<p className="text-sm sm:text-base sm:w-1/2">
					AGCOMS International Trading Limited specializes in offering
					top-quality machinery from globally recognized brands to meet the
					diverse needs of farmers, builders, and landscapers. With a focus on
					excellence and reliability, we provide tailored solutions, ensuring
					efficiency and growth for our clients in agriculture, construction,
					forestry, and beyond. Our mission is to bridge the gap between premium
					equipment and industries that drive progress, all while maintaining a
					commitment to sustainability and service excellence. Partner with us
					for reliability, efficiency, and success in every venture.
				</p>
			</div>
			<AboutRequest />
			<RequestForm open={!!searchParams?.request} />
		</div>
	);
}
