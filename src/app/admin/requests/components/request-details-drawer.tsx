import { Globe } from 'lucide-react';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { format } from 'date-fns/format';
import { RequestType } from '@/lib/actions/request-actions';
import { SheetWrapper } from '@/components/shared/sheet-wrapper';
import { SheetTitle } from '@/components/ui/sheet';

type SplitsDetailsProps = {
	open: boolean;
	request?: RequestType[0];
};

export default function RequestDrawer(props: SplitsDetailsProps) {
	const { open, request } = props;
	return (
		<SheetWrapper
			sheetKey="requestId"
			sheetValue={request?.id || ''}
			open={open}
			className="w-full sm:min-w-[450px] px-2">
			{request && (
				<>
					<SheetTitle className="flex items-center space-x-2">
						<span className="flex gap-1 items-center">
							Request details <Globe size={20} className=" text-black" />
						</span>
					</SheetTitle>
					<div className="w-full space-y-3">
						<div className="mb-2">
							<Card className="px-4 py-2">
								<div className="flex relative justify-between items-start mb-3">
									<div className=" w-[60%] flex flex-col">
										<span className="text-base font-medium text-gray-900 truncate overflow-ellipsis w-60 mb-1">
											{request?.fullName || ''}
										</span>
										<span className="text-sm lowercase font-normal">
											{request?.email || ''}
										</span>
									</div>
								</div>
							</Card>
						</div>
						<div className="space-y-4">
							<Card className="py-2">
								<CardContent className="space-y-3 px-4 py-1">
									<TextWrapper title="Phone number">
										<span className="text-sm lowercase font-normal">
											{request?.phone || ''}
										</span>
									</TextWrapper>
									<TextWrapper title="Date created">
										<span className="text-sm font-normal">
											{format(
												new Date(request?.createdAt),
												'MMM d, yyyy,  hh:mm a'
											)}
										</span>
									</TextWrapper>
									<TextWrapper title="Address">
										<span className="text-sm lowercase font-normal">
											{request?.town || ''}
										</span>
									</TextWrapper>
								</CardContent>
							</Card>
							{request.message && (
								<Card className="py-2 space-y-3 px-3">
									<h4 className="text-sm sm:text-base text-gray-500 font-normal">
										Request message
									</h4>
									<span className="text-sm font-normal text-black/80">
										{request.message}
									</span>
								</Card>
							)}
						</div>
					</div>
				</>
			)}
		</SheetWrapper>
	);
}

interface TextProps {
	title: string;
	className?: string;
	children: React.ReactNode;
}

export const TextWrapper = (props: TextProps) => {
	const { title, className, children } = props;
	return (
		<div className={cn('flex justify-between items-center ', className)}>
			<span className="font-normal text-sm text-gray-400">{title}</span>
			{children}
		</div>
	);
};
