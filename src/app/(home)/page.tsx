import Banner from '@/components/home/banner';
import Connection from '@/components/home/connection';
import Media from '@/components/home/media';
import MidNavigation from '@/components/home/mid-navigation';
import Solution from '@/components/home/solution';

export default function Home() {
	return (
		<div className="grid min-h-screen pb-20">
			<Banner />
			<MidNavigation />
			<Solution />
			<Connection />
			<Media />
		</div>
	);
}
