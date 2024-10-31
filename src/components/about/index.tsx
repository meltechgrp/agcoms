'use client';
import { getImageUrl } from '@/hooks/use-image-handler';

export default function AboutAgcoms() {
	const style = {
		backgroundImage: `url(${getImageUrl(
			'building.jpg',
			'banners',
			'home-banners'
		)})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		borderImage:
			'linear-gradient(to right, rgba(0,0,0,.3), rgba(0,0,0,.5)) fill 1',
	};
	const content = `AGCOMS International Trading Limited stands at the forefront of
						innovation, providing advanced solutions in agricultural and
						construction equipment. Rooted in a commitment to excellence, AGCOMS
						is dedicated to empowering farmers, builders, and industries
						worldwide with high-quality, reliable machinery that drives
						productivity and efficiency. We specialize in offering a
						comprehensive range of equipment tailored for various sectors,
						including agriculture, forestry, mining, and construction. Our
						products are built to withstand diverse working environments, making
						them suitable for both large-scale commercial operations and
						smaller, specialized applications.`;
	return (
		<div className="py-12 flex flex-col-reverse sm:flex-row space-y-8">
			<div
				style={style}
				className="py-16 h-[20rem] bg-center sm:h-[40rem] px-4 flex items-end sm:justify-end ">
				<div className="p-4 hidden sm:flex flex-col text-white space-y-6 sm:backdrop-blur-md sm:w-1/2 sm:bg-black/30">
					<h1 className="text-2xl self-start border-b-4 border-tertiary pb-1 sm:text-4xl">
						ABOUT US
					</h1>
					<p className="text-sm sm:text-base font-medium leading-6 sm:leading-8">
						{content}
					</p>
				</div>
			</div>
			<div className="p-4 flex sm:hidden flex-col  space-y-6 ">
				<h1 className="text-2xl self-start border-b-4 border-tertiary pb-1 sm:text-4xl">
					ABOUT US
				</h1>
				<p className="text-sm sm:text-base font-medium leading-6 sm:leading-8">
					{content}
				</p>
			</div>
		</div>
	);
}
