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
		imageUrl?: StaticImageData;
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
			},
			{
				title: 'Lawn & Garden',
				link: '/products/lawn-garden',
				imageUrl: lawn,
			},
			{
				title: 'Construction',
				link: '/products/construction',
				imageUrl: construction,
			},
			{
				title: 'Golf & Sports Turf',
				link: '/products/golf',
				imageUrl: sport,
			},
			{
				title: 'Forestry',
				link: '/products/forestry',
				imageUrl: forestry,
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
