import { DashboardIcon } from '@radix-ui/react-icons';
import {
	Package,
	MessageCircleIcon,
	SettingsIcon,
	GitPullRequest,
} from 'lucide-react';

export const AppRoutes = [
	{
		path: '/admin/dashboard',
		name: 'Dashboard',
		icon: DashboardIcon,
		section: 'home',
		note: 'Can view platform statistics',
		hasAction: false,
	},
	{
		path: '/admin/blogs',
		name: 'Publications',
		icon: MessageCircleIcon,
		section: 'home',
		note: 'Can add, edit and delete publications',
		hasAction: true,
	},
	{
		path: '/admin/equipment',
		name: 'Equipment',
		icon: Package,
		section: 'home',
		note: 'Can add, edit and delete equipment',
		hasAction: true,
	},
	{
		path: '/admin/requests',
		name: 'Quotation Requests',
		icon: GitPullRequest,
		section: 'home',
		note: 'Can view, edit and delete requests',
		hasAction: true,
	},
	{
		path: '/admin/settings',
		name: 'Settings',
		icon: SettingsIcon,
		section: 'settings',
		note: 'Can edit admin settings',
		hasAction: true,
	},
];

export function getSectionRoutes(section: string) {
	return AppRoutes.filter((route) => route.section === section);
}
