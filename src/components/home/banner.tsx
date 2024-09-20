import banner from '@/assets/images/banners/banner.png';
import Image from 'next/image';

export default function Banner() {
	return (
		<div>
			<Image
				src={banner}
				alt="Agcoms"
				style={{ width: '100%', height: 'auto' }}
				className="w-full aspect-auto sm:min-h-[70vh] object-cover"
			/>
		</div>
	);
}
