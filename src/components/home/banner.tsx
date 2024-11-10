import Link from 'next/link';
import Image from '../shared/image';
import { Button } from '../ui/button';

export default function Banner() {
	return (
		<div className="relative">
			<Image
				src={'banner.jpg'}
				className="w-full h-[28rem] md:h-[44rem]"
				alt={'agcoms banner'}
				bucketName="banners"
				folderName="home-banners"
			/>
			<div className=" absolute flex flex-col left-5 bottom-[1.5rem] md:bottom-[5rem] space-y-2 md:space-y-4 text-white backdrop-blur-sm rounded-xl bg-black/30 w-[60%] md:w-[45%] px-4 py-7 md:p-10">
				<h1 className="text-base md:text-3xl border-bottom self-start flex ">
					Power Your Progress With AGCOMS
				</h1>
				<p className="text-[11px] line-clamp-5 md:line-clamp-none md:text-sm">
					Welcome to AGCOMS International Trading Limited, a trusted dealer of
					agricultural, construction, golf & turf, and forestry equipment across
					Africa and the Middle East. Our commitment is to provide you with
					reliable, high-performance tools that keep you ahead in your industry.
				</p>
				<div>
					<Link href={'/about'}>
						<Button
							size="sm"
							className="h-8 bg-tertiary text-white md:h-9 text-xs md:text-sm">
							Read More
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
