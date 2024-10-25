'use client';
import { Button } from '../ui/button';
import Link from 'next/link';
import { getImageUrl } from '@/hooks/use-image-handler';

export default function Solution() {
	const style = {
		backgroundImage: `url(${getImageUrl(
			'afme-tractor-banner.png',
			'banners',
			'home-banners'
		)})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		borderImage:
			'linear-gradient(to right, rgba(0,0,0,.05), rgba(0,0,0, .7)) fill 1',
	};
	return (
		<div className="sm:h-[42rem] my-4  relative">
			<div
				style={style}
				className=" relative border-none h-[25rem] bg-center sm:absolute top-0 left-0 right-0 w-full sm:h-full"
			/>
			<div className=" h-full relative sm:z-20 flex justify-center sm:justify-end px-4 py-6 sm:pt-[10rem] sm:px-20">
				<div className="flex flex-col text-black sm:text-white items-end space-y-8 sm:space-y-16">
					<div className="space-y-3 sm:space-y-1 flex flex-col items-center sm:items-end">
						<h2 className="text-xl sm:text-4xl font-bold">
							Personalised Financial Solutions
						</h2>
						<p className="text-base sm:text-lg font-semibold text-gray-500 sm:text-gray-200">
							so Life can Leap Forward.
						</p>
					</div>
					<div className="flex space-x-2 sm:space-x-4">
						<Link href={'https://www.deere.africa/en/finance/financing/'}>
							<Button className="px-6 h-12 hover:bg-blue-600 hover:text-white transition-all duration-700 text-black sm:text-white bg-transparent text-sm font-bold sm:font-semibold border-2 hover:border-blue-600 border-blue-600 sm:border-white">
								Agcoms Finacials
							</Button>
						</Link>
						<Link
							href={
								'https://www.deere.africa/en/finance/financing/leapforward/'
							}>
							<Button className="px-6 h-12 hover:bg-blue-600 hover:text-white transition-all duration-700 text-black sm:text-white bg-transparent text-sm font-bold sm:font-semibold border-2 hover:border-blue-600 border-blue-600 sm:border-white">
								Leap Forward
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
