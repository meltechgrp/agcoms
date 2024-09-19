import solutionBanner from '@/assets/images/banners/afme-tractor-banner.png';
import { Button } from '../ui/button';

export default function Solution() {
	const style = {
		backgroundImage: `url(${solutionBanner.src})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		borderImage:
			'linear-gradient(to right, rgba(0,0,0,.15), rgba(0,0,0, .8)) fill 1',
	};
	return (
		<div className="h-[30rem] my-4">
			<div
				style={style}
				className=" h-full flex justify-end px-8 py-12 sm:px-20">
				<div className="flex flex-col text-white items-end space-y-16">
					<div className="space-y-1 flex flex-col items-end">
						<h2 className="text-3xl font-bold">
							Personalised Financial Solutions
						</h2>
						<p className="text-base font-semibold">so Life can Leap Forward.</p>
					</div>
					<div className="flex space-x-4">
						<Button className="px-6 h-12 bg-transparent text-sm font-semibold border-2 border-white">
							Agcoms Finacials
						</Button>
						<Button className="px-6 h-12 bg-transparent text-sm font-semibold border-2 border-white">
							Leap Forward
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
