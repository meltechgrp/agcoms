'use client';

import { getImageUrl } from '@/hooks/use-image-handler';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

export default function AboutRequest() {
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
				className="py-16 h-[28rem] bg-center sm:h-[40rem] px-4 flex items-center justify-end sm:px-16">
				<div className="flex pt-10 sm:pt-20 flex-col text-white gap-8">
					<h1 className="text-xl sm:text-4xl leading-[1.7rem] sm:leading-[2.7rem]">
						Ready to buy your <br /> Dream Facility Machineries? <br /> Talk to
						AGCOMS today.
					</h1>

					<div className="flex flex-col  sm:flex-row gap-4">
						<Button
							onClick={() =>
								router.push('?request=quote', {
									scroll: false,
								})
							}
							className="bg-green-500 hover:bg-green-500 text-white font-semibold w-56 h-12">
							Request a Quote Now
						</Button>
						<Button
							onClick={() =>
								router.push('?request=quote', {
									scroll: false,
								})
							}
							className="bg-green-500 hover:bg-green-500 text-white font-semibold w-56 h-12">
							Call us Now
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
