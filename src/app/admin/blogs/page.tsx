import { Card } from '@/components/ui/card';
import EmptyState from '@/components/shared/empty-state';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { getBlogs } from './components/query';
import RecentBlogs from './components/recent-blogs';

type Props = {
	searchParams: {
		tab?: string;
		orderBy?: string;
		take?: string;
		skip?: string;
		memberId?: string;
		editMember?: string;
	};
};
export default async function Page(props: Props) {
	const { searchParams } = props;
	const data = await getBlogs({
		orderBy: {
			createdAt: 'desc',
		},
		take: 50,
		skip: 0,
	});
	return (
		<div className="w-full h-full py-8 pl-0 space-y-6">
			<div>
				<h1 className="text-xl sm:text-3xl font-medium mb-1">
					News and Blog Stories
				</h1>
				<p className="text-gray-500">View all posted articles.</p>
			</div>
			{data.length > 0 ? (
				<div className="flex flex-col gap-8">
					<Card className="w-full divide-y">
						<div className="p-6 flex justify-between">
							<div className="flex-1">
								<h2 className="font-medium text-lg">All AGCOMS Blogs</h2>
								<p className="text-gray-500 text-xs">
									Find all new and existing blogs.
								</p>
							</div>
							<Button variant="outline">
								<Plus className="h-5 w-5 mr-2" />
								New Blog post
							</Button>
						</div>
					</Card>
					<div>
						<div className="flex flex-col gap-4">
							<h4>Recent blogs posts</h4>
							<RecentBlogs data={data} />
						</div>
					</div>
				</div>
			) : (
				<EmptyState
					className=" border-0 shadow-none"
					title="No available data"
					description="Blogs will be shown when created!">
					<Button variant="outline">
						<Plus className="h-5 w-5 mr-2" />
						New Blog post
					</Button>
				</EmptyState>
			)}
		</div>
	);
}
