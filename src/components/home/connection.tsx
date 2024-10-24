import Link from 'next/link';
import { Button } from '../ui/button';
import Image from '../shared/image';

export default function Connection() {
	return (
		<div className="px-4 sm:px-12 my-10">
			<div className="grid sm:grid-cols-2 gap-6">
				{data.map((item) => (
					<div key={item.title} className="grid space-y-6">
						<div className=" bg-gray-200 h-72 w-full">
							<Image
								src={item.url}
								className="w-full h-full rounded shadow"
								alt={item.title}
								bucketName="banners"
								folderName="home-banners"
							/>
						</div>
						<div className="space-y-6">
							<h3 className="text-xl font-medium">{item.title}</h3>
							<div className="flex justify-center sm:justify-start">
								<Link href={item.link}>
									<Button
										variant={'outline'}
										className="border-blue-600 transition-colors duration-700 hover:bg-blue-600 hover:text-white h-10 px-6 text-blue-600">
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
		url: 'connect1.png',
		link: 'https://www.deere.com/en/technology-products/precision-ag-technology/data-management/jdlink/',
	},
	{
		title: 'Manage Your Farm, Remotely',
		url: 'connect2.png',
		link: 'https://www.deere.com/en/technology-products/precision-ag-technology/data-management/operations-center/',
	},
];
