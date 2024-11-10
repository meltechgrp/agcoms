'use client';

import { getImageUrl } from '@/hooks/use-image-handler';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

export default function AboutRequest() {
	const router = useRouter();
	const style = {
		backgroundImage: `url(${getImageUrl(
			'request.jpg',
			'banners',
			'home-banners'
		)})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		borderImage:
			'linear-gradient(to right, rgba(0,0,0,.3), rgba(0,0,0,.5)) fill 1',
	};
	return (
		<div>
			<div
				style={style}
				className="py-16 h-[28rem] bg-center md:h-[40rem] px-4 flex items-center justify-start md:px-16">
				<div className="flex backdrop-blur-sm md:w-1/3 p-4 flex-col text-white gap-8">
					<h1 className="text-2xl self-start border-bottom md:text-4xl">
						Contact Us
					</h1>
					<p className="w-[20rem] md:w-full">
						We’re here to support you every step of the way. Connect with us
						today to learn more about how AGCOMS can enhance your productivity
						and success.
					</p>
					<div className="flex flex-col  md:flex-row gap-4">
						<Button
							onClick={() =>
								router.push('/contact', {
									scroll: false,
								})
							}
							className="bg-green-500 hover:bg-green-500 text-white font-semibold w-56 h-12">
							Connect with Us
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
