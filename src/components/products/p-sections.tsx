'use client';

import { Link as ScrollLink, Element, Events, scrollSpy } from 'react-scroll';
import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { NavMenuData } from '@/lib/constants';

interface groupedProducts {
	[key: string]: {
		title: string;
		link: string;
	}[];
}

function ProductSections() {
	const [grouped, setGrouped] = useState<groupedProducts>({});
	useEffect(() => {
		const groupedProducts: groupedProducts = {};
		NavMenuData.map((s) => s.sub.map((c) => c.categories?.map((cc) => cc.cats)))
			.flat(3)
			?.sort((a, b) =>
				a?.title ? a?.title?.localeCompare(b?.title ? b?.title : '') : -1
			)
			.forEach((product) => {
				if (!product) return;
				const firstChar = product.title[0].toUpperCase();
				if (/\d/.test(firstChar)) {
					if (!groupedProducts['1-9']) {
						groupedProducts['1-9'] = [];
					}
					groupedProducts['1-9'].push(product);
				} else if (firstChar >= 'A' && firstChar <= 'Z') {
					if (!groupedProducts[firstChar]) {
						groupedProducts[firstChar] = [];
					}
					groupedProducts[firstChar].push(product);
				}
			});
		setGrouped(groupedProducts);
	}, []);

	return (
		<div className="grid gap-6 px-4 pt-12 pb-6 sm:px-12 bg-[#d5d5d5]">
			{Object.entries(grouped).map(([key, value]) => (
				<Element name={key} key={key} className="grid gap-6">
					<h2 className="text-lg sm:text-2xl capitalize text-gray-900 font-bold">
						{key}
					</h2>
					<div className="flex justify-between gap-4">
						{Array.from({ length: Math.ceil(value.length / 3) }).map(
							(_, rowIndex) => (
								<div key={rowIndex} className="w-[45%] flex flex-col gap-2">
									{value
										.slice(rowIndex * 3, rowIndex * 3 + 3)
										.map((product) => (
											<Link
												href={`${product.link}`}
												key={product.title}
												className=" text-sm w-fit text-green-600 font-semibold">
												{product.title}
											</Link>
										))}
								</div>
							)
						)}
					</div>
				</Element>
			))}
		</div>
	);
}

export default ProductSections;
