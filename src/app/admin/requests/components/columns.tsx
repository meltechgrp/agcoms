'use client';
import { DataTableColumnHeader } from '@/components/shared/data-table-column-header';
import { Checkbox } from '@/components/ui/checkbox';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns/format';
import React from 'react';
import Link from 'next/link';
import { RequestType } from '@/lib/actions/request-actions';

export const columns: ColumnDef<RequestType[0]>[] = [
	{
		accessorKey: 'name',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="full Name" />
		),
		enableSorting: false,
		enableHiding: false,
		cell({ row }) {
			const request = row.original;
			return (
				<Link href={`?requestId=${request?.id}`} className="hover:underline">
					<div className="text-sm font-medium text-gray-900 truncate overflow-ellipsis w-40">
						{request?.fullName}
					</div>
				</Link>
			);
		},
		filterFn: (row, id, value) => {
			const feature = row.original;
			const fullName = feature.fullName || '';
			const phone = feature.phone || '';

			const email = feature.email || '';
			const newRegex = new RegExp(value, 'ig');
			return (
				newRegex.test(fullName) || newRegex.test(email) || newRegex.test(phone)
			);
		},
	},
	{
		accessorKey: 'createdAt',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Date created" />
		),

		cell({ row }) {
			const request = row.original;
			return (
				<time className="text-sm text-gray-500 ml-auto">
					{format(new Date(request.createdAt), 'MMM d, yyyy,  hh:mm a')}
				</time>
			);
		},
	},
	{
		accessorKey: 'phone',
		header: 'Phone number',
		cell({ row }) {
			const feature = row.original;
			return (
				<div>
					<span className=" lowercase">{feature.phone}</span>
				</div>
			);
		},
	},
];
