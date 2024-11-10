import { Card } from '@/components/ui/card';
import { DashboardData } from '@/lib/actions';
import { cn, uniqueId } from '@/lib/utils';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { useMemo } from 'react';

interface Props {
	data: DashboardData;
}
type keys = keyof DashboardData;
function Visitors(props: Props) {
	const { data } = props;
	return (
		<Card className="w-full h-60 md:h-full px-4 py-4">
			<div className="flex h-auto justify-between items-center">
				<h2 className="text-sm text-gray-500">Agcoms data</h2>
				<DotsHorizontalIcon className="h-6 w-6 font-bold text-gray-300" />
			</div>
			<div className="flex-1 h-[80%]">
				<div className="h-full flex justify-center items-center relative">
					{Object.entries(data)
						.sort((a, b) => b[1] - a[1])
						.map(([key, value], i) => (
							<Circle
								key={uniqueId()}
								value={value}
								item={key as keys}
								index={i}
							/>
						))}
				</div>
			</div>
			<div className="flex justify-center space-x-4">
				{Object.keys(data).map((c) => (
					<div key={c} className="flex gap-1 items-center">
						<div
							className={cn(
								'w-1.5 h-1.5 rounded-full',
								colors[c as keyof typeof colors]
							)}
						/>
						<span className=" capitalize text-xs font-semibold">{c}</span>
					</div>
				))}
			</div>
		</Card>
	);
}
export default Visitors;

interface CircleProps {
	className?: string;
	value?: number;
	item: keys;
	index: number;
}

function Circle({ className, value, item, index }: CircleProps) {
	const shape = useMemo(() => {
		switch (index) {
			case 0:
				return 'z-10';
			case 1:
				return 'absolute w-24 h-24 md:w-32 md:h-32 md:t-4 md:right-10 top-0 z-20 right-8';
			case 2:
				return 'absolute w-20 h-20 md:w-28 md:h-28 bottom-4 z-20 right-16';
			default:
				return 'absolute w-16 h-16 md:w-20 md:h-20 md:bottom-8 md:left-20 bottom-4 -z-0 left-16';
		}
	}, [index]);
	return (
		<div
			className={cn(
				'md:w-40 md:h-40 w-28 h-28 text-2xl font-bold bg-gray-300 text-white rounded-full flex justify-center items-center',
				colors[item],
				shape,
				className
			)}>
			<h1>{value}%</h1>
		</div>
	);
}
type Colors = {
	[K in keyof DashboardData]: string;
};
const colors: Colors = {
	equipment: 'bg-[#0b1058]',
	admins: 'bg-[#a9be99]',
	posts: 'bg-[#dad3cc]',
	requests: 'bg-[#c09f80]',
};
