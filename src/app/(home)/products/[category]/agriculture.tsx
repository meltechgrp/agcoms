import tractors from '@/assets/agri-categories/tractor.webp';
import drils from '@/assets/agri-categories/drills.webp';
import combine from '@/assets/agri-categories/combines.webp';
import balers from '@/assets/agri-categories/balers.jpg';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

function Agriculture() {
	return (
		<>
			<div className="px-4 sm:px-12 py-10">
				<div className="grid sm:grid-cols-2 gap-6 sm:gap-12">
					{agriCategory.map((c) => (
						<div
							key={c.title}
							className="w-full p-6 space-y-6 bg-[#f5f4f4] rounded">
							<img
								src={c.image.src}
								alt={c.title}
								className="w-full object-cover"
							/>
							<div className="space-y-2">
								<h3 className="text-base sm:text-xl capitalize text-green-600 font-bold">
									{c.title}
								</h3>
								<p className="text-sm text-gray-500">{c.des}</p>
								<Link
									href={c.link}
									className="text-sm flex items-center font-bold text-green-500 hover:text-green-600">
									{c.slug}{' '}
									<ChevronRight width={20} height={34} className="m1-1" />
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
			<div></div>
		</>
	);
}

export default Agriculture;

const agriCategory = [
	{
		title: 'Tractors',
		image: tractors,
		link: '/products/agriculture/tractors',
		des: 'The most intelligent tractors in the world.',
		slug: 'View our tractors',
	},
	{
		title: 'Combines',
		image: combine,
		link: '/products/agriculture/combines',
		des: 'Have a look at our Combine Harvester Range.',
		slug: 'View our combines',
	},
	{
		title: 'Drills',
		image: drils,
		link: '/products/agriculture/drills',
		des: 'Planting and Seeding Equipment',
		slug: 'View our drills',
	},
	{
		title: 'Balers',
		image: balers,
		link: '/products/agriculture/balers',
		des: 'The fastest baler in existence, churning out up to 127 perfect bales per hour',
		slug: 'View our balers',
	},
];
