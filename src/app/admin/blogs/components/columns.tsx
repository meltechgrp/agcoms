'use client';

import { DataTableColumnHeader } from '@/components/shared/data-table-column-header';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { ColumnDef, Row } from '@tanstack/react-table';
import { format } from 'date-fns/format';
import Link from 'next/link';
import MemberDropdown from './member-dropdown';

export const columns: ColumnDef<any>[] = [
	{
		id: 'name',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Member's Name" />
		),
		enableSorting: false,
		enableHiding: false,
		cell({ row }) {
			const member = row.original;
			const name = `${member?.first_name || ''} ${member?.last_name || ''} `;
			return (
				<div className="flex space-x-2">
					<Avatar className="h-8 w-8">
						<AvatarFallback className=" uppercase">
							{member?.first_name?.charAt(0) || ''}
							{member?.last_name?.charAt(0) || ''}
						</AvatarFallback>
					</Avatar>
					<Link
						href={`/admin/members?memberId=${member.id}`}
						className=" hover:underline">
						<div className="text-sm font-medium capitalize text-foreground">
							{name}
						</div>
						<div className="text-sm text-foreground">
							<span className="truncate">{member.phone_number}</span>
						</div>
					</Link>
				</div>
			);
		},
		filterFn: (row, id, value) => {
			const member = row.original;

			const firstName = member.first_name || '';
			const lastName = member.last_name || '';
			const phoneNumber = member.phone_number || '';
			const newRegex = new RegExp(value, 'ig');
			return (
				newRegex.test(firstName) ||
				newRegex.test(lastName) ||
				newRegex.test(phoneNumber)
			);
		},
	},
	{
		accessorKey: 'created',
		header: () => <span className="hidden md:flex">Created</span>,
		cell({ row }) {
			const createdAt = row.original?.created_at;
			return (
				<time className="text-sm text-foreground ml-auto hidden md:flex">
					{createdAt
						? format(new Date(createdAt), 'MMM d, yyyy,  hh:mm a')
						: 'N/A'}
				</time>
			);
		},
	},
	{
		accessorKey: 'category',
		header: () => <span className="hidden md:flex">Category</span>,
		cell({ row }) {
			const category = row.original.role;
			return (
				<span className="text-sm text-blue-500 mx-auto hidden md:flex capitalize">
					{category || 'N/A'}
				</span>
			);
		},
	},
	{
		accessorKey: 'gender',
		header: () => <span className="hidden md:flex">Gender</span>,
		cell({ row }) {
			const gender = row.original.gender;
			return (
				<span
					className={cn(
						'text-sm text-center hidden md:flex',
						gender === 'M' ? 'text-green-500' : 'text-yellow-500'
					)}>
					{gender || ''}
				</span>
			);
		},
	},
	{
		id: 'actions',
		cell: ({ row }) => <DataTableRowActions row={row} />,
	},
];

interface DataTableRowActionsProps<TData> {
	row: Row<TData>;
}

export function DataTableRowActions<TData>({
	row,
}: DataTableRowActionsProps<TData>) {
	const user: any = row.original as any;
	return <MemberDropdown id={user.id as string} />;
}
