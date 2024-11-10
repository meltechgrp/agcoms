'use client';
import * as React from 'react';
import { InfiniteMovingImages } from '../ui/infinite-moving-images';

interface Props {
	data: {
		id: string;
		name: string;
		images: {
			url: string;
		}[];
		category: {
			slug: string;
		};
	}[];
}

export default function FloatingCards(props: Props) {
	const { data } = props;
	const products = React.useMemo(() => {
		return data.map((item) => {
			return {
				id: item.id,
				name: item.name,
				url: item.images[0].url,
				category: item.category.slug,
			};
		});
	}, [data]);
	return (
		<div className="lg:py-6 bg-gray-50 flex flex-col pb-6 lg:pb-16 gap-8">
			<div className="flex px-4 lg:px-16  items-center flex-col gap-3">
				<h1 className="text-2xl pt-10 lg:pt-0 border-bottom self-center lg:text-4xl">
					Equipment
				</h1>
				<p className="text-sm lg:text-base w-full lg:w-[50%] text-center">
					Explore our comprehensive range of high-performance equipment tailored
					for agriculture, construction, forestry, golf, and turf maintenance
					across Africa and the Middle East. Built for durability and
					efficiency, our machines are designed to meet the unique demands of
					varied terrains and challenging conditions.
				</p>
			</div>
			<InfiniteMovingImages items={products} speed="slow" direction="left" />
		</div>
	);
}
