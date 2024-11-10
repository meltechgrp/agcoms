import { midNavigationData } from '@/lib/constants';
import { uniqueId } from '@/lib/utils';
import Link from 'next/link';

export default function MidNavigation() {
	return (
		<div className="py-8 flex md:px-16 md:justify-start ">
			<div className="w-full px-4 gap-x-12 md:w-fit  xl:gap-x-[3.8rem] gap-y-2 flex flex-col md:flex-row   md:bg-black/80">
				{midNavigationData.map((nav) => (
					<div
						key={uniqueId()}
						className="w-full border-b md:border-none  py-2 rounded bg-gray-700 md:bg-transparent ">
						<Link
							href={nav.link}
							target="_blank"
							className="flex text-white px-4 md:px-2 transition-all duration-700 hover:text-blue-400 hover:-translate-y-1 items-center">
							<nav.icon strokeWidth={2} className=" w-10 h-10 mr-2" />
							<span className="text-base md:text-sm text-nowrap font-semibold">
								{nav.title}
							</span>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
