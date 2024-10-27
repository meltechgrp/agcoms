import TabsView from '@/app/admin/requests/components/tabs-view';
import { Card } from '@/components/ui/card';
import { getMessages } from '@/lib/actions/request-actions';
import RequestDrawer from './components/request-details-drawer';

type Props = {
	searchParams: {
		tab?: string;
		requestId?: string;
	};
};
export default async function page(props: Props) {
	const { searchParams } = props;
	const data = await getMessages();

	return (
		<div className="w-full h-full py-4 space-y-8">
			<div className="space-y-2">
				<h1 className=" text-lg sm:text-2xl font-medium">Quotation Requests</h1>
				<p className="text-gray-500">View all pending quotation requests.</p>
			</div>
			<Card className="w-full divide-y max-w-[22rem] sm:max-w-full">
				<div className="p-6 flex">
					<div className="flex-1">
						<h2 className="font-medium text-lg">Requests</h2>
					</div>
				</div>
				<TabsView data={data} tab={searchParams.tab || 'All'} />
			</Card>
			<RequestDrawer
				open={!!searchParams.requestId}
				request={data.find((r) => r.id == searchParams?.requestId)}
			/>
		</div>
	);
}
