import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { cn, uniqueId } from '@/lib/utils';

export default function Footer() {
	return (
		<div className=" sm:px-12 pt-7 sm:pt-16 py-16 mt-6 bg-[#e5e5e5] space-y-8">
			<div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-300 pb-10">
				{footerData.map((fl) => (
					<div key={fl?.title} className=" space-y-4">
						<h2 className="text-md font-bold">{fl.title}</h2>
						<div className="grid gap-2">
							{fl.links?.map((link) => (
								<Link
									href={link.url}
									key={uniqueId()}
									className="text-sm w-fit group relative text-gray-600 font-bold">
									<div
										className={cn(
											'absolute bottom-0 rounded left-0 h-[2px] w-0 bg-tertiary transition-all delay-75 duration-1000 ease-out group-hover:w-full group-hover:translate-x-0'
										)}></div>
									<div className="relative z-10 flex items-center gap-2 leading-12">
										{link.title}
									</div>
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
			<div className="space-y-10 px-4">
				<div className="flex justify-center w-full flex-wrap sm:w-[45%] mx-auto gap-4 sm:gap-6">
					{simpleF.map((s) => (
						<Link
							href={s.link}
							key={uniqueId()}
							className="text-xs font-bold group relative text-gray-700">
							<div
								className={cn(
									'absolute bottom-0 rounded left-0 h-[2px] w-0 bg-tertiary transition-all delay-75 duration-1000 ease-out group-hover:w-full group-hover:translate-x-0'
								)}></div>
							<div className="relative z-10 flex items-center gap-2 leading-12">
								{s.title}
							</div>
						</Link>
					))}
				</div>
				<div className="flex flex-col-reverse sm:flex-row justify-between gap-3">
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
		</div>
	);
}

const footerData = [
	{
		title: 'Equipment',
		links: [
			{ title: 'Agricultural Equipment', url: '/equipment/agriculture' },
			{
				title: 'Construction Equipment',
				url: '/equipment/construction',
			},
			{
				title: 'Turf Management Equipment',
				url: '/equipment/turf-management',
			},
			{
				title: 'Forestry Equipment',
				url: '/equipment/forestry',
			},
			{
				title: "Tell us you're a Agcoms Fan",
				url: '/contact',
			},
		],
	},
	{
		title: 'Parts and Services',
		links: [
			{
				title: 'Genuine Parts',
				url: '#',
			},
			{
				title: 'Expert Service',
				url: '#',
			},
			{
				title: 'Online Support and Assistance',
				url: '#',
			},
			{
				title: 'Order Online',
				url: '#',
			},
		],
	},
	{
		title: 'Company Information',
		links: [
			{
				title: 'Corporate office',
				url: '/contact',
			},
			{
				title: 'Branch Locations',
				url: '/contact',
			},
			{
				title: 'Customer Support',
				url: '/contact',
			},
			{
				title: 'Additional Contacts',
				url: '/contact',
			},
			{
				title: 'Social Media ',
				url: '/contact',
			},
		],
	},
	{
		title: 'About Us',
		links: [
			{
				title: 'Our Mission',
				url: '/about',
			},
			{
				title: 'Our Values',
				url: '/about',
			},
			{
				title: 'Global Reach with Local Support',
				url: '/about',
			},
			{
				title: 'Our Commitment to Excellence',
				url: '/about',
			},
		],
	},
];

const simpleF = [
	{
		link: '#',
		title: 'Privacy Policy',
	},
	{
		link: '#',
		title: 'Terms and Conditions',
	},
	{
		link: '#',
		title: 'Copy right information',
	},
];
