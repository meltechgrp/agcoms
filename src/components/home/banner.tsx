import Image from '../shared/image';

export default function Banner() {
	return (
		<div>
			<Image
				src={'banner.jpg'}
				className="w-full aspect-auto sm:min-h-[70vh]"
				alt={'agcoms banner'}
				bucketName="banners"
				folderName="home-banners"
			/>
		</div>
	);
}
