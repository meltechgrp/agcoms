'use client';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet';
import { NavMenuData } from '@/lib/constants';
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { uniqueId } from '@/lib/utils';

function Sidebar() {
	const [state1, setState1] = useState(false);

	return (
		<Sheet open={state1} onOpenChange={setState1}>
			<SheetTrigger asChild>
				<Button
					variant="outline"
					size="icon"
					className="shrink-0 md:hidden border-0">
					<Menu className="h-5 w-5" />
					<span className="sr-only">Toggle sidebar menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent close={true} side="right" className="px-0 duration-1000">
				<SheetClose className="border-b flex w-full px-3 border-gray-200 pb-3">
					<span className="flex items-center text-green-600 font-bold">
						<ChevronLeft className="w-4 h-4 mr-2" /> Back
					</span>
				</SheetClose>
				<nav className="grid  text-lg py-4 font-medium">
					<Link
						href="/"
						onClick={() => setState1(false)}
						className={
							' flex h-12 font-bold text-sm text-gray-500 items-center hover:bg-gray-200 hover:text-green-600 transition-colors duration-700  px-[1rem] '
						}>
						<h3 className="font-medium">Home</h3>
					</Link>
					{NavMenuData.map((hf, i) => (
						<Sheet key={uniqueId()}>
							<SheetTrigger asChild>
								<div className="flex h-12 font-bold text-sm text-gray-500 items-center hover:bg-gray-200 hover:text-green-600 transition-colors duration-700  px-[1rem] justify-between">
									{hf.title} <ChevronRight className="w-5 h-5 ml-1" />
									<span className="sr-only">Toggle sidebar menu</span>
								</div>
							</SheetTrigger>
							<SheetContent
								close={true}
								overlay={true}
								side="right"
								className="px-0 duration-1000">
								<SheetClose className="border-b flex w-full px-3 border-gray-200 pb-3">
									<span className="flex items-center text-green-600 font-bold">
										<ChevronLeft className="w-4 h-4 mr-2" /> Back
									</span>
								</SheetClose>
								<nav className="grid  text-lg py-4 font-medium">
									{hf.sub.map((s, i) => (
										<>
											{s?.categories && s?.categories.length > 0 ? (
												<Sheet key={uniqueId()}>
													<SheetTrigger asChild>
														<div className="flex h-12 font-medium text-sm text-gray-500 items-center hover:bg-gray-200 hover:text-green-600 transition-colors duration-700  px-[1rem] justify-between">
															{s.title}
															<ChevronRight className="w-5 h-5 ml-1" />
															<span className="sr-only">
																Toggle sidebar menu
															</span>
														</div>
													</SheetTrigger>

													<SheetContent
														close={true}
														overlay={true}
														side="right"
														className="px-0 duration-1000 overflow-y-scroll">
														<SheetClose className="border-b flex w-full px-3 border-gray-200 pb-3">
															<span className="flex items-center text-green-600 font-bold">
																<ChevronLeft className="w-4 h-4 mr-2" /> Back
															</span>
														</SheetClose>
														<div className="px-2 space-y-4 pt-3">
															<Link href={s.link}>
																<SheetClose
																	onClick={() => setState1(false)}
																	className="text-base hover:bg-gray-200 flex w-full py-2 items-center px-2 font-semibold">
																	{s.title}{' '}
																	<ChevronRight className="w-5 h-5 ml-1" />
																</SheetClose>
															</Link>
															<div className="flex flex-col gap-6 ">
																{s?.categories?.map((c) => (
																	<div
																		key={uniqueId()}
																		className="w-full space-y-1">
																		<h3 className="text-xs px-2 capitalize text-gray-400">
																			{c?.title || ''}
																		</h3>
																		<ul className="grid">
																			{c.cats.map((i) => (
																				<Link key={uniqueId()} href={i.link}>
																					<li>
																						<SheetClose
																							onClick={() => setState1(false)}
																							className=" px-2 h-8 flex items-center hover:bg-gray-200 text-nowrap text-sm text-green-700 font-medium">
																							{i.title}
																						</SheetClose>
																					</li>
																				</Link>
																			))}
																		</ul>
																	</div>
																))}
															</div>
														</div>
													</SheetContent>
												</Sheet>
											) : (
												<Link key={uniqueId()} href={s.link}>
													<SheetClose
														onClick={() => setState1(false)}
														className="flex w-full h-12 font-bold text-sm text-gray-500 items-center hover:bg-gray-200 hover:text-green-600 transition-colors duration-700  px-[1rem]">
														{s.title}
													</SheetClose>
												</Link>
											)}
										</>
									))}
								</nav>
							</SheetContent>
						</Sheet>
					))}
				</nav>
			</SheetContent>
		</Sheet>
	);
}

export default Sidebar;
