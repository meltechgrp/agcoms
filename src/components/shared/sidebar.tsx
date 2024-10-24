'use client';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet';
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { uniqueId } from '@/lib/utils';
import useNavStore from '@/stores/use-nav-store';

function Sidebar() {
	const [state1, setState1] = useState(false);

	const store = useNavStore();
	const { product, pages, getProductData } = store;
	useEffect(() => {
		getProductData();
	}, []);
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
					<span className="flex items-center text-blue-600 font-bold">
						<ChevronLeft className="w-4 h-4 mr-2" /> Back
					</span>
				</SheetClose>
				<nav className="grid  text-lg py-4 font-medium">
					<Link
						href="/"
						onClick={() => setState1(false)}
						className={
							' flex h-12 font-bold text-sm text-gray-500 items-center hover:bg-gray-200 hover:text-blue-600 transition-colors duration-700  px-[1rem] '
						}>
						<h3 className="font-medium">Home</h3>
					</Link>
					{pages.map((page, i) => (
						<div>
							{page.slug === 'equipments' ? (
								<Sheet key={uniqueId()}>
									<SheetTrigger asChild>
										<div className="flex h-12 font-bold text-sm text-gray-500 items-center hover:bg-gray-200 hover:text-blue-600 transition-colors duration-700  px-[1rem] justify-between">
											{page.name} <ChevronRight className="w-5 h-5 ml-1" />
											<span className="sr-only">Toggle sidebar menu</span>
										</div>
									</SheetTrigger>
									<SheetContent
										close={true}
										overlay={true}
										side="right"
										className="px-0 duration-1000">
										<SheetClose className="border-b flex w-full px-3 border-gray-200 pb-3">
											<span className="flex items-center text-blue-600 font-bold">
												<ChevronLeft className="w-4 h-4 mr-2" /> Back
											</span>
										</SheetClose>
										<nav className="grid  text-lg py-4 font-medium">
											<div className="px-2">
												<Link href={'/equipments'}>
													<SheetClose
														onClick={() => setState1(false)}
														className="text-sm flex items-center px-2 font-medium">
														All equipments (A -Z)
													</SheetClose>
												</Link>
											</div>
											{product.map((c) => (
												<Sheet key={uniqueId()}>
													<SheetTrigger asChild>
														<div className="flex h-12 font-medium text-sm text-gray-500 items-center hover:bg-gray-200 hover:text-blue-600 transition-colors duration-700  px-[1rem] justify-between">
															{c.name}
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
															<span className="flex items-center text-blue-600 font-bold">
																<ChevronLeft className="w-4 h-4 mr-2" /> Back
															</span>
														</SheetClose>
														<div className="px-2 space-y-4 pt-3">
															<Link href={`equipments/${c.slug}`}>
																<SheetClose
																	onClick={() => setState1(false)}
																	className="text-base hover:bg-gray-200 flex w-full py-2 items-center px-2 font-semibold">
																	{c.name}
																	<ChevronRight className="w-5 h-5 ml-1" />
																</SheetClose>
															</Link>
															<div className="flex flex-col gap-6 ">
																{c?.subcategories?.map((s) => (
																	<div
																		key={uniqueId()}
																		className="w-full space-y-1">
																		<h3 className="text-xs px-2 capitalize text-gray-400">
																			{s.name}
																		</h3>
																		<ul className="grid">
																			{s.products.map((p) => (
																				<Link
																					key={uniqueId()}
																					href={`equipments/${c.slug}/${s.slug}/${p.id}`}>
																					<li>
																						<SheetClose
																							onClick={() => setState1(false)}
																							className=" px-2 h-8 flex items-center hover:bg-gray-200 text-nowrap text-sm text-blue-700 font-medium">
																							{p.name}
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
											))}
										</nav>
									</SheetContent>
								</Sheet>
							) : (
								<Link key={uniqueId()} href={`/${page.slug}`}>
									<SheetClose className="text-sm capitalize flex items-center px-2 font-semibold">
										{page.slug}
									</SheetClose>
								</Link>
							)}
						</div>
					))}
				</nav>
			</SheetContent>
		</Sheet>
	);
}

export default Sidebar;
