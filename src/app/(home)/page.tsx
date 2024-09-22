import Banner from '@/components/home/banner';
import Connection from '@/components/home/connection';
import Contact from '@/components/home/contact';
import FeaturedProducts from '@/components/home/featured-product';
import Media from '@/components/home/media';
import MidNavigation from '@/components/home/mid-navigation';
import Solution from '@/components/home/solution';

export default function Home() {
	return (
		<div className="grid min-h-screen">
			<FeaturedProducts />
			<Banner />
			<MidNavigation />
			<Solution />
			<Connection />
			<Media />
			<Contact />
		</div>
	);
}
