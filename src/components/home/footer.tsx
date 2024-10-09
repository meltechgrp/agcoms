import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import NigeriaIcon from '../icons/nigeria-icon';
import { uniqueId } from '@/lib/utils';

export default function Footer() {
	return (
		<div className=" sm:px-12 pt-7 sm:pt-16 py-16 mt-6 bg-[#e5e5e5] space-y-8">
			<div className="hidden sm:grid sm:grid-cols-3 gap-8 border-b border-gray-300 pb-10">
				{footerData.map((fl) => (
					<div key={fl?.title} className=" space-y-4">
						<h2 className="text-md font-bold">{fl.title}</h2>
						<div className="grid gap-2">
							{fl.links?.map((link) => (
								<Link
									href={link.url}
									key={uniqueId()}
									className="text-sm w-fit text-gray-600 font-bold">
									{link.title}
								</Link>
							))}
						</div>
					</div>
				))}
			</div>
			<Accordion type="single" collapsible className=" sm:hidden w-full">
				{footerData.map((fl, i) => (
					<AccordionItem key={uniqueId()} value={`item-${i}`}>
						<AccordionTrigger
							isPlus={true}
							className="text-md font-bold gap-2 border-b hover:no-underline px-4 border-gray-400">
							<span className="flex-1 flex justify-start">{fl.title}</span>
						</AccordionTrigger>
						<AccordionContent className="grid gap-2 px-8 py-4">
							{fl.links?.map((link) => (
								<Link
									href={link.url}
									key={uniqueId()}
									className="text-sm text-gray-700 font-bold">
									{link.title}
								</Link>
							))}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
			<div className="space-y-10 sm:space-y-6 px-4">
				<div className=" w-fit mx-auto">
					<Link href={'https://www.deere.africa/en/global-country-selector/'}>
						<Button
							variant={'outline'}
							className=" h-12 px-8 flex text-sm font-bold items-center gap-2 bg-transparent border-2 border-gray-300">
							<NigeriaIcon width={20} height={20} />
							Africa & the Middle East
						</Button>
					</Link>
				</div>
				<div className="flex justify-center w-full flex-wrap sm:w-[45%] mx-auto gap-4">
					{simpleF.map((s) => (
						<Link
							href={s.link}
							key={uniqueId()}
							className="text-xs font-bold transition-all duration-700  hover:underline text-gray-700">
							{s.title}
						</Link>
					))}
				</div>
				<div className="flex justify-center">
					<span className="text-xs font-bold text-gray-500">
						Copyright © 2024 Agcoms Company. All Rights Reserved.
					</span>
				</div>
				<div className="flex justify-center space-x-4">
					{['Facebook', 'Instagram', 'Linkedin', 'Twitter', 'Youtube'].map(
						(s) => (
							<Link
								target="_blank"
								href={`https://www.${s.toLowerCase()}.com`}
								key={uniqueId()}
								className="">
								{s === 'Facebook' && (
									<Facebook className="text-blue-600 w-5 h-5" />
								)}
								{s === 'Instagram' && (
									<Instagram className="text-black w-5 h-5" />
								)}
								{s === 'Linkedin' && (
									<Linkedin className="text-blue-600 w-5 h-5" />
								)}
								{s === 'Twitter' && (
									<Twitter className="text-blue-500 w-5 h-5" />
								)}
								{s === 'Youtube' && (
									<Youtube className="text-red-600 w-5 h-5" />
								)}
							</Link>
						)
					)}
				</div>
			</div>
		</div>
	);
}

const footerData = [
	{
		title: 'Products & Support',
		links: [
			{ title: 'Tractors', url: 'https://www.deere.africa/en/tractors/' },
			{
				title: 'Contact a Dealer',
				url: 'https://www.deere.africa/en/our-company/contact-us/',
			},
			{
				title: 'Shop Parts',
				url: 'https://www.deere.africa/en/finance/financing/',
			},
			{
				title: 'Free Tractor Operator Training Ts&Cs',
				url: 'https://parts.deere.africa/',
			},
			{
				title: 'Competition Ts&Cs',
				url: 'https://www.deere.africa/en/our-company/news-media/news-releases/2022/nov/competitions-terms-and-conditions/',
			},
			{
				title: "Tell us you're a John Deere Fan",
				url: 'https://www.deere.africa/en/our-company/news-media/news-releases/2022/dec/competition-terms-and-conditions/',
			},
			{
				title: 'John Deere Financial',
				url: 'https://www.deere.africa/en/campaigns/nampo-2023/',
			},
			{
				title: "Free Service Parts T's and C's",
				url: 'https://www.deere.com/assets/docs/region-1/ag-free-parts-campaign-5d-5e-6b-customer-tcs.docx',
			},
		],
	},
	{
		title: 'Company Information',
		links: [
			{
				title: 'PAIA MANUAL',
				url: 'https://www.deere.com/assets/pdfs/region-1/homepage/032024-updated-john-deere-paia-manual-29-feb-2024-publication.pdf',
			},
			{
				title: 'About Our Company',
				url: 'https://www.deere.africa/en/our-company/',
			},
			{
				title: 'History',
				url: 'https://www.deere.africa/en/our-company/history/',
			},
			{
				title: 'Careers',
				url: 'https://www.deere.africa/en/our-company/john-deere-careers/',
			},
			{
				title: 'News and Media',
				url: 'https://www.deere.africa/en/our-company/news-media/',
			},
			{
				title: 'Sustainability',
				url: 'https://www.deere.africa/en/current-offers/promotions/',
			},
			{
				title: 'Terms and Conditions',
				url: 'https://www.deere.africa/en/current-offers/promotions/',
			},
			{
				title: 'Ethics & Compliance',
				url: 'https://about.deere.com/en-us/explore-john-deere/ethics-compliance/',
			},
		],
	},
];

const simpleF = [
	{ link: 'https://www.deere.africa/en/equipment/', title: 'Site Map' },
	{
		link: 'https://www.deere.africa/en/privacy-and-data/',
		title: 'Privacy and Data',
	},
	{
		link: 'https://www.deere.africa/en/privacy-and-data/cookie-statement/',
		title: 'Cookie Statement',
	},
	{
		link: 'https://www.deere.africa/en/privacy-and-data/terms/',
		title: 'Terms of Use',
	},
	{
		link: 'https://www.deere.africa/en/our-company/contact-us/',
		title: 'Contact Us',
	},
];
