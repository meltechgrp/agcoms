import type { Metadata } from 'next';
import { MainNav } from './_components/main-nav';
// import { validateRequest } from '@/lib/validate-user';
// import { redirect } from 'next/navigation';
import { env } from '@/env';
import Footer from './_components/footer';
import Header from './_components/header';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
	title: 'AGCOMS Admin',
};

export default async function RootLayout(props: { children: React.ReactNode }) {
	// const { userId } = await validateRequest();
	// if (!userId) redirect('/login');
	// const res = await fetch(`${base}/users/${userId}/`);
	// const data: IMember = await res.json();
	// if (!superAdmins.includes(data?.email)) return redirect('/');
	const data: any = [];
	return (
		<div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[250px_1fr] gap-3  overflow-x-hidden">
			<MainNav className="hidden md:block" />
			<div className="flex flex-col relative">
				<Header />
				<main className="flex-1 w-full bg-muted/40 px-2.5 sm:px-2 py-2">
					<div className="p-2 sm:p-8 pl-0 pt-0 sm:pt-6">{props.children}</div>
					<Footer />
				</main>
			</div>
		</div>
	);
}
