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
		<div className="md:h-[30rem] my-4  relative">
			<div className=" relative border-none md:h-full " />
			<video
				className="relative w-full md:absolute md:z-10 top-0 right-0 left-0 md:h-full object-cover"
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
			<div className=" h-full w-full  md:bg-black/40 relative md:absolute md:z-30 top-0 right-0 left-0 md:right-10 flex justify-center md:justify-start md:items-center px-4 py-6 md:pt-[10rem] md:px-20">
				<div className="flex flex-col text-black md:text-white items-end space-y-8 md:space-y-16">
					<div className="space-y-4 md:space-y-2 flex flex-col items-center md:items-end">
						<h2 className="text-2xl md:text-5xl border-bottom self-start font-bold">
							Driving Innovation
						</h2>
						<p className="text-sm md:text-base font-medium">
							Cutting-Edge Machinery for a Smarter, More Efficient Tomorrow.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
