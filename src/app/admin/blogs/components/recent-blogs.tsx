import { Card } from '@/components/ui/card';
import { BlogsData } from './query';
import Image from 'next/image';
import { format } from 'date-fns';

interface RecentProps {
	data: BlogsData;
}

function RecentBlogs({ data }: RecentProps) {
	return (
		<div>
			<div className="grid grid-cols-2 gap-4 ">
				<Card className=" bg-transparent w-full h-96 gap-3 grid grid-rows-[60%,auto]">
					<div className="w-full">
						<img
							src={data[0].bannerImage || ''}
							alt={data[0].title}
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="flex flex-col gap-1 px-3 py-2">
						<time className="text-sm text-gray-500 ">
							{format(new Date(data[0].createdAt), 'MMM d, yyyy,  hh:mm a')}
						</time>
						<h2 className="text-xl sm:text-2xl">{data[0].title}</h2>
						<p className="text-sm line-clamp-3 text-ellipsis h-16 overflow-hidden">
							{data[0].content}
						</p>
					</div>
				</Card>
				<div className="">
					{data.splice(1, 5).map((b) => (
						<Card
							key={b.slug}
							className="w-full bg-transparent h-48 gap-3 grid grid-cols-[50%,auto]">
							<div className="w-full">
								<img
									src={b.bannerImage || ''}
									alt={b.title}
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="flex flex-col gap-1 pr-2 py-2">
								<time className="text-xs text-gray-500 ">
									{format(new Date(b.createdAt), 'MMM d, yyyy,  hh:mm a')}
								</time>
								<h2 className="text-xl">{b.title}</h2>
								<p className="text-sm line-clamp-3 text-ellipsis h-16 overflow-hidden">
									{data[0].content}
								</p>
							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}

export default RecentBlogs;
