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
		{ name: 'Equipments', slug: 'equipments', link: '/equipments' },
		{
			name: 'Parts & Services',
			slug: 'parts',
			link: 'https://www.deere.africa/en/parts-service/parts/',
		},
		{
			name: 'Offers and Discount',
			slug: 'offers',
			link: 'https://www.deere.africa/en/finance/financing/current-offers/',
		},
		{ name: 'Request for Quotation', slug: 'requests', link: '/requests' },
		{ name: 'About', slug: 'about', link: '/about' },
	],
	product: [
		{
			name: 'Agriculture',
			slug: 'agriculture',
			link: '/equipments/agriculture',
		},
		{
			name: 'Lawn & Garden',
			slug: 'lawn-garden',
			link: '/equipments/lawn-garden',
		},
		{
			name: 'Construction',
			slug: 'construction',
			link: '/equipments/construction',
		},
		{
			name: 'Golf & Sports Turf',
			slug: 'golf-sports-turf',
			link: '/equipments/golf-sports-turf',
		},
		{
			name: 'Forestry',
			slug: 'forestry',
			link: '/equipments/forestry',
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
