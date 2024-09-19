import { ReactNode } from 'react';
import Header from '@/components/header';

export const description = 'Agcoms layout';

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-geist-sans)]">
			<Header />
			<main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40">
				<div className="mx-auto grid w-full items-start gap-6">{children}</div>
			</main>
		</div>
	);
}
