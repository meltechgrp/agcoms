'use client';

import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';

export function charSet() {
	const result: string[] = ['1-9'];
	for (let charCode = 65; charCode <= 90; charCode++) {
		result.push(String.fromCharCode(charCode));
	}
	return result;
}

function ProductNavigation() {
	const [active, setActive] = useState<{ key: string; index: number }>({
		key: '1-9',
		index: 0,
	});
	const menuRef = useRef<HTMLDivElement>(null);
	const [grouped, setGrouped] = useState<string[]>([]);
	const handleSetActive = (key: string) => {
		setActive({
			key,
			index: grouped.indexOf(key),
		});
	};

	useEffect(() => {
		const result = charSet();
		setGrouped(result);
	}, []);
	useEffect(() => {
		scrollSpy.update();
		Events.scrollEvent.register('end', (to) => {
			console.log(to, 'scroll');
			if (to == '') return;
			setActive({
				key: to,
				index: grouped.indexOf(to),
			});
		});

		return () => {
			Events.scrollEvent.remove('end');
		};
	}, []);

	useEffect(() => {
		const menuElement = menuRef.current;
		const handleScroll = () => {
			if (menuElement) {
				const scrollY = window.scrollY;

				if (scrollY > 1000) {
					gsap.to(menuElement, {
						position: 'fixed',
						top: 0,
						z: 500,
						duration: 0.9,
						ease: 'power1.out',
					});
				} else {
					gsap.to(menuElement, {
						position: 'relative',
						top: 0,
						duration: 0.9,
						ease: 'power1.out',
					});
				}
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<div
			ref={menuRef}
			className="transition-all w-screen lg:w-[1350px] lg:max-w-[1350px] duration-300 bg-[#d3d1d1] px-16 shadow lg:px-4 ">
			<div className="space-x-2 hidden lg:flex">
				{grouped.map((key) => (
					<ScrollLink
						to={key}
						key={key}
						spy={true}
						smooth={true}
						duration={500}
						offset={-300}
						onSetActive={() => handleSetActive(key)}
						className={` cursor-pointer px-0 flex justify-center lg:px-3 py-4 text-base font-bold ${
							active.key === key ? 'bg-[#d5d5d5] text-green-600' : ''
						}`}>
						{key}
					</ScrollLink>
				))}
			</div>
			<Carousel
				setApi={(api) => {
					api?.scrollTo(active.index, true);
				}}
				opts={{
					duration: 30,
				}}
				className="w-full bg-[#d3d1d1] max-w-sm lg:hidden">
				<CarouselContent className="-ml-1 flex items-center">
					{Array.from({ length: 27 }).map((_, index) => (
						<CarouselItem key={index} className="pl-1 basis-[8vw]">
							<ScrollLink
								to={grouped[index]}
								key={grouped[index]}
								spy={true}
								smooth={true}
								duration={500}
								offset={-300}
								onSetActive={() => handleSetActive(grouped[index])}
								className={` cursor-pointer px-0 flex justify-center lg:px-3 py-4 text-sm font-bold ${
									active.key === grouped[index] || active.index === index
										? 'bg-[#d5d5d5] text-green-600'
										: ''
								}`}>
								{grouped[index]}
							</ScrollLink>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="w-6 h-6" />
				<CarouselNext className="w-6 h-6" />
			</Carousel>
		</div>
	);
}

export default ProductNavigation;
