import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Basic {
	name: string;
	slug: string;
	link: string;
}
export type ProCats = {
	name: string;
	slug: string;
	link: string;
};
export type State = {
	pages: Basic[];
	product: ProCats[];
};
const initialState: State = {
	pages: [
		{ name: 'Equipment', slug: 'equipment', link: '/equipment' },
		{
			name: 'Parts & Services',
			slug: 'parts',
			link: '/parts',
		},
		{ name: 'Request for Quotation', slug: 'requests', link: '/requests' },
		{ name: 'About Us', slug: 'about', link: '/about' },
		{ name: 'Contact Us', slug: 'contact', link: '/contact' },
	],
	product: [
		{
			name: 'Agriculture',
			slug: 'agriculture',
			link: '/equipment/agriculture',
		},
		{
			name: 'Construction',
			slug: 'construction',
			link: '/equipment/construction',
		},
		// {
		// 	name: 'Lawn & Garden',
		// 	slug: 'lawn-garden',
		// 	link: '/equipment/lawn-garden',
		// },
		{
			name: 'Golf & Sports Turf',
			slug: 'golf-sports-turf',
			link: '/equipment/golf-sports-turf',
		},
		{
			name: 'Forestry',
			slug: 'forestry',
			link: '/equipment/forestry',
		},
	],
};
type StateAndActions = State;
const useNavStore = create<StateAndActions>()(
	persist(
		(set, get) => ({
			...initialState,
		}),
		{
			name: 'agcom-storage',
			partialize: (state) => ({
				// products: state.product,
			}),
		}
	)
);

export default useNavStore;
