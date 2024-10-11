import { midNavigationData } from '@/lib/constants';
import Link from 'next/link';

export default function MidNavigation() {
	return (
		<div className="py-8">
			<div className="w-full px-4 sm:w-fit gap-x-12 xl:gap-x-16 gap-y-2 flex flex-col sm:flex-row  sm:bg-black/80 mx-auto">
				{midNavigationData.map((nav) => (
					<div
						key={nav.title}
						className="w-full border-b sm:border-none py-2 rounded bg-gray-700 sm:bg-transparent ">
						<Link
							href={nav.link}
							className="flex text-white px-4 sm:px-2 transition-all duration-700 hover:text-blue-400 hover:-translate-y-1 items-center">
							<nav.icon strokeWidth={2} className=" w-10 h-10 mr-2" />
							<span className="text-base sm:text-sm text-nowrap font-semibold">
								{nav.title}
							</span>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
