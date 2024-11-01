import { Metadata } from 'next';
import GraphCard from './components/graph-card';
import Visitors from './components/visitors';
import g1 from '@/assets/graphs/g1.png';
import g2 from '@/assets/graphs/g2.png';
import g3 from '@/assets/graphs/g3.png';
import RecentRequests from './components/recent-requests';
import Stats from './components/stats';
import { getMessages } from '@/lib/actions/request-actions';
import { getDashboardData } from '@/lib/actions';
import { validateRequest } from '@/lib/lucia/validate-request';
import { redirect } from 'next/navigation';
import { getProducts } from '@/lib/actions/product-actions';

export const metadata: Metadata = {
	title: 'AGCOMS Dashboard',
	description: 'Dashboard of AGCOMS',
};

export default async function Dashboard() {
	const { user } = await validateRequest();
	if (!user) {
		return redirect('/auth/login');
	}
	const data = await getMessages();
	const info = await getDashboardData();
	const products = await getProducts({
		take: 4,
		orderBy: {
			createdAt: 'desc',
		},
		skip: 0,
	});
	const grpahCardData = [
		{
			title: 'Total Equipment',
			value: info.equipment,
			image: g1,
		},
		{
			title: 'Total Publications',
			value: info.posts,
			image: g3,
		},
		{
			title: 'Quotation Requests',
			value: info.requests,
			image: g2,
		},
		{
			title: 'Admin Staffs',
			value: info.admins,
			image: g1,
		},
	];
	return (
		<>
			<div className="flex-col md:flex w-full">
				<div className="flex-1 space-y-10 ">
					<div className=" mt-1 mb-3 px-1 pt-2 flex flex-row justify-between items-center">
						<div>
							<h1 className=" font-[RobotoBold] md:text-2xl capitalize text-xl sm:text-2xl">
								Hello {user.firstName} {user.lastName} 👋
							</h1>
							<h4 className=" font-[RobotoLight] mt-1.5 lg:text-sm text-xs">
								Create and manage AGCOMS activities!
							</h4>
						</div>
					</div>
					<div className="flex-1 grid gap-2.5 sm:gap-4">
						<div className="grid grid-cols-1 sm:grid-cols-2  gap-2.5 sm:gap-4">
							<div className="grid grid-cols-2  gap-2.5 sm:gap-4">
								{grpahCardData.map((d) => (
									<GraphCard key={d.title} data={d} />
								))}
							</div>
							<Visitors data={info} />
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-[60%,auto]  gap-2.5 sm:gap-4">
							<RecentRequests requests={data} className=" " />
							<Stats data={products} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
