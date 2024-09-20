import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

export default function Footer() {
	return (
		<div className=" sm:px-16 py-16 mt-6 bg-[#e5e5e5] space-y-8">
			<div className="grid sm:grid-cols-3 gap-8 border-b border-gray-300 pb-10">
				{footerData.map((fl) => (
					<div key={fl?.title} className="hidden sm:block space-y-4">
						<h2 className="text-md font-semibold">{fl.title}</h2>
						<div className="grid gap-2">
							{fl.links?.map((link) => (
								<Link
									href={link.url}
									key={link.title}
									className="text-sm text-gray-600 font-normal">
									{link.title}
								</Link>
							))}
						</div>
					</div>
				))}
			</div>
			<Accordion type="single" collapsible className=" sm:hidden w-full">
				{footerData.map((fl, i) => (
					<AccordionItem key={fl.title + i} value={`item-${i}`}>
						<AccordionTrigger
							isPlus={true}
							className="text-md font-semibold gap-2 border-b hover:no-underline px-4 border-gray-400">
							<span className="flex-1 flex justify-start">{fl.title}</span>
						</AccordionTrigger>
						<AccordionContent className="grid gap-2 px-8 py-4">
							{fl.links?.map((link) => (
								<Link
									href={link.url}
									key={link.title}
									className="text-sm text-gray-700 font-normal">
									{link.title}
								</Link>
							))}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
			<div className="space-y-10 sm:space-y-6 px-4">
				<div className=" w-fit mx-auto">
					<Link href={'#'}>
						<Button
							variant={'outline'}
							className=" h-12 px-8 bg-transparent border-2 border-gray-300">
							Africa & the Middle East
						</Button>
					</Link>
				</div>
				<div className="flex justify-center w-full flex-wrap sm:w-[45%] mx-auto gap-4">
					{simpleF.map((s) => (
						<Link
							href={s.link}
							key={s.title}
							className="text-xs font-normal transition-all duration-700  hover:underline text-gray-500">
							{s.title}
						</Link>
					))}
				</div>
				<div className="flex justify-center">
					<span className="text-xs font-normal text-gray-500">
						Copyright © 2024 Agcoms Company. All Rights Reserved.
					</span>
				</div>
				<div className="flex justify-center space-x-4">
					{['Facebook', 'Instagram', 'Linkedin', 'Twitter', 'Youtube'].map(
						(s) => (
							<Link
								target="_blank"
								href={`https://www.${s.toLowerCase()}.com`}
								key={s}
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
			{ title: 'Tractors', url: '#' },
			{ title: 'Contact a Dealer', url: '#' },
			{ title: 'Shop Parts', url: '#' },
			{ title: 'Free Tractor Operator Training Ts&Cs', url: '#' },
			{ title: 'Competition Ts&Cs', url: '#' },
			{ title: "Tell us you're a John Deere Fan", url: '#' },
			{ title: 'John Deere Financial', url: '#' },
			{ title: "Free Service Parts T's and C's", url: '#' },
		],
	},
	{
		title: 'Company Information',
		links: [
			{ title: 'PAIA MANUAL', url: '#' },
			{ title: 'About Our Company', url: '#' },
			{ title: 'History', url: '#' },
			{ title: 'Careers', url: '#' },
			{ title: 'Competition Ts&Cs', url: '#' },
			{ title: 'News and Media', url: '#' },
			{ title: 'Sustainability', url: '#' },
			{ title: 'Terms and Conditions', url: '#' },
			{ title: 'Ethics & Compliance', url: '#' },
		],
	},
];

const simpleF = [
	{ link: '#', title: 'Site Map' },
	{ link: '#', title: 'Privacy and Data' },
	{ link: '#', title: 'Cookie Statement' },
	{ link: '#', title: 'Terms of Use' },
	{ link: '#', title: 'Contact Us' },
	{ link: '#', title: 'Cookie Preferences' },
];
