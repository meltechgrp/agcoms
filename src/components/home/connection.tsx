import image1 from '@/assets/images/connect1.png';
import image2 from '@/assets/images/connect2.png';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function Connection() {
	return (
		<div className="px-8 sm:px-12 my-10">
			<div className="grid sm:grid-cols-2 gap-6">
				{data.map((item) => (
					<div key={item.title} className="grid space-y-6">
						<div className="flex-1">
							<Image
								src={item.url}
								width={400}
								height={400}
								alt={item.title}
								className="w-full h-full rounded shadow"
								objectFit="cover"
							/>
						</div>
						<div className="space-y-6">
							<h3 className="text-xl font-medium">{item.title}</h3>
							<div>
								<Link href={item.link}>
									<Button
										variant={'outline'}
										className="border-green-600 h-10 px-6 text-green-600">
										Learn More
									</Button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

const data = [
	{
		title: 'Get Connected!',
		url: image1,
		link: '#',
	},
	{
		title: 'Manage Your Farm, Remotely',
		url: image2,
		link: '#',
	},
];
