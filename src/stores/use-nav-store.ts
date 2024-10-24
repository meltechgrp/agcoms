import { getProNavData } from '@/lib/actions';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Basic {
	name: string;
	slug: string;
	link?: string;
}
export type ProCats = {
	name: string;
	slug: string;
	subcategories: {
		name: string;
		slug: string;
		products: {
			id: string;
			name: string;
		}[];
	}[];
};
export type State = {
	pages: Basic[];
	product: ProCats[];
};
type Actions = {
	getProductData: () => Promise<void>;
};
const initialState: State = {
	pages: [
		{ name: 'Equipments', slug: 'equipments' },
		{ name: 'Parts & Services', slug: 'parts' },
		{ name: 'Offers and Discount', slug: 'offers' },
		{ name: 'Request for Quotation', slug: 'requests' },
		{ name: 'About', slug: 'about' },
	],
	product: [],
};
type StateAndActions = State & Actions;
const useNavStore = create<StateAndActions>()(
	persist(
		(set, get) => ({
			...initialState,
			getProductData: async () => {
				try {
					const { product } = get();
					if (product.length > 0) return;
					const res = await getProNavData();
					set({
						product: res,
					});
				} catch (error) {
					console.error('Error fetching blogs: ', error);
				}
			},
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
