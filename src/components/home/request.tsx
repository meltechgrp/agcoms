'use client';

import { getImageUrl } from '@/hooks/use-image-handler';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

export default function Request() {
	const router = useRouter();
	const style = {
		backgroundImage: `url(${getImageUrl(
			'request.jpg',
			'banners',
			'home-banners'
		)})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		borderImage:
			'linear-gradient(to right, rgba(0,0,0,.3), rgba(0,0,0,.5)) fill 1',
	};
	return (
		<div>
			<div
				style={style}
				className="py-16 h-[28rem] bg-center sm:h-[40rem] px-4 flex items-center sm:justify-end sm:px-16">
				<div className="flex pt-10 sm:pt-20 flex-col text-white gap-3">
					<h1 className="text-xl sm:text-4xl">Request a Quote!</h1>
					<blockquote className="p-4 italic border-l-4 rounded-md backdrop-blur-sm bg-white/30 text-white border-gray-300">
						Tailored Solutions for Your Needs &ndash; Get Your Custom Quote
						Today!
					</blockquote>
					<Button
						onClick={() =>
							router.push('?request=quote', {
								scroll: false,
							})
						}
						className="bg-green-500 hover:bg-green-500 text-white font-semibold w-56 h-12">
						Request a Quote Now
					</Button>
				</div>
			</div>
		</div>
	);
}
