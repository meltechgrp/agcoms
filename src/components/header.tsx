'use client';
import { MapPin, Menu, User2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import SearchForm from './search';
import FeaturedProducts from './featured-product';
import NavMenu from './nav-menu';
import { NavMenuData } from '@/lib/constants';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
	const headerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const headerEl = headerRef.current;

		if (headerEl) {
			ScrollTrigger.create({
				trigger: headerEl,
				start: 'top top', // start when the header hits the top
				end: '+=10000', // arbitrary end value to keep it active
				toggleClass: {
					targets: headerEl,
					className: 'fixed-header',
				},
				onUpdate: (self) => {
					if (self.direction === -1) {
						// Scrolling up
						gsap.to(headerEl, { y: 0, duration: 0.3, ease: 'power1.out' });
					} else if (self.direction === 1) {
						// Scrolling down
						gsap.to(headerEl, {
							y: -headerEl.offsetHeight,
							duration: 0.3,
							ease: 'power1.out',
						});
					}
				},
			});
		}

		return () => {
			ScrollTrigger.killAll();
		};
	}, []);

	return (
		<div className="grid" ref={headerRef}>
			<div className="flex h-12 sm:h-[4.5rem] items-center gap-4 py-0 px-4 md:px-6 sm:border-b bg-background">
				<h2 className="text-lg sm:text-2xl font-bold">Agcoms</h2>
				<div className="ml-auto flex space-x-4 flex-1 justify-end sm:flex-initial items-center h-full">
					<SearchForm containerClassName="hidden sm:block" />
					<Button className=" p-0 sm:px-4 hover:bg-gray-100 bg-transparent border-none focus-visible:ring-0 focus-visible:ring-transparent text-black">
						<Link
							href={'#'}
							className="flex space-x-2 items-center text-sm text-gray-600">
							<MapPin />
							<span className="hidden sm:flex">Locate a Dealer</span>
						</Link>
					</Button>
					<div className="hidden sm:flex h-[60%] w-px bg-gray-300" />
					<Button className=" p-0 sm:px-4 hover:bg-gray-100 bg-transparent border-none focus-visible:ring-0 focus-visible:ring-transparent text-black">
						<Link
							href={'#'}
							className="flex space-x-2 items-center text-sm text-gray-600">
							<User2 />
							<span className="hidden sm:flex">Sign in</span>
						</Link>
					</Button>

					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="outline"
								size="icon"
								className="shrink-0 md:hidden border-0">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle sidebar menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="px-0 duration-1000">
							<nav className="grid gap-6 text-lg py-8 font-medium">
								<Accordion type="single" collapsible className="w-full">
									<Link
										href="/"
										className={
											' flex h-12 items-center hover:bg-gray-200 font-medium border-b  px-[2.1rem] border-gray-400'
										}>
										Home
									</Link>
									{NavMenuData.map((hf, i) => (
										<AccordionItem key={hf.title + i} value={`item-${i}`}>
											<AccordionTrigger
												isPlus={true}
												className="text-md hover:bg-gray-200 font-medium gap-2 border-b hover:no-underline px-2 border-gray-400">
												<span className="flex-1 flex justify-start">
													{hf.title}
												</span>
											</AccordionTrigger>
											<AccordionContent className="grid gap-2 px-8 py-4">
												{hf.sub.map((sub, i) => (
													<div key={i + sub.title}>
														<Link
															href={`/digital/${sub.link}`}
															className="focus:text-green-600 pb-1 w-full hover:text-green-600 border-b border-gray-200 text-sm font-medium">
															{sub.title}
														</Link>
													</div>
												))}
											</AccordionContent>
										</AccordionItem>
									))}
								</Accordion>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
			<div className="bg-gray-300 px-4 py-2 block sm:hidden">
				<SearchForm className="bg-white text-black border border-black flex-row-reverse" />
			</div>
			<NavMenu className="hidden sm:flex h-10 items-center gap-4 border-b bg-background px-4 md:px-6" />
			<FeaturedProducts />
		</div>
	);
}
