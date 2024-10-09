import { Card } from '@/components/ui/card';
import { format } from 'date-fns';
import Link from 'next/link';

interface RecentProps {
	data: any;
}

function RecentProducts({ data }: RecentProps) {
	return (
		<div>
			<div className="grid grid-cols-4 gap-2 ">
				{data.splice(0, 4).map((b: any) => (
					<Card
						key={b.title}
						className=" bg-transparent h-full w-full bg-white  gap-1 grid grid-rows-[60%,auto]">
						<div className="w-full">
							<img
								src={b.images[0]?.url || ''}
								alt={b.title}
								className="w-full object-cover h-44 rounded-md"
							/>
						</div>
						<div className="flex flex-col gap-1 px-3 py-2">
							<time className="text-xs text-gray-500 ">
								{format(new Date(b.createdAt), 'MMM d, yyyy,  hh:mm a')}
							</time>
							<Link href={`/admin/blogs/?postId=${b.id}`} className="space-y-2">
								<h2 className="text-sm">{b.title}</h2>
								<p className="text-xs line-clamp-2 text-gray-500 text-ellipsis h-8 overflow-hidden">
									{b.content}
								</p>
							</Link>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
}

export default RecentProducts;
