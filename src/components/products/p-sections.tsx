'use client';

import { Element } from 'react-scroll';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { charSet } from './p-nav';
import { getProNavData, ProNavData } from '@/lib/actions';

type Product = {
	name: string;
	id: string;
	cat: string;
};

interface Props {
	navData: ProNavData;
}

type GroupedProducts = {
	[key: string]: Product[] | string[];
};
function ProductSections({ navData }: Props) {
	const [grouped, setGrouped] = useState<GroupedProducts>({});
	const chars = charSet();
	useEffect(() => {
		const groupedProducts: GroupedProducts = chars.reduce<GroupedProducts>(
			(acc, char) => {
				if (/\d/.test(char)) {
					acc['1-9'] = acc['1-9'] || ['Currently, no matches found'];
				} else if (char >= 'A' && char <= 'Z') {
					acc[char] = acc[char] || ['Currently, no matches found'];
				}
				return acc;
			},
			{}
		);

		navData.map(({ name, id, category }) => {
			const firstChar = name[0].toUpperCase();
			const productEntry: Product = {
				name,
				id,
				cat: category.slug,
			};

			if (/\d/.test(firstChar)) {
				if (groupedProducts['1-9'][0] != undefined) {
					groupedProducts['1-9'] = [];
				}
				groupedProducts['1-9'].push(productEntry as any);
			} else if (firstChar >= 'A' && firstChar <= 'Z') {
				if (groupedProducts[firstChar][0] != undefined) {
					groupedProducts[firstChar] = [];
				}
				groupedProducts[firstChar].push(productEntry as any);
			}
		});

		setGrouped(groupedProducts);
	}, [navData]);
	return (
		<div className="grid gap-6 px-4 pt-12 pb-6 lg:px-12 bg-[#d5d5d5]">
			{Object.entries(grouped).map(([key, value]) => (
				<Element name={key} key={key} className="grid gap-6">
					<h2 className="text-lg lg:text-2xl capitalize text-gray-900 font-bold">
						{key}
					</h2>
					<div className="flex justify-between gap-4">
						{Array.from({ length: Math.ceil(value.length / 3) }).map(
							(_, rowIndex) => (
								<div key={rowIndex} className="w-[45%] flex flex-col gap-2">
									{value.slice(rowIndex * 3, rowIndex * 3 + 3).map((p) => (
										<>
											{typeof p === 'string' ? (
												<div>{p}</div>
											) : (
												<Link
													href={`/equipment/${p.cat}/${p.id}`}
													key={p.id}
													className=" text-sm w-fit text-green-600 font-semibold">
													{p.name}
												</Link>
											)}
										</>
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
