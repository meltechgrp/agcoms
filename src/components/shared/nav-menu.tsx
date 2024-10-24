'use client';
import { cn, uniqueId } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger,
} from '../ui/menubar';
import { ChevronRight } from 'lucide-react';
import useNavStore, { ProCats } from '@/stores/use-nav-store';
import { useEffect } from 'react';
import { Button } from '../ui/button';

export default function NavMenu({ className }: { className?: string }) {
	const pathname = usePathname();
	const store = useNavStore();
	const { product, pages, getProductData } = store;
	useEffect(() => {
		getProductData();
	}, []);
	return (
		<Menubar className={cn('gap-x-6 pb-0 border-t-0', className)}>
			<MenubarMenu>
				<Link
					href="/"
					className={cn(
						'h-full flex items-center',
						pathname === '/'
							? 'border-blue-700 text-blue-600 text-sm font-normal border-b-2 rounded-none '
							: ''
					)}>
					Home
				</Link>
			</MenubarMenu>
			{pages.map((item, i) => (
				<div>
					{item.slug === 'equipments' ? (
						<MenubarMenu key={uniqueId()}>
							<MenubarTrigger
								className={cn(
									'hover:text-blue-500 font-normal transition-colors duration-1000',
									pathname.split('/')[1] === item.slug
										? 'border-blue-700 text-blue-600 text-sm font-normal border-b-2 rounded-none '
										: ''
								)}>
								{item.name}
							</MenubarTrigger>
							<MenubarContent className=" relative">
								<Product products={product} />
							</MenubarContent>
						</MenubarMenu>
					) : (
						<MenubarMenu key={uniqueId()}>
							<Link
								href={item.slug}
								className={cn(
									'hover:text-blue-500 font-semibold transition-colors text-sm text-black duration-1000',
									pathname === item.slug
										? 'border-blue-700 text-blue-600 border-b-2 rounded-none '
										: 'text-black'
								)}>
								<Button variant="link" className="font-semibold font-roboto">
									{item.name}
								</Button>
							</Link>
						</MenubarMenu>
					)}
				</div>
			))}
		</Menubar>
	);
}

function Product(props: { products: any }) {
	const { products } = props;
	const cats: ProCats[] = products;
	return (
		<>
			<div>
				<Link href={'/equipments'}>
					<MenubarItem className="text-sm flex items-center px-2 font-semibold">
						All Equipments (A -Z)
					</MenubarItem>
				</Link>
			</div>
			{cats.map((c) => (
				<MenubarSub key={uniqueId()}>
					<MenubarSubTrigger>{c.name}</MenubarSubTrigger>
					<MenubarSubContent className=" min-w-[40vw] ">
						<div className="px-2 space-y-4 py-6">
							<Link href={`/equipments/${c.slug}`}>
								<MenubarItem className="text-base flex items-center px-2 font-semibold">
									{c.name} <ChevronRight className="w-5 h-5 ml-1" />
								</MenubarItem>
							</Link>
							<div className="flex justify-between gap-4 flex-wrap">
								{c.subcategories?.map((s) => (
									<div key={uniqueId()} className="min-w-[22%] space-y-1">
										<h3 className="text-xs px-2 capitalize text-gray-400">
											{s?.name || ''}
										</h3>
										<ul className="grid">
											{s.products.map((p) => (
												<Link
													key={uniqueId()}
													href={`/equipments/${c.slug}/${s.slug}/${p.id}`}>
													<MenubarItem className=" px-2 text-nowrap text-sm text-blue-700 font-medium">
														{p.name}
													</MenubarItem>
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
		</>
	);
}
