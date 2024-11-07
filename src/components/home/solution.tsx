'use client';
import { Button } from '../ui/button';
import Link from 'next/link';
import { getImageUrl } from '@/hooks/use-image-handler';

export default function Solution() {
	const style = {
		borderImage:
			'linear-gradient(to right, rgba(0,0,0,.05), rgba(0,0,0, .4)) fill 1',
	};
	return (
		<div className="sm:h-[30rem] my-4  relative">
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
			<div className=" h-full w-full  sm:bg-black/40 relative sm:absolute sm:z-30 top-0 right-0 left-0 sm:right-10 flex justify-center sm:justify-start sm:items-center px-4 py-6 sm:pt-[10rem] sm:px-20">
				<div className="flex flex-col text-black sm:text-white items-end space-y-8 sm:space-y-16">
					<div className="space-y-4 sm:space-y-2 flex flex-col items-center sm:items-end">
						<h2 className="text-2xl sm:text-5xl border-bottom self-start font-bold">
							Driving Innovation
						</h2>
						<p className="text-sm sm:text-base font-medium">
							Cutting-Edge Machinery for a Smarter, More Efficient Tomorrow.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
