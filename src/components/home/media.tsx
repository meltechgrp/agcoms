import read from '@/assets/images/media-read.png';
import watch from '@/assets/images/media-watch.png';
import podcast from '@/assets/images/media-podcast.png';
import Link from 'next/link';
import Image from 'next/image';
import { cn, uniqueId } from '@/lib/utils';

export default function Media() {
	return (
		<div className="space-y-8 flex flex-col px-4 sm:px-12 my-6">
			<h2 className="self-center text-black/80 border-b-2 border-blue-600 pb-1 text-xl sm:text-3xl font-bold">
				News & Media
			</h2>
			<div className="grid sm:grid-cols-3 gap-4 sm:gap-8">
				{data.map((m, i) => (
					<Link
						key={uniqueId()}
						href={m.link}
						target="_blank"
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
								alt={m.title}
								style={{ width: '100%', height: 'auto' }}
								className="w-full h-[180px] rounded object-cover"
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
		image: read,
		link: 'https://www.deere.africa/en/our-company/news-media/',
	},
	{
		title: 'Watch',
		image: watch,
		link: 'https://www.youtube.com/c/JohnDeereAfrica/videos',
	},
	{
		title: 'Listen',
		image: podcast,
		link: 'https://www.youtube.com/playlist?list=PLLtxGbAY1VBC9RolKMTrAlkCaxkHkVIEt',
	},
];
