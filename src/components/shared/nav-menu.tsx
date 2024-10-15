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
import useNavStore, { Key, keys, ProCats } from '@/stores/use-nav-store';
import { useEffect } from 'react';

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
				<MenubarMenu key={uniqueId()}>
					<MenubarTrigger
						className={cn(
							'hover:text-blue-500 transition-colors duration-1000',
							pathname.split('/')[1] === item.slug
								? 'border-blue-700 text-blue-600 text-sm font-normal border-b-2 rounded-none '
								: ''
						)}>
						{item.name}
					</MenubarTrigger>
					<MenubarContent className=" relative">
						{item.slug === 'products' && <Product products={product} />}
						{item.slug !== 'products' && (
							<>
								{item.slug === 'financing' && (
									<div>
										<Link key={uniqueId()} href={`/${item.slug}`}>
											<MenubarItem className="text-sm capitalize flex items-center px-2 font-semibold">
												{item.slug}
											</MenubarItem>
										</Link>
									</div>
								)}
								{keys.includes(item.slug) &&
									store[item.slug as Key].map((sub, i) => (
										<Link key={uniqueId()} href={sub?.link ?? `/${sub.slug}`}>
											<MenubarItem className="text-sm flex items-center px-2 font-semibold">
												{sub.name}
											</MenubarItem>
										</Link>
									))}
							</>
						)}
					</MenubarContent>
				</MenubarMenu>
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
				<Link href={'/products'}>
					<MenubarItem className="text-sm flex items-center px-2 font-semibold">
						All products (A -Z)
					</MenubarItem>
				</Link>
			</div>
			{cats.map((c) => (
				<MenubarSub key={uniqueId()}>
					<MenubarSubTrigger>{c.name}</MenubarSubTrigger>
					<MenubarSubContent className=" min-w-[40vw] ">
						<div className="px-2 space-y-4 py-6">
							<Link href={`/products/${c.slug}`}>
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
													href={`/products/${c.slug}/${s.slug}/${p.id}`}>
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
