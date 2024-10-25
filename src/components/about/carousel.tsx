'use client';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import Image from '../shared/image';
import Autoplay from 'embla-carousel-autoplay';

export default function AboutCarousel() {
	const images = ['groupimage.jpg', 'banner.jpg', 'help.jpg'];
	return (
		<div className=" relative">
			<Carousel
				plugins={[
					Autoplay({
						delay: 6000,
						jump: false,
					}),
				]}
				className="w-full border-none">
				<CarouselContent>
					{Array.from({ length: 3 }).map((_, index) => (
						<CarouselItem key={index} className="p-0 border-none">
							<div className="">
								<Image
									src={images[index]}
									className="w-full h-[28rem] sm:h-[40rem]"
									alt={'agcoms banner'}
									bucketName="banners"
									folderName="home-banners"
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
			<div className=" absolute left-5 bottom-[1.5rem] sm:bottom-[5rem] space-y-2 sm:space-y-4  w-[70%] sm:w-[45%]">
				<h1 className="text-base text-white backdrop-blur-md bg-blue-700/30 p-4 sm:p-8 sm:text-3xl flex sm:flex-col gap-1 sm:gap-2">
					<span>Meet Our </span> <span> Dynamic Team</span>
				</h1>
				<p className="text-[11px] p-4 sm:p-8 sm:text-sm text-white backdrop-blur-md bg-blue-500/30">
					Together, we collaborate, innovate, and inspire, turning challenges
					into opportunities and visions into reality. At AGCOMS, our people are
					not just employees—they are family, united in our mission to build a
					better tomorrow..
				</p>
			</div>
		</div>
	);
}
