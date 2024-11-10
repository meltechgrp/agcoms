'use client';

import { AppRoutes } from '@/components/constants';
import { SheetWrapper } from '@/components/shared/sheet-wrapper';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Loader2Icon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';

type Props = {
	open: boolean;
	account: string;
	handleAddAdmin: (payload: {
		email: string;
		allowedRoutes: string[];
	}) => Promise<boolean>;
	handleUpdateAdmin: (payload: {
		email: string;
		allowedRoutes: string[];
	}) => Promise<boolean>;
	allowedRoutes?: string[];
};
export default function AddAdminDrawer(props: Props) {
	const { open, account, handleAddAdmin, handleUpdateAdmin } = props;
	const router = useRouter();
	const pathname = usePathname();

	const [loading, setLoading] = useState(false);
	function handleClose() {
		console.log('close', pathname);
		router.push(pathname);
	}
	const [email, setEmail] = useState(account === 'new' ? '' : account);

	const [allowedRoutes, setAllowedRoutes] = useState<string[]>([]);
	const isValidEmail = useMemo(
		() => new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email),
		[email]
	);
	async function onUpdateAdmin() {
		setLoading(true);
		if (account === 'new') await handleAddAdmin({ email, allowedRoutes });
		else await handleUpdateAdmin({ email, allowedRoutes });
		toast.success('Admin account privileges have been updated.');
		setLoading(false);
		setEmail('');
		setAllowedRoutes([]);
		handleClose();
		router.refresh();
	}
	useEffect(() => {
		if (account === 'new') return;
		setEmail(account);
		setAllowedRoutes(props.allowedRoutes || []);
	}, [account, props.allowedRoutes]);
	return (
		<SheetWrapper
			open={open}
			sheetKey="account"
			sheetValue={account || 'new'}
			className="lg:w-[460px] w-full pb-4">
			<div>
				{' '}
				<h3>{account === 'new' ? 'Add new admin' : 'Update admin'}</h3>
				<p>
					{account === 'new'
						? 'Add a new admin and grant them access to pages according to their role.'
						: 'Update admin account privileges.'}
				</p>
			</div>
			<div className=" space-y-4">
				<div className="pt-4">
					<Label className="text-sm font-medium text-gray-900" htmlFor="email">
						Email
					</Label>
					<Input
						type="text"
						defaultValue={email}
						placeholder="Enter email address"
						name="email"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</div>
				<Card>
					<div className="border-b p-4">
						<h4 className="text-sm">Account privileges</h4>
						<p className="text-xs">
							New admin accounts only have view access by default
						</p>
					</div>
					<div className="px-4 divide-y">
						{AppRoutes.filter((v) => v.hasAction).map((route) => (
							<div
								key={route.name}
								className="flex items-center py-4 justify-between">
								<div>
									<p className="text-sm">{route.name}</p>
									<p className="text-xs text-gray-500">{route.note}</p>
								</div>
								<Switch
									defaultChecked={allowedRoutes.includes(route.path)}
									onCheckedChange={(checked) => {
										if (checked) {
											setAllowedRoutes((v) => [...v, route.path]);
										} else {
											setAllowedRoutes((v) =>
												v.filter((v) => v !== route.path)
											);
										}
									}}
								/>
							</div>
						))}
					</div>
				</Card>
				<div className="grid grid-cols-2 gap-4">
					<Button onClick={handleClose} variant="outline" size="lg">
						Cancel
					</Button>
					<Button
						size="lg"
						disabled={!isValidEmail || loading}
						onClick={onUpdateAdmin}>
						{account === 'new' ? 'Create' : 'Update'}
						<Loader2Icon
							className={`h-5 w-5 ml-2 ${loading ? 'animate-spin' : 'hidden'}`}
						/>
					</Button>
				</div>
			</div>
		</SheetWrapper>
	);
}
