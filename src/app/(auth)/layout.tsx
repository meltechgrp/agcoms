import logo from '@/assets/AGCOMS-logo-main.png';
import Image from 'next/image';

export default async function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<div className="container relative min-h-screen flex items-center lg:justify-center lg:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
				<div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
					<div className="absolute inset-0 bg-primary" />
					<div className="relative z-20 flex items-center text-lg font-medium">
						<Image src={logo} alt="Agcoms" className="object-cover w-56" />
					</div>
					<div className="relative z-20 mt-auto">
						<blockquote className="space-y-2">
							<p className="text-lg">“Power Your Progress With AGCOMS.”</p>
							<footer className="text-sm">
								<cite className="not-italic"></cite>
							</footer>
						</blockquote>
					</div>
				</div>
				<div className="lg:p-8 w-full">{children}</div>
			</div>
		</>
	);
}
