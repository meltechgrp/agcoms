'use client';
import { format } from 'date-fns';
import RequestStatusBadge from './request-status';
import EmptyState from '@/components/shared/empty-state';
import { cn } from '@/lib/utils';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { RequestType } from '@/lib/actions/request-actions';

export default function RecentRequests(props: {
	requests: RequestType;
	className?: string;
}) {
	const { requests, className } = props;
	return (
		<div
			className={cn(
				'bg-card recent pt-3 pb-4 rounded-lg border flex-1',
				className
			)}>
			<div className="flex h-auto justify-between px-3 items-center">
				<h2 className="text-sm text-gray-500">Recent requests</h2>
				<DotsHorizontalIcon className="h-6 w-6 font-bold text-gray-300" />
			</div>
			<div className=" rounded-sm mt-3 px-3">
				<table className="w-full text-muted-foreground">
					<thead>
						<tr>
							<th className="">Full Name</th>
							<th>Posted</th>
							<th>Phone</th>
						</tr>
					</thead>
					<tbody>
						{requests.map((r) => (
							<tr key={r.id}>
								<td>
									<a href={`#`}>{r.fullName}</a>
								</td>
								<td>
									{format(new Date(new Date(r.createdAt)), 'MMM dd, yyyy')}
								</td>
								<td>{r.phone}</td>
							</tr>
						))}
					</tbody>
				</table>
				{!requests && (
					<EmptyState
						className="border-0 shadow-none"
						title="No available data"
						description="Requests will be shown when created!"
					/>
				)}
			</div>
		</div>
	);
}
