'use client';
import { uniqueId } from '@/lib/utils';
import { Card } from '../ui/card';
import { PenTool, Settings, ShieldCheck } from 'lucide-react';
import { getImageUrl } from '@/hooks/use-image-handler';

export default function Choose() {
	const style = {
		backgroundImage: `url(${getImageUrl(
			'wave.jpeg',
			'banners',
			'home-banners'
		)})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	};
	return (
		<div className="py-4 sm:py-16">
			<div className="flex px-4 sm:px-16  items-center flex-col gap-3">
				<h1 className="text-xl sm:text-4xl text-blue-500">Why Choose Us</h1>
				<p className="text-sm w-full sm:w-[65%] text-center">
					We’re your trusted local choice for construction and agricultural
					equipment. With expertise in diverse machines and a commitment to
					excellence, we deliver top-tier results in agriculture and allied
					fields.
				</p>
			</div>
			<div className="pt-16">
				<div style={style} className="py-20">
					<div className="grid px-4 sm:px-16  sm:grid-cols-3 gap-8">
						{data.map((item) => (
							<Card key={uniqueId()} className="p-4 py-8">
								<div className="flex flex-col gap-4">
									<div className=" bg-blue-500 rounded-full w-fit p-2">
										<item.icon className="w-5 h-5 text-white" />
									</div>
									<h2 className="text-lg sm:text-2xl text-blue-500">
										{item.title}
									</h2>
									<p className="text-base w-full leading-[1.7rem]">
										{item.description}
									</p>
								</div>
							</Card>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

const data = [
	{
		title: 'Reliable Parts',
		description:
			'We provide an extensive selection of high-quality, dependable parts and accessories for all types of agricultural machinery. Our commitment to reliability ensures that your equipment continues to operate at peak performance, reducing the risk of unexpected downtime.',
		icon: Settings, // Icon representing machinery components
	},
	{
		title: 'High-Performance Tools',
		description:
			'Our cutting-edge tools and machinery are specifically engineered to deliver the highest level of performance in the field. Built with advanced technology and designed with safety in mind, our equipment helps you achieve exceptional productivity and precision.',
		icon: PenTool, // Icon representing tools and equipment
	},
	{
		title: 'Expert Service',
		description:
			'With a team of highly trained and experienced technicians, we provide comprehensive service and support for all your agricultural equipment needs. From routine maintenance to complex repairs, our experts are dedicated to ensuring that your machines perform reliably under any conditions. ',
		icon: ShieldCheck, // Icon representing expert, trusted service
	},
];
