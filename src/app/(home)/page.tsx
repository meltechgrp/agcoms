import Banner from '@/components/home/banner';
import Choose from '@/components/home/choose';
import Connection from '@/components/home/connection';
import FeaturedProducts from '@/components/home/featured-product';
import MidNavigation from '@/components/home/mid-navigation';
import Request from '@/components/home/request';
import Solution from '@/components/home/solution';
import RequestForm from './requests/components/request-form';
import prisma from '@/lib/prisma';
import FloatingCards from '@/components/home/floating-cards';
import { getProductImages } from '@/lib/actions';

interface Props {
	searchParams: {
		request?: string;
	};
}

export default async function Home({ searchParams }: Props) {
	const data = await getProductImages();
	return (
		<div className="grid min-h-screen gap-4">
			<FeaturedProducts />
			<Banner />
			<MidNavigation />
			<Solution />
			<Connection />
			<FloatingCards data={data} />
			<Choose />
			<Request />
			<RequestForm open={!!searchParams?.request} />
		</div>
	);
}
