import Banner from '@/components/home/banner';
import Connection from '@/components/home/connection';
import Contact from '@/components/home/contact';
import Footer from '@/components/home/footer';
import Media from '@/components/home/media';
import MidNavigation from '@/components/home/mid-navigation';
import Solution from '@/components/home/solution';

export default function Home() {
	return (
		<div className="grid min-h-screen">
			<Banner />
			<MidNavigation />
			<Solution />
			<Connection />
			<Media />
			<Contact />
			<Footer />
		</div>
	);
}
