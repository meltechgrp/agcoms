import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from '../shared/image';

export default function Media() {
	return (
		<div className="space-y-8 px-4 flex flex-col sm:px-12 my-6">
			<h2 className="text-center text-black/80 self-center border-b-2 border-btertiary pb-1 text-xl sm:text-3xl font-bold">
				News & Media
			</h2>
			<div className="grid sm:grid-cols-3 gap-4 sm:gap-8">
				{data.map((m, i) => (
					<Link
						key={m.title}
						href={m.link}
						className={cn(
							'space-y-4 w-full h-full overflow-hidden pb-10 border-0 sm:pb-0 border-b-gray-300 sm:border-r-gray-300 sm:pr-8',
							i < 2 ? 'sm:border-r border-b sm:border-b-0  ' : ''
						)}>
						<h3 className="text-lg text-black/80 sm:text-2xl font-semibold">
							{m.title}
						</h3>
						<div className="flex-1 h-full">
							<Image
								src={m.image}
								className="h-[180px] rounded"
								alt={m.title}
								bucketName="banners"
								folderName="home-banners"
							/>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

const data = [
	{
		title: 'Read',
		image: 'media-read.png',
		link: 'https://www.deere.africa/en/our-company/news-media/',
	},
	{
		title: 'Watch',
		image: 'media-watch.png',
		link: 'https://www.youtube.com/c/JohnDeereAfrica/videos',
	},
	{
		title: 'Listen',
		image: 'media-podcast.png',
		link: 'https://www.youtube.com/playlist?list=PLLtxGbAY1VBC9RolKMTrAlkCaxkHkVIEt',
	},
];
