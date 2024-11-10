import AccountDropdown from '@/app/admin/settings/components/account-dropdown';
import AddAdminDrawer from '@/app/admin/settings/components/add-admin-drawer';
import { buttonVariants } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
	handleAddAdmin,
	handleRemoveAdmin,
	handleUpdateAdmin,
} from '@/lib/actions/admin-actions';
import { validateRequest } from '@/lib/lucia/validate-request';
import prisma from '@/lib/prisma';
import { PlusIcon } from 'lucide-react';
import Link from 'next/link';

type Props = {
	searchParams: {
		account?: string;
	};
};
export default async function page(props: Props) {
	const {
		searchParams: { account },
	} = props;
	const session = await validateRequest();
	const superAdmins = process.env.WHITELISTED_EMAILS?.split(',') || [];
	const admins = await prisma.adminAllowedEmail.findMany();
	const emails = [...superAdmins, ...admins.map((admin) => admin.email)];
	const selectedAdmin = admins.find((admin) => admin.email === account);
	const isSuperAdmin = superAdmins.includes(session?.user?.email || '');
	return (
		<>
			<Card className="w-full divide-y">
				<div className="p-6 flex">
					<div className="flex-1">
						<h2 className="font-medium text-lg">Admin Account</h2>
						<p className="text-gray-500 text-xs">Update account role access.</p>
					</div>
					<div className="ml-auto"></div>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-[40%,auto] p-4 gap-4 py-4 sm:py-12">
					<div className="">
						<h4 className="font-medium text-sm">Account email address</h4>
					</div>
					<div className=" sm:place-self-start space-y-4 pr-6">
						{emails.map((email: any) => (
							<div key={email} className="flex space-x-4 items-center">
								<Input
									className="w-full sm:min-w-[350px] disabled:bg-gray-50 border-gray-300"
									defaultValue={email}
									disabled
									readOnly
								/>
								{superAdmins.includes(email) || !isSuperAdmin ? null : (
									<AccountDropdown
										email={email}
										handleRemoveAdmin={handleRemoveAdmin}
									/>
								)}
							</div>
						))}
						{isSuperAdmin && (
							<Link
								className={buttonVariants({ variant: 'outline' })}
								href="?account=new">
								<PlusIcon className="h-5 w-5 mr-2" />
								Add account
							</Link>
						)}
					</div>
				</div>
			</Card>
			<AddAdminDrawer
				open={!!account}
				account={account as string}
				handleAddAdmin={handleAddAdmin}
				handleUpdateAdmin={handleUpdateAdmin}
				allowedRoutes={selectedAdmin?.allowedPages || []}
			/>
		</>
	);
}
