'use client';
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarTrigger,
} from '@/components/ui/menubar';
import { NavMenuData } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavMenu({ className }: { className?: string }) {
	const pathname = usePathname();
	return (
		<Menubar className={cn('gap-x-6 pb-0 border-t-0', className)}>
			<MenubarMenu>
				<Link
					href="/"
					className={cn(
						'h-full flex items-center',
						pathname === '/'
							? 'border-green-700 text-green-600 text-sm font-normal border-b-2 rounded-none '
							: ''
					)}>
					Home
				</Link>
			</MenubarMenu>
			{NavMenuData.map((item, i) => (
				<MenubarMenu key={i + item.title}>
					<MenubarTrigger
						className={cn(
							'hover:text-green-500 transition-colors duration-1000',
							pathname === '/digital'
								? 'border-green-700 text-green-600 text-sm font-normal border-b-2 rounded-none '
								: ''
						)}>
						{item.title}
					</MenubarTrigger>
					<MenubarContent>
						{item.sub.map((sub, i) => (
							<MenubarItem key={i + sub.title} inset asChild>
								<Link
									href={`/digital/${sub.link}`}
									className="focus:text-green-600">
									{sub.title}
								</Link>
							</MenubarItem>
						))}
					</MenubarContent>
				</MenubarMenu>
			))}
		</Menubar>
	);
}
