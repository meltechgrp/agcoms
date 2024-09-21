'use client';
import { Card } from '@/components/ui/card';
import TabsView from './components/tabs-view';
import EmptyState from '@/components/shared/empty-state';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

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
export default function Page(props: Props) {
	const { searchParams } = props;
	const data = [];
	return (
		<div className="w-full h-full py-8 pl-0 space-y-6">
			<div>
				<h1 className=" text-xl sm:text-3xl font-medium mb-1">Projects</h1>
				<p className="text-gray-500">View all posted projects.</p>
			</div>
			<Card className="w-full divide-y">
				<div className="p-6 flex">
					<div className="flex-1">
						<h2 className="font-medium text-lg">All agcoms projects</h2>
						<p className="text-gray-500 text-xs">
							Find all new and existing projects.
						</p>
					</div>
				</div>
				{data.length > 0 ? (
					<TabsView data={[]} tab={searchParams.tab || 'All'} />
				) : (
					<EmptyState
						className=" border-0 shadow-none"
						title="No available data"
						description="Projects will be shown when created!">
						<Button variant="outline">
							<Plus className="h-5 w-5 mr-2" />
							New project
						</Button>
					</EmptyState>
				)}
			</Card>
		</div>
	);
}
