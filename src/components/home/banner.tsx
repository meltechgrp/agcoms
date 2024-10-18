import Image from '../shared/image';

export default function Banner() {
	return (
		<div>
			<Image
				src={'banner.jpg'}
				className="w-full sm:h-[35rem]"
				alt={'agcoms banner'}
				bucketName="banners"
				folderName="home-banners"
			/>
		</div>
	);
}
