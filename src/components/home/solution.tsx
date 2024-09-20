'use client';
import solutionBanner from '@/assets/images/banners/afme-tractor-banner.png';
import { Button } from '../ui/button';
import { ChevronUp } from 'lucide-react';
import { animateScroll } from 'react-scroll';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';

export default function Solution() {
	const style = {
		backgroundImage: `url(${solutionBanner.src})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		borderImage:
			'linear-gradient(to right, rgba(0,0,0,.05), rgba(0,0,0, .7)) fill 1',
	};
	const options = {
		duration: 3000,
		smooth: 'easeInOutQuad',
	};
	return (
		<div className="sm:h-[30rem] my-4  relative">
			<div
				style={style}
				className=" relative border-none h-[10rem] sm:absolute top-0 left-0 right-0 w-full sm:h-full"
			/>
			<div className=" h-full relative sm:z-20 flex justify-center sm:justify-end px-4 py-12 sm:px-20">
				<div className="flex flex-col text-black sm:text-white items-end space-y-8 sm:space-y-16">
					<div className="space-y-3 sm:space-y-1 flex flex-col items-center sm:items-end">
						<h2 className="text-xl sm:text-3xl font-bold">
							Personalised Financial Solutions
						</h2>
						<p className="text-base font-semibold text-gray-500 sm:text-gray-200">
							so Life can Leap Forward.
						</p>
					</div>
					<div className="flex space-x-2 sm:space-x-4">
						<Button className="px-6 h-12 hover:bg-green-600 hover:text-white transition-all duration-700 text-black sm:text-white bg-transparent text-sm font-bold sm:font-semibold border-2 hover:border-green-600 border-green-600 sm:border-white">
							Agcoms Finacials
						</Button>
						<Button className="px-6 h-12 hover:bg-green-600 hover:text-white transition-all duration-700 text-black sm:text-white bg-transparent text-sm font-bold sm:font-semibold border-2 hover:border-green-600 border-green-600 sm:border-white">
							Leap Forward
						</Button>
					</div>
				</div>
			</div>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							onClick={() => animateScroll.scrollToTop(options)}
							variant={'ghost'}
							className="rounded-full bg-white hover:bg-green-600 shadow-md z-40 hover:text-white text-green-600 p-1 px-2.5 fixed bottom-6 right-6">
							<ChevronUp className="w-5 h-5" strokeWidth={3} />
						</Button>
					</TooltipTrigger>
					<TooltipContent className="bg-black text-white">
						<p className="text-xs">Back to the Top</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	);
}
