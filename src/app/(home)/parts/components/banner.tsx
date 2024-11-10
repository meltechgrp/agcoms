import Image from '@/components/shared/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PartsBanner() {
	return (
		<div className="relative">
			<Image
				src={'parts.jpg'}
				className="w-full h-[25rem] md:h-[30rem]"
				alt={'agcoms banner'}
				bucketName="banners"
				folderName="home-banners"
			/>
			<div className=" absolute flex flex-col left-5 bottom-[1.5rem] md:bottom-[5rem] space-y-2 md:space-y-4 text-white backdrop-blur-sm rounded-xl bg-black/30 w-[70%] md:w-[45%] px-4 py-7 md:p-10">
				<p className="text-sm ">
					At AGCOMS, we know that reliable equipment is essential for productive
					work. Our comprehensive parts and service support is designed to keep
					your machines running at peak performance, supporting everything from
					farms to construction sites and forestry projects. Our dedicated
					service team and genuine parts ensure minimal downtime and maximum
					efficiency.
				</p>
				<div>
					<Link href={'/equipment'}>
						<Button
							size="md"
							className="h-8 bg-tertiary text-white md:h-9 text-xs md:text-sm">
							Available parts
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
