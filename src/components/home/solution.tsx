'use client';
import { Button } from '../ui/button';
import Link from 'next/link';
import { getImageUrl } from '@/hooks/use-image-handler';

export default function Solution() {
	const style = {
		borderImage:
			'linear-gradient(to right, rgba(0,0,0,.05), rgba(0,0,0, .7)) fill 1',
	};
	return (
		<div className="sm:h-[42rem] my-4  relative">
			<div className=" relative border-none sm:h-full " />
			<video
				className="relative w-full sm:absolute sm:z-10 top-0 right-0 left-0 sm:h-full object-cover"
				autoPlay
				loop
				muted
				playsInline>
				<source
					src={getImageUrl(
						'agcoms-building-video.mp4',
						'banners',
						'home-banners'
					)}
					type="video/mp4"
				/>
			</video>
			<div className=" h-full w-full  sm:bg-black/30 relative sm:absolute sm:z-30 top-0 sm:right-10 flex justify-center sm:justify-end px-4 py-6 sm:pt-[10rem] sm:px-20">
				<div className="flex flex-col text-black sm:text-white items-end space-y-8 sm:space-y-16">
					<div className="space-y-3 sm:space-y-1 flex flex-col items-center sm:items-end">
						<h2 className="text-xl sm:text-4xl border-b-4 border-tertiary pb-1 self-start font-bold">
							Personalised Financial Solutions
						</h2>
						<p className="text-base sm:text-lg font-semibold text-gray-500 sm:text-gray-200">
							so Life can Leap Forward.
						</p>
					</div>
					<div className="flex space-x-2 sm:space-x-4">
						<Link href={'/request'}>
							<Button className="px-6 h-12 hover:bg-tertiary hover:text-white transition-all duration-700 text-black sm:text-white bg-transparent text-sm font-bold sm:font-semibold border-2 hover:border-tertiary border-tertiary sm:border-white">
								Agcoms Finacials
							</Button>
						</Link>
						<Link href={'/request'}>
							<Button className="px-6 h-12 hover:bg-tertiary hover:text-white transition-all duration-700 text-black sm:text-white bg-transparent text-sm font-bold sm:font-semibold border-2 hover:border-tertiary border-tertiary sm:border-white">
								Leap Forward
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
