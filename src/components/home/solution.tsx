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
		<div className="lg:h-[30rem] my-4  relative">
			<div className=" relative border-none lg:h-full " />
			<video
				className="relative w-full lg:absolute lg:z-10 top-0 right-0 left-0 lg:h-full object-cover"
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
			<div className=" h-full w-full  lg:bg-black/40 relative lg:absolute lg:z-30 top-0 right-0 left-0 lg:right-10 flex justify-center lg:justify-start lg:items-center px-4 py-6 lg:pt-[10rem] lg:px-20">
				<div className="flex flex-col text-black lg:text-white items-end space-y-8 lg:space-y-16">
					<div className="space-y-4 lg:space-y-2 flex flex-col items-center lg:items-end">
						<h2 className="text-2xl lg:text-5xl border-bottom self-start font-bold">
							Driving Innovation
						</h2>
						<p className="text-sm lg:text-base font-medium">
							Cutting-Edge Machinery for a Smarter, More Efficient Tomorrow.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
