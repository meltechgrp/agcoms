'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { usePathname, useRouter } from 'next/navigation';

const tabs = ['accounts'];
export default function Tabview() {
	const pathname = usePathname();
	const tab = pathname.split('/')[2] || 'account';
	const router = useRouter();

	function handleTabChange(tab: string) {
		if (tab === 'account') {
			router.push('/settings');
			return;
		}
		router.push(`/settings/${tab}`);
	}
	return (
		<Tabs defaultValue={tab} onValueChange={handleTabChange}>
			<div className="border-b border-slate-200 flex justify-between space-x-4">
				<TabsList className=" bg-transparent p-0 shadow-none rounded-none h-12">
					{tabs.map((tab, index) => (
						<TabsTrigger
							key={index}
							className="h-full border-b-2 font-medium border-transparent data-[state=active]:bg-transparent hover:border-primary hover:text-primary data-[state=active]:border-primary data-[state=active]:text-primary  items-start rounded-none capitalize"
							value={tab}>
							{tab}
						</TabsTrigger>
					))}
				</TabsList>
			</div>
		</Tabs>
	);
}
