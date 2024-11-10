import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Image from '@/components/shared/image';

interface Props {
	name: string;
	slug: string;
	images: {
		url: string;
	}[];
	description: string | null;
	category: string;
}

function SubCard(props: Props) {
	const { name, description, images, slug, category } = props;
	return (
		<>
			<div className="w-full grid space-y-4 bg-[#f5f4f4] rounded-md">
				<div className="h-72">
					<Image
						src={images[0].url}
						className="rounded-md"
						alt={name}
						bucketName="banners"
						folderName="product-sub-categories"
					/>
				</div>
				<div className="space-y-2 px-4 pb-2">
					<h3 className="text-base lg:text-xl capitalize text-green-600 font-bold">
						{name}
					</h3>
					{description && (
						<p className="text-sm text-gray-500">{description}</p>
					)}
					<Link
						href={`/equipment/${category}/${slug}`}
						className="text-sm font-bold flex items-center gap-1 text-blue-500 hover:text-blue-600">
						View our <span>{slug}</span>{' '}
						<ChevronRight width={20} height={34} className="" />
					</Link>
				</div>
			</div>
		</>
	);
}

export default SubCard;
