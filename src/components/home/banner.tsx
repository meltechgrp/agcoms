import Link from 'next/link';
import Image from '../shared/image';
import { Button } from '../ui/button';

export default function Banner() {
	return (
		<div className="relative">
			<Image
				src={'banner.jpg'}
				className="w-full h-[28rem] sm:h-[44rem]"
				alt={'agcoms banner'}
				bucketName="banners"
				folderName="home-banners"
			/>
			<div className=" absolute left-5 bottom-[1.5rem] sm:bottom-[5rem] space-y-2 sm:space-y-4 text-white backdrop-blur-md bg-blue-500/30 w-[60%] sm:w-[45%] px-4 py-7 sm:p-10">
				<h1 className="text-base sm:text-3xl text-center flex flex-col gap-1 sm:gap-2">
					<span>Power Your Progress With</span> <span> AGCOMS</span>
				</h1>
				<p className="text-[11px] sm:text-sm">
					Welcome to AGCOMS International Trading Limited, a trusted dealer of
					agricultural, construction, lawn & garden, golf & turf, and forestry
					equipment across Africa and the Middle East. Our commitment is to
					provide you with reliable, high-performance tools that keep you ahead
					in your industry.
				</p>
				<div>
					<Link href={'/contact'}>
						<Button
							size="sm"
							className="h-8 bg-blue-500 text-white sm:h-9 text-xs sm:text-sm">
							Read More
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
