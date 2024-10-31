import Image from '../shared/image';

export default function Mission() {
	return (
		<div>
			<div className="grid sm:grid-cols-2">
				<div className="p-4 sm:p-16 justify-center flex flex-col  space-y-6 ">
					<h1 className="text-2xl self-start border-b-4 border-tertiary pb-1 sm:text-4xl">
						Our Mission
					</h1>
					<p className="text-sm sm:text-base font-medium leading-6 sm:leading-8">
						Our mission is to empower our customers with the tools they need to
						succeed. By providing cutting-edge equipment and dedicated support,
						we aim to be a trusted partner in the progress and growth of the
						industries we serve.
					</p>
				</div>
				<div className="w-full h-[20rem] sm:h-[33rem]">
					<Image
						src={'our-mission.jpg'}
						className="w-full h-full object-cover"
						alt={'agcoms banner'}
						bucketName="banners"
						folderName="home-banners"
					/>
				</div>
			</div>
		</div>
	);
}
