'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import Image from '../shared/image';
import Link from 'next/link';

export const InfiniteMovingImages = ({
	items,
	direction = 'left',
	speed = 'fast',
	pauseOnHover = true,
	className,
	bucketName,
	folderName,
}: {
	items: {
		id: string;
		url: string;
		name: string;
		category?: string;
	}[];
	direction?: 'left' | 'right';
	speed?: 'fast' | 'normal' | 'slow';
	pauseOnHover?: boolean;
	className?: string;
	bucketName?: string;
	folderName?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === 'left') {
				containerRef.current.style.setProperty(
					'--animation-direction',
					'forwards'
				);
			} else {
				containerRef.current.style.setProperty(
					'--animation-direction',
					'reverse'
				);
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === 'fast') {
				containerRef.current.style.setProperty('--animation-duration', '20s');
			} else if (speed === 'normal') {
				containerRef.current.style.setProperty('--animation-duration', '40s');
			} else {
				containerRef.current.style.setProperty('--animation-duration', '80s');
			}
		}
	};
	return (
		<div
			ref={containerRef}
			className={cn(
				'scroller relative z-20 max-w-sm lg:max-w-7xl overflow-hidden  ',
				className
			)}>
			<ul
				ref={scrollerRef}
				className={cn(
					' flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap',
					start && 'animate-scroll ',
					pauseOnHover && 'hover:[animation-play-state:paused]'
				)}>
				{items.map((item, idx) => (
					<Link href={`/equipment/${item?.category}/${item.id}`}>
						<li
							className="w-[250px] h-[14rem] overflow-hidden shadow-md md:h-[16rem] max-w-full relative rounded-2xl flex-shrink-0 md:w-[320px]"
							key={item.id}>
							<Image
								src={item.url}
								className="w-full h-full object-cover"
								alt={item.name ?? 'agcoms products'}
								bucketName={bucketName ?? 'images'}
								folderName={folderName ?? 'product-images'}
							/>
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
};
