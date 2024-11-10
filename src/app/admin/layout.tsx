import type { Metadata } from 'next';
import { MainNav } from './_components/main-nav';
import { redirect } from 'next/navigation';
import Footer from './_components/footer';
import Header from './_components/header';
import { validateRequest } from '@/lib/lucia/validate-request';

export const metadata: Metadata = {
	title: 'AGCOMS Admin',
};

export default async function RootLayout(props: { children: React.ReactNode }) {
	const { user, session } = await validateRequest();
	if (!session?.userId) {
		return redirect('/auth/login');
	}
	return (
		<div className="grid min-h-screen w-full lg:grid-cols-[220px_1fr] lg:grid-cols-[250px_1fr] gap-3  overflow-x-hidden">
			<MainNav {...user} className="hidden lg:block" />
			<div className="flex flex-col relative">
				<Header {...user} />
				<main className="flex-1 w-full bg-muted/40 px-2.5 lg:px-2 py-2">
					<div className="p-2 lg:p-8  pt-0 lg:pt-6">{props.children}</div>
					<Footer />
				</main>
			</div>
		</div>
	);
}
