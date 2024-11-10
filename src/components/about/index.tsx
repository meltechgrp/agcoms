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
		<div className="py-12 flex flex-col-reverse md:flex-row space-y-8">
			<div
				style={style}
				className="py-16 h-[20rem] bg-center md:h-[40rem] px-4 flex items-end md:justify-end ">
				<div className="p-8 md:p-9 hidden md:flex flex-col text-white space-y-6 md:backdrop-blur-md md:w-1/2 md:bg-black/30">
					<h1 className="text-2xl self-start border-bottom md:text-4xl">
						ABOUT US
					</h1>
					<p className="text-sm leading-6 md:leading-8">{content}</p>
				</div>
			</div>
			<div className="p-8 md:p-9 flex md:hidden flex-col  space-y-6 ">
				<h1 className="text-2xl self-start border-bottom md:text-4xl">
					ABOUT US
				</h1>
				<p className="text-sm leading-6 md:leading-8">{content}</p>
			</div>
		</div>
	);
}
