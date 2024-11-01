import { uniqueId } from '@/lib/utils';
import Link from 'next/link';
import Image from '../shared/image';

export default function FeaturedProducts() {
	return (
		<div className="sm:flex sm:justify-center sm:px-16 bg-white py-4">
			<div className="flex justify-center sm:w-fit flex-col sm:gap-8 sm:flex-row items-center">
				{data.map((c, i) => (
					<Link key={uniqueId()} href={c.link} className="w-[75%] sm:w-48">
						<div className="grid grid-cols-2 border-b transition-color duration-1000 has-[h4]:hover:text-blue-600  px-4 sm:px-0 border-gray-200 sm:border-0 sm:grid-cols-1 gap-2 sm:gap-6 justify-center items-center">
							<div className="h-24 sm:h-28 w-32 sm:w-full">
								<Image
									src={c.image}
									className=" object-cover w-full h-full transition-transform duration-1000 hover:scale-110"
									alt={c.title}
									bucketName="banners"
									folderName="home-machines"
								/>
							</div>
							<h4 className="text-base font-semibold text-center">{c.title}</h4>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

const data = [
	{
		link: '/equipment/agriculture',
		image: 'agri.png',
		title: 'Agriculture',
	},
	// {
	// 	link: '/equipment/lawn-garden',
	// 	image: 'lawn.png',
	// 	title: 'Lawn & Garden',
	// },
	{
		link: '/equipment/construction',
		image: 'construction.png',
		title: 'Construction',
	},
	{
		link: '/equipment/golf-sports-turf',
		image: 'sport.png',
		title: 'Golf & Sports Turf',
	},
	{
		link: '/equipment/forestry',
		image: 'forestry.png',
		title: 'Forestry',
	},
];
