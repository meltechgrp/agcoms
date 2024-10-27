'use client';

import { columns } from '@/app/admin/requests/components/columns';
import { DataTable } from '@/components/shared/data-table';
import { DataTableToolbar } from '@/components/shared/data-table-toolbar';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RequestType } from '@/lib/actions/request-actions';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type Props = {
	data: RequestType;
	tab: string;
};
export default function TabsView(props: Props) {
	const { data, tab } = props;
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	function handleTabChange(tab: string) {
		const params = new URLSearchParams(searchParams);
		params.set('tab', tab);
		replace(`${pathname}?${params.toString()}`);
	}
	return (
		<Tabs defaultValue={tab} onValueChange={handleTabChange}>
			<DataTable
				columns={columns}
				data={data}
				HeaderComponent={({ table }) => (
					<div className="py-4 px-2 sm:px-6 overflow-aut0 relative w-full border-b flex sm:justify-between space-x-4">
						<TabsList className=" bg-white shadow-custom-2 border border-slate-200">
							<TabsTrigger
								className="data-[state=active]:bg-slate-200"
								value="All">
								All
							</TabsTrigger>
						</TabsList>
						<DataTableToolbar table={table as any} />
					</div>
				)}
			/>
		</Tabs>
	);
}
