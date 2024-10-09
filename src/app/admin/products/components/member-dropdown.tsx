'use client';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DotsHorizontalIcon, DotsVerticalIcon } from '@radix-ui/react-icons';
import { UserRound } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
type Props = {
	id: string;
	edit?: boolean;
};

export default function MemberDropdown(props: Props) {
	const { id, edit = false } = props;
	const navigate = useRouter();
	const [open, setOpen] = useState(false);
	const [actionType, setActionType] = useState<'VERIFIED' | 'PENDING' | null>(
		null
	);

	const actionDescriptions = {
		PENDING: 'By deactiving this user, the user account will be deactivated.',
		VERIFIED: 'By deactiving this user, the user account will be deactivated.',
	};

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="outline"
						className="flex h-10 w-10 p-0 data-[state=open]:bg-muted border-gray-30">
						{edit ? (
							<DotsHorizontalIcon className="h-4 w-4" />
						) : (
							<DotsVerticalIcon className="h-4 w-4" />
						)}
						<span className="sr-only">Open menu</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="w-[160px]">
					<DropdownMenuLabel>Member menu</DropdownMenuLabel>
					<DropdownMenuSeparator />
					{!edit && (
						<DropdownMenuItem
							onClick={() => navigate.push(`?memberId=${id}`)}
							className="flex gap-2 items-center">
							<UserRound size={16} />
							View member
						</DropdownMenuItem>
					)}
					<DropdownMenuItem
						onClick={() => navigate.push(`?memberId=${id}&editMember=true`)}
						className="flex gap-2 items-center">
						<UserRound size={16} />
						Edit member
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
			<AlertDialog open={open} onOpenChange={setOpen}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
						<AlertDialogDescription>
							{actionType ? actionDescriptions[actionType] : ''}
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction
							onClick={async () => {
								setOpen(false);
								toast.success('Success');
								navigate.refresh();
							}}>
							Continue
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	);
}
