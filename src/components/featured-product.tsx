import { NavMenuData } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedProducts() {
	const { sub: category } = NavMenuData[0];
	return (
		<div className="hidden md:grid px-16 py-4">
			<div className="flex justify-center items-center">
				{category.map((c) => (
					<div key={c.title} className="grid space-y-6 justify-center">
						{c?.imageUrl && (
							<Link href={c.link}>
								<Image
									src={c.imageUrl}
									alt={c.title}
									width={200}
									height={113}
									className=" object-cover transition-transform duration-1000 hover:scale-110"
								/>
								<h4 className="text-base font-semibold text-center">
									{c.title}
								</h4>
							</Link>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
