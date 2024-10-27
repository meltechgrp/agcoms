import HtmlText from '@/components/shared/html-text';
import Image from '@/components/shared/image';
import { Card } from '@/components/ui/card';
import { ProductsType } from '@/lib/actions/product-actions';
import { format } from 'date-fns';
import Link from 'next/link';

interface RecentProps {
	data: ProductsType;
}

function RecentProducts({ data }: RecentProps) {
	return (
		<div>
			<div className="grid sm:grid-cols-3 gap-2 ">
				{data.map((b) => (
					<Card
						key={b.id}
						className=" bg-transparent h-96 w-full bg-white  gap-1 grid grid-rows-[60%,auto]">
						<div className="w-full">
							<Image
								src={b.images[0].url}
								className="rounded-md"
								alt={b.name}
								bucketName="images"
								folderName="product-images"
							/>
						</div>
						<div className="flex flex-col gap-1 px-3 py-2">
							<time className="text-xs text-gray-500 ">
								{format(new Date(b.createdAt), 'MMM d, yyyy,  hh:mm a')}
							</time>
							<Link
								href={`/admin/products/?productId=${b.id}`}
								className="space-y-2">
								<h2 className="text-sm">{b.name}</h2>
								<HtmlText
									text={b.description}
									className="text-xs line-clamp-4 font-semibold"
								/>
							</Link>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
}

export default RecentProducts;
