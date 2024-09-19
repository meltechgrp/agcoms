import banner from '@/assets/images/banners/banner.png';
import Image from 'next/image';

export default function Banner() {
	return (
		<div>
			<Image
				src={banner}
				alt="Agcoms"
				width={1920}
				height={1080}
				className="w-screen min-h-[70vh] object-cover"
				layout="responsive"
			/>
		</div>
	);
}
