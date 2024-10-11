import { NavMenuData } from '@/lib/constants';
import { uniqueId } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedProducts() {
	const { sub: category } = NavMenuData[0];
	return (
		<div className="grid sm:px-16 bg-white py-4">
			<div className="flex justify-center flex-col sm:flex-row items-center">
				{category.map((c, i) => (
					<Link key={uniqueId()} href={c.link}>
						{c?.imageUrl && (
							<div className="grid grid-cols-2 border-b transition-color duration-1000 has-[h4]:hover:text-blue-600  px-4 sm:px-0 border-gray-200 sm:border-0 sm:grid-cols-1 gap-2 sm:gap-6 justify-center items-center">
								<Image
									src={c.imageUrl}
									alt={c.title}
									style={{ width: '100%', height: 'auto' }}
									className=" w-full h-24 sm:h-28 object-cover transition-transform duration-1000 hover:scale-110"
								/>
								<h4 className="text-base font-semibold text-center">
									{c.title}
								</h4>
							</div>
						)}
					</Link>
				))}
			</div>
		</div>
	);
}
