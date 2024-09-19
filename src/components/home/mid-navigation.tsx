import { midNavigationData } from '@/lib/constants';
import Link from 'next/link';

export default function MidNavigation() {
	return (
		<div className="py-8">
			<div className="w-fit py-2  flex  bg-black/80 mx-auto">
				{midNavigationData.map((nav) => (
					<div key={nav.title}>
						<Link href={nav.link} className="flex text-white px-4 items-center">
							<nav.icon strokeWidth={2} className=" w-10 h-10 mr-2" />
							<span className="text-base font-semibold">{nav.title}</span>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
