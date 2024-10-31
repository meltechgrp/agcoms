'use client';
import { cn, uniqueId } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarTrigger,
} from '../ui/menubar';
import useNavStore, { ProCats } from '@/stores/use-nav-store';
import { Button } from '../ui/button';

export default function NavMenu({ className }: { className?: string }) {
	const pathname = usePathname();
	const store = useNavStore();
	const { product, pages } = store;
	return (
		<Menubar className={cn('gap-x-6 pb-0 border-0', className)}>
			<MenubarMenu>
				<Link
					href="/"
					className={cn(
						'h-full flex items-center',
						pathname === '/'
							? 'border-tertiary text-tertiary text-sm font-normal border-b-2 rounded-none '
							: ''
					)}>
					Home
				</Link>
			</MenubarMenu>
			{pages.map((item, i) => (
				<>
					{item.slug === 'equipment' ? (
						<MenubarMenu key={uniqueId()}>
							<MenubarTrigger
								className={cn(
									'hover:text-blue-500 font-normal transition-colors duration-1000',
									pathname.split('/')[1] === item.link
										? 'border-tertiary text-tertiary text-sm font-normal border-b-2 rounded-none '
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
								href={item.link}
								className={cn(
									'hover:text-tertiary font-semibold transition-colors text-sm text-black duration-1000',
									pathname === item.slug
										? 'border-tertiary text-tertiary border-b-2 rounded-none '
										: 'text-black'
								)}>
								<Button variant="link" className="font-semibold font-roboto">
									{item.name}
								</Button>
							</Link>
						</MenubarMenu>
					)}
				</>
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
			<ul className="grid">
				{cats.map((c) => (
					<Link key={uniqueId()} href={c.link}>
						<MenubarItem className=" px-2 text-nowrap text-sm text-tertiary font-medium">
							{c.name}
						</MenubarItem>
					</Link>
				))}
			</ul>
		</>
	);
}
