'use client';
import { NavMenuData } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
	Menubar,
	MenubarContent,
	MenubarGroup,
	MenubarItem,
	MenubarLabel,
	MenubarMenu,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger,
} from '../ui/menubar';
import { ChevronRight } from 'lucide-react';

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
							pathname.split('/')[1] === item.title.toLowerCase()
								? 'border-green-700 text-green-600 text-sm font-normal border-b-2 rounded-none '
								: ''
						)}>
						{item.title}
					</MenubarTrigger>
					<MenubarContent className=" relative">
						{item.sub.map((sub, i) => (
							<MenubarSub key={i + sub.title}>
								{sub?.categories && sub?.categories.length > 0 ? (
									<MenubarSubTrigger>{sub.title}</MenubarSubTrigger>
								) : (
									<Link href={sub.link}>
										<MenubarItem className="text-sm flex items-center px-2 font-semibold">
											{sub.title}
										</MenubarItem>
									</Link>
								)}
								<MenubarSubContent className=" min-w-[40vw] ">
									<div className="px-2 space-y-4 py-6">
										<Link href={sub.link}>
											<MenubarItem className="text-base flex items-center px-2 font-semibold">
												{sub.title} <ChevronRight className="w-5 h-5 ml-1" />
											</MenubarItem>
										</Link>
										<div className="flex justify-between gap-4 flex-wrap">
											{sub?.categories?.map((c) => (
												<div key={c.title} className="min-w-[22%] space-y-1">
													<h3 className="text-xs px-2 capitalize text-gray-400">
														{c?.title || ''}
													</h3>
													<ul className="grid">
														{c.cats.map((i) => (
															<Link key={i.title} href={i.link}>
																<li>
																	<MenubarItem className=" px-2 text-nowrap text-sm text-green-700 font-medium">
																		{i.title}
																	</MenubarItem>
																</li>
															</Link>
														))}
													</ul>
												</div>
											))}
										</div>
									</div>
								</MenubarSubContent>
							</MenubarSub>
						))}
					</MenubarContent>
				</MenubarMenu>
			))}
		</Menubar>
	);
}
