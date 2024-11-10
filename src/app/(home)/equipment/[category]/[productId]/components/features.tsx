// 'use client';
// import HtmlText from '@/components/shared/html-text';
// import {
// 	Accordion,
// 	AccordionContent,
// 	AccordionItem,
// 	AccordionTrigger,
// } from '@/components/ui/accordion';
// import { Button } from '@/components/ui/button';
// import { Separator } from '@/components/ui/separator';
// import { ProductType } from '@/lib/actions/product-actions';
// import React, { useMemo, useState } from 'react';
// import { Element } from 'react-scroll';

// interface Props {
// 	data: ProductType;
// }

// const Features = ({ data }: Props) => {
// 	if (!data) return;
// 	const { features: featurez } = data;
// 	const [feats, setFeats] = useState<string[]>([]);
// 	const [showAll, setShowAll] = useState<boolean>(false);
// 	const features = useMemo(() => {
// 		return showAll ? featurez : featurez.slice(0, 6);
// 	}, [showAll]);
// 	return (
// 		<>
// 			{features.length > 0 && (
// 				<Element name="feats">
// 					<div className="space-y-2 px-4 md:px-12 py-8 bg-[#eff0f0]">
// 						<div className="flex justify-between items-center">
// 							<h3 className="text-xl font-bold">Features</h3>
// 							<Button
// 								onClick={() =>
// 									feats.length > 0
// 										? setFeats([])
// 										: setFeats([...features.map((f) => f.name)])
// 								}
// 								variant="ghost"
// 								className="text-blue-600 hover:text-black transition-colors">
// 								{feats.length > 0 ? 'Collapse All' : 'Expand All'}
// 							</Button>
// 						</div>
// 						<Separator className="bg-gray-400" />
// 						<div className="space-y-6">
// 							<Accordion
// 								value={feats}
// 								onValueChange={setFeats}
// 								type="multiple"
// 								className="w-full">
// 								{features.map((f) => (
// 									<AccordionItem
// 										className="border-gray-400"
// 										key={f.id}
// 										value={f.name}>
// 										<AccordionTrigger className="" isPlus={true}>
// 											{f.name}
// 										</AccordionTrigger>
// 										<AccordionContent className="px-3 py-0">
// 											<HtmlText
// 												text={f.content}
// 												className="text-sm px-3 [&_ul]:px-3 space-y-2 [&_ul]:space-y-2 [&_li]:list-disc [&_li]:marker:text-blue-600 [&_li]:list-outside  font-semibold"
// 											/>
// 										</AccordionContent>
// 									</AccordionItem>
// 								))}
// 							</Accordion>
// 							{featurez.length > 6 && (
// 								<div className="flex justify-center">
// 									<Button
// 										onClick={() => setShowAll(!showAll)}
// 										variant="outline"
// 										className="text-blue-600 py-3 px-6 border-blue-600 transition-colors">
// 										{showAll ? 'Show less' : 'Show more'}
// 									</Button>
// 								</div>
// 							)}
// 						</div>
// 					</div>
// 				</Element>
// 			)}
// 		</>
// 	);
// };

// export default Features;
