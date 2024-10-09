import { Card } from '@/components/ui/card';
import EmptyState from '@/components/shared/empty-state';
import { Plus } from 'lucide-react';
import { AlertTriggerButton } from '@/components/shared/alert-wrapper';
import RecentProducts from './components/recent-products';
import { ProductAlert } from './components/product';

type Props = {
	searchParams: {
		tab?: string;
		orderBy?: string;
		take?: string;
		skip?: string;
		productId?: string;
		edit?: string;
	};
};
export default function Page(props: Props) {
	const { searchParams } = props;
	const data = [];
	return (
		<div className="w-full h-full py-8 pl-0 space-y-6">
			<div>
				<h1 className=" text-xl sm:text-3xl font-medium mb-1">Products</h1>
				<p className="text-gray-500">View all posted products.</p>
			</div>
			{data.length > 0 ? (
				<>
					<Card className="w-full divide-y">
						<div className="p-6 flex justify-between">
							<div className="flex-1">
								<h2 className="font-medium text-lg">All agcoms products</h2>
								<p className="text-gray-500 text-xs">
									Find all new and existing products.
								</p>
							</div>

							<AlertTriggerButton
								variant="outline"
								alertKey="productId"
								alertValue="new">
								<Plus className="h-5 w-5 mr-2" />
								New product
							</AlertTriggerButton>
						</div>
					</Card>
					<div>
						<div className="flex flex-col gap-4">
							<h4>Recent publications</h4>
							<RecentProducts data={[]} />
						</div>
					</div>
				</>
			) : (
				<EmptyState
					className=" border-0 shadow-none"
					title="No available data"
					description="Projects will be shown when created!">
					<AlertTriggerButton
						variant="outline"
						alertKey="productId"
						alertValue="new">
						<Plus className="h-5 w-5 mr-2" />
						New product
					</AlertTriggerButton>
				</EmptyState>
			)}
			<ProductAlert
				open={!!searchParams.productId}
				productId={searchParams.productId}
				edit={searchParams.edit}
				product={null}
			/>
		</div>
	);
}
