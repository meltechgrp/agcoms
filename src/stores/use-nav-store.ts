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
type StateWithoutProduct = Omit<State, 'product'>;
export type Key = keyof StateWithoutProduct;
export const keys = ['financing', 'contact', 'parts'];
export type State = {
	pages: Basic[];
	product: ProCats[];
	financing: Basic[];
	contact: Basic[];
	parts: Basic[];
};
type Actions = {
	getProductData: () => Promise<void>;
};
const initialState: State = {
	pages: [
		{ name: 'Products', slug: 'product' },
		{ name: 'Finance', slug: 'financing' },
		{ name: 'Parts & Services', slug: 'parts' },
		{ name: 'Contact', slug: 'contact' },
	],
	product: [],
	contact: [{ name: 'Contact us', slug: 'contact' }],
	parts: [
		{
			name: 'Parts',
			slug: 'parts',
			link: 'https://www.deere.africa/en/parts-service/parts/',
		},
		{
			name: 'Services & Support',
			slug: 'services-support',
			link: 'https://www.deere.africa/en/stellarsupport/',
		},
		{
			name: 'Shop Parts',
			slug: 'shop-parts',
			link: 'https://www.deere.africa/en/stellarsupport/help/',
		},
	],
	financing: [
		{
			name: 'Leap Forward',
			slug: 'leap-forward',
			link: 'https://www.deere.africa/en/finance/financing/leapforward/',
		},
		{
			name: 'Commercial Farming',
			slug: 'commercial-farming',
			link: 'https://www.deere.africa/en/finance/financing/commercial-farming/',
		},
		{
			name: 'Emerging Farming',
			slug: 'emerging-farming',
			link: 'https://www.deere.africa/en/finance/financing/emerging-farming/',
		},
	],
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
				// pages: state.pages,
			}),
		}
	)
);

export default useNavStore;
