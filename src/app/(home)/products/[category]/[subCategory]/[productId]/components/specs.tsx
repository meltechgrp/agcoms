'use client';
import HtmlText from '@/components/shared/html-text';
import { Button } from '@/components/ui/button';
import { ProductType } from '@/lib/actions/product-actions';
import React, { useMemo, useState } from 'react';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Element } from 'react-scroll';

interface Props {
	data: ProductType;
}

const Specifications = ({ data }: Props) => {
	if (!data) return;
	const [showAll, setShowAll] = useState<boolean>(false);
	const specs = useMemo(() => {
		return showAll ? data.specs : data.specs.slice(0, 6);
	}, [showAll]);
	return (
		<Element name="specs">
			<div className="space-y-6 px-4 sm:px-12 py-8">
				<div className="flex justify-between items-center">
					<h3 className="text-xl font-bold">Specifications</h3>
				</div>
				<div className="space-y-6">
					<Table className="">
						<TableBody>
							{specs.map((s) => (
								<TableRow key={s.id} className=" even:bg-gray-100">
									<TableCell className="font-medium border border-border sm:w-[20%] ">
										{s.name}
									</TableCell>
									<TableCell className="w-full border border-border">
										<HtmlText
											text={s.content}
											className="text-sm px-3 [&_ul]:px-3 space-y-2 [&_ul]:space-y-2 [&_li]:list-disc [&_li]:marker:text-blue-600 [&_li]:list-outside "
										/>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>

					{data.specs.length > 6 && (
						<div className="flex justify-center">
							<Button
								onClick={() => setShowAll(!showAll)}
								variant="outline"
								className="text-blue-600 py-3 px-6 border-blue-600 transition-colors">
								{showAll ? 'Show less' : 'Show more'}
							</Button>
						</div>
					)}
				</div>
			</div>
		</Element>
	);
};

export default Specifications;
