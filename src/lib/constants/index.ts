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
								link: 'https://www.deere.africa/en/tractors/3-family-compact-utility-tractors/3038e-compact-utility-tractor/',
							},
							{
								title: '5 Series (30-90 HP)',
								link: 'https://www.deere.africa/en/tractors/5-series-tractors/',
							},
							{
								title: '6 Series (95-250 HP)',
								link: 'https://www.deere.africa/en/tractors/6-series-tractors/',
							},
							{
								title: '7 Series (200-230 HP)',
								link: 'https://www.deere.africa/en/tractors/row-crop-tractors/7-family-row-crop-tractors/7j-series-tractors/',
							},
							{
								title: 'Front end loaders',
								link: 'https://www.deere.africa/en/front-end-loaders-tractors/',
							},
						],
					},
					{
						title: 'WHEEL AND TRACK TRACTORS',
						cats: [
							{
								title: '8R Series (230-410 HP)',
								link: 'https://www.deere.africa/en/tractors/8-series-tractor/',
							},
							{
								title: '9R Series (470-570 HP)',
								link: 'https://www.deere.africa/en/tractors/9-series-tractors/',
							},
						],
					},
					{
						title: 'SCRAPER TRACTORS',
						cats: [
							{
								title: '9R Series (520-570 HP)',
								link: 'https://www.deere.africa/en/tractors/scraper-special-tractors/',
							},
						],
					},
					{
						title: 'FARM EQUIPMENTS & TECHNOLOGY PRODUCTS',
						cats: [
							{
								title: 'Precision Ag Technology',
								link: 'https://www.deere.africa/en/technology-products/precision-ag/',
							},
							{
								title: 'Tillage',
								link: 'https://www.deere.africa/en/tillage/',
							},
							{
								title: 'Planting Equipments',
								link: 'https://www.deere.africa/en/planting-equipment/',
							},
							{
								title: 'Seeding Equipments',
								link: 'https://www.deere.africa/en/seeding-equipment/',
							},
							{
								title: 'Application Equipments',
								link: 'https://www.deere.africa/en/application-equipment/',
							},
							{
								title: 'Combines',
								link: 'https://www.deere.africa/en/combine-harvesters/',
							},
							{
								title: 'Hay Forage',
								link: 'https://www.deere.africa/en/hay-forage/',
							},
							{
								title: 'Scrapers',
								link: 'https://www.deere.africa/en/scraper-systems/',
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
								link: 'https://www.deere.africa/en/mowers/lawn-tractors/',
							},
							{
								title: 'Residential ZTrak™ Zero-Turn Mowers',
								link: 'https://www.deere.africa/en/mowers/residential-ztrak-zero-turn-mowers/',
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
								link: 'https://www.deere.africa/en/skid-steers/',
							},
							{
								title: 'Backhoes',
								link: 'https://www.deere.africa/en/backhoes/',
							},
						],
					},
					{
						cats: [
							{
								title: 'Wheel Loaders',
								link: 'https://www.deere.africa/en/wheel-loaders/',
							},
							{
								title: 'Dozers',
								link: 'https://www.deere.africa/en/dozers/',
							},
						],
					},
					{
						cats: [
							{
								title: 'Motor Graders',
								link: 'https://www.deere.africa/en/motor-graders/',
							},
							{
								title: 'Excavators',
								link: 'https://www.deere.africa/en/excavators/',
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
				link: '/financing',
				categories: [
					{
						cats: [
							{
								title: 'Leap Forward',
								link: 'https://www.deere.africa/en/finance/financing/leapforward/',
							},
							{
								title: 'Commercial Farming',
								link: 'https://www.deere.africa/en/finance/financing/commercial-farming/',
							},
							{
								title: 'Emerging Farming',
								link: 'https://www.deere.africa/en/finance/financing/emerging-farming/',
							},
						],
					},
				],
			},
		],
	},
	{
		title: 'Parts & Services',
		sub: [
			{
				title: 'Parts',
				link: 'https://www.deere.africa/en/parts-service/parts/',
			},
			{
				title: 'Services & Support',
				link: 'https://www.deere.africa/en/parts-service/safety/',
			},
			{
				title: 'Shop Parts',
				link: 'https://www.deere.africa/en/stellarsupport/',
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
		link: 'https://www.deere.africa/en/our-company/contact-us/',
		icon: MapPin,
	},
	{
		title: 'Offers & Discount',
		link: 'https://www.deere.africa/en/finance/financing/current-offers/',
		icon: Tag,
	},
	{
		title: 'Parts',
		link: 'https://www.deere.africa/en/parts-service/parts/',
		icon: Shield,
	},
	{
		title: 'Parts Online',
		link: 'https://parts.deere.africa/index.php?route=common/home',
		icon: ShoppingCart,
	},
	{
		title: 'Technology',
		link: 'https://www.deere.africa/en/technology-products/precision-ag/',
		icon: MailOpen,
	},
	{
		title: 'News Released',
		link: 'https://www.deere.africa/en/our-company/news-media/',
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

export const APP_TITLE = 'Agcoms' as const;
