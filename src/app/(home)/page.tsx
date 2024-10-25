import Banner from '@/components/home/banner';
import Choose from '@/components/home/choose';
import Connection from '@/components/home/connection';
import FeaturedProducts from '@/components/home/featured-product';
import Media from '@/components/home/media';
import MidNavigation from '@/components/home/mid-navigation';
import Request from '@/components/home/request';
import Solution from '@/components/home/solution';
import RequestForm from './requests/components/request-form';

interface Props {
	searchParams: {
		request?: string;
	};
}

export default function Home({ searchParams }: Props) {
	return (
		<div className="grid min-h-screen">
			<FeaturedProducts />
			<Banner />
			<MidNavigation />
			<Solution />
			<Connection />
			<Media />
			<Request />
			<Choose />
			<RequestForm open={!!searchParams?.request} />
		</div>
	);
}
