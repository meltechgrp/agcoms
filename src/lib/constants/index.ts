import agri from '@/assets/images/category/agri.png';
import lawn from '@/assets/images/category/lawn.png';
import construction from '@/assets/images/category/construction.png';
import sport from '@/assets/images/category/sport.png';
import forestry from '@/assets/images/category/forestry.png';
import { StaticImageData } from 'next/image';
import {
	Download,
	LucideProps,
	MailOpen,
	MapPin,
	Shield,
	ShoppingCart,
	Tag,
} from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

interface NavMenuDataProps {
	title: string;
	sub: {
		title: string;
		link: string;
		slug?: string;
		imageUrl?: StaticImageData;
		categories?: {
			title?: string;
			cats: {
				title: string;
				link: string;
			}[];
		}[];
	}[];
}
[];
export const NavMenuData: NavMenuDataProps[] = [
	{
		title: 'Products',
		sub: [
			{
				title: 'All Products',
				link: '/products',
			},
			{
				title: 'Agriculture',
				link: '/products/agriculture',
				imageUrl: agri,
				categories: [
					{
						title: 'WHEEL TRACTORS',
						cats: [
							{
								title: 'Specialty Narrow (36 HP)',
								link: '/products/agriculture/#',
							},
							{
								title: '5 Series (30-90 HP)',
								link: '/products/agriculture/#',
							},
							{
								title: '6 Series (95-250 HP)',
								link: '/products/agriculture/#',
							},
							{
								title: '7 Series (200-230 HP)',
								link: '/products/agriculture/#',
							},
							{
								title: 'Front end loaders',
								link: '/products/agriculture/#',
							},
						],
					},
					{
						title: 'WHEEL AND TRACK TRACTORS',
						cats: [
							{
								title: '8R Series (230-410 HP)',
								link: '/products/agriculture/#',
							},
							{
								title: '9R Series (470-570 HP)',
								link: '/products/agriculture/#',
							},
						],
					},
					{
						title: 'SCRAPER TRACTORS',
						cats: [
							{
								title: '9R Series (520-570 HP)',
								link: '/products/agriculture/#',
							},
						],
					},
					{
						title: 'FARM EQUIPMENTS & TECHNOLOGY PRODUCTS',
						cats: [
							{
								title: 'Precision Ag Technology',
								link: '/products/agriculture/#',
							},
							{
								title: 'Tillage',
								link: '/products/agriculture/#',
							},
							{
								title: 'Planting Equipments',
								link: '/products/agriculture/#',
							},
							{
								title: 'Seeding Equipments',
								link: '/products/agriculture/#',
							},
							{
								title: 'Application Equipments',
								link: '/products/agriculture/#',
							},
							{
								title: 'Combines',
								link: '/products/agriculture/#',
							},
							{
								title: 'Hay Forage',
								link: '/products/agriculture/#',
							},
							{
								title: 'Scrapers',
								link: '/products/agriculture/#',
							},
						],
					},
				],
			},
			{
				title: 'Lawn & Garden',
				slug: 'lawn-garden',
				link: '/products/lawn-garden',
				imageUrl: lawn,
				categories: [
					{
						title: 'Riding Lawn Equipment',
						cats: [
							{
								title: 'Lawn Tractors',
								link: '/products/lawn-garden/#',
							},
							{
								title: 'Residential ZTrak™ Zero-Turn Mowers',
								link: '/products/lawn-garden/#',
							},
						],
					},
				],
			},
			{
				title: 'Construction',
				link: '/products/construction',
				imageUrl: construction,
				categories: [
					{
						cats: [
							{
								title: 'Skid Steers',
								link: '/products/construction/#',
							},
							{
								title: 'Backhoes',
								link: '/products/construction/#',
							},
						],
					},
					{
						cats: [
							{
								title: 'Wheel Loaders',
								link: '/products/construction/#',
							},
							{
								title: 'Dozers',
								link: '/products/construction/#',
							},
						],
					},
					{
						cats: [
							{
								title: 'Motor Graders',
								link: '/products/construction/#',
							},
							{
								title: 'Excavators',
								link: '/products/construction/#',
							},
						],
					},
					{
						cats: [
							{
								title: 'Articulated Dump Trucks',
								link: '/products/construction/#',
							},
							{
								title: 'Technology Solutions',
								link: '/products/construction/#',
							},
						],
					},
				],
			},
			{
				title: 'Commercial Mowing',
				slug: 'commercial-mowing',
				link: '/products/commercial-mowing',
				categories: [
					{
						title: 'Commercial ZTrak™ Zero Turn Mowers',
						cats: [
							{
								title: 'Z925M EFI Flex Fuel',
								link: '/products/commercial-mowing/#',
							},
							{
								title: 'Z930M EFI',
								link: '/products/commercial-mowing/#',
							},
							{
								title: 'Z997R',
								link: '/products/commercial-mowing/#',
							},
						],
					},
				],
			},
			{
				title: 'Golf & Sports Turf',
				slug: 'golf-sports-turf',
				link: '/products/golf-sports-turf',
				imageUrl: sport,
				categories: [
					{
						title: 'Golf Course Mowers',
						cats: [
							{
								title: 'Fairway Mowers',
								link: '/products/golf-sports-turf/#',
							},
							{
								title: 'Riding Green Mowers',
								link: '/products/golf-sports-turf/#',
							},
							{
								title: 'Rough, Trim and Surrounds Mowers',
								link: '/products/golf-sports-turf/#',
							},
							{
								title: 'Walk Greens Mowers',
								link: '/products/golf-sports-turf/#',
							},
						],
					},
					{
						title: 'Specialty Equipment',
						cats: [
							{
								title: 'Aeration Equipment',
								link: '/products/golf-sports-turf/#',
							},
							{
								title: 'SelectSpray™ Sprayers',
								link: '/products/golf-sports-turf/#',
							},
						],
					},
					{
						title: 'All-Purpose Equipment',
						cats: [
							{
								title: 'Commercial Mowers',
								link: '/products/golf-sports-turf/#',
							},
							{
								title: 'Gator™ Turf & Utility Vehicles',
								link: '/products/golf-sports-turf/#',
							},
							{
								title: 'Utility Tractors (22.4 – 140 Engine HP)',
								link: '/products/golf-sports-turf/#',
							},
						],
					},
				],
			},
			{
				title: 'Forestry',
				link: '/products/forestry',
				imageUrl: forestry,
				categories: [
					{
						title: 'Forestry Equipment',
						cats: [
							{
								title: 'Tracked Feller Bunchers',
								link: '/products/forestry/#',
							},
							{
								title: 'Tracked Harvesters',
								link: '/products/forestry/#',
							},
							{
								title: 'Knuckleboom loader',
								link: '/products/forestry/#',
							},
						],
					},
					{
						cats: [
							{
								title: 'Wheeled Harvesters',
								link: '/products/forestry/#',
							},
							{
								title: 'Harvester heads',
								link: '/products/forestry/#',
							},
							{
								title: 'Felling heads',
								link: '/products/forestry/#',
							},
							{
								title: 'Waratah heads',
								link: '/products/forestry/#',
							},
						],
					},
					{
						cats: [
							{
								title: 'Skidders',
								link: '/products/forestry/#',
							},
							{
								title: 'Forwarders',
								link: '/products/forestry/#',
							},
							{
								title: 'Forestry and logging technology',
								link: '/products/forestry/#',
							},
						],
					},
					{
						cats: [
							{
								title: 'TimberMatic Maps',
								link: '/products/forestry/#',
							},
							{
								title: 'TimberManager',
								link: '/products/forestry/#',
							},
							{
								title: 'Intelligent Boom Control IBC',
								link: '/products/forestry/#',
							},
							{
								title: 'Articles and stories',
								link: '/products/forestry/#',
							},
						],
					},
				],
			},
		],
	},
	{
		title: 'Finance',
		sub: [
			{
				title: 'Financing',
				link: '/finance',
			},
		],
	},
	{
		title: 'Parts & Services',
		sub: [
			{
				title: 'Parts',
				link: '/parts-services/parts',
			},
			{
				title: 'Services & Support',
				link: '/parts-services/services-support',
			},
			{
				title: 'Shop Parts',
				link: '/parts-services/shop-parts',
			},
		],
	},
	{
		title: 'Digital',
		sub: [
			{
				title: 'Digital Tools',
				link: '/digital',
			},
		],
	},
] as const;

export const midNavigationData: {
	title: string;
	link: string;
	icon: ForwardRefExoticComponent<
		Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
	>;
}[] = [
	{
		title: 'Locate a Dealer',
		link: '#',
		icon: MapPin,
	},
	{
		title: 'Offers & Discount',
		link: '#',
		icon: Tag,
	},
	{
		title: 'Parts',
		link: '#',
		icon: Shield,
	},
	{
		title: 'Parts Online',
		link: '#',
		icon: ShoppingCart,
	},
	{
		title: 'Technology',
		link: '#',
		icon: MailOpen,
	},
	{
		title: 'News Released',
		link: '#',
		icon: Download,
	},
] as const;

export enum Paths {
	Home = '/',
	Login = '/login',
	Signup = '/signup',
	Dashboard = '/dashboard',
	VerifyEmail = '/verify-email',
	ResetPassword = '/reset-password',
}

export const EMAIL_SENDER = '' as const;
export const APP_TITLE = '' as const;
