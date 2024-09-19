import { MapPin, Menu, User2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import SearchForm from './search';
import FeaturedProducts from './featured-product';
import NavMenu from './nav-menu';

export default function Header() {
	return (
		<div className="grid">
			<div className="flex h-12 sm:h-[4.5rem] items-center gap-4 py-0 px-4 md:px-6 sm:border-b bg-background">
				<h2 className="text-lg sm:text-2xl font-bold">Agcoms</h2>
				<div className="ml-auto flex space-x-4 flex-1 justify-end sm:flex-initial items-center h-full">
					<SearchForm containerClassName="hidden sm:block" />
					<Button className=" p-0 sm:px-4 hover:bg-gray-100 bg-transparent border-none focus-visible:ring-0 focus-visible:ring-transparent text-black">
						<Link
							href={'#'}
							className="flex space-x-2 items-center text-sm text-gray-600">
							<MapPin />
							<span className="hidden sm:flex">Locate a Dealer</span>
						</Link>
					</Button>
					<div className="hidden sm:flex h-[60%] w-px bg-gray-300" />
					<Button className=" p-0 sm:px-4 hover:bg-gray-100 bg-transparent border-none focus-visible:ring-0 focus-visible:ring-transparent text-black">
						<Link
							href={'#'}
							className="flex space-x-2 items-center text-sm text-gray-600">
							<User2 />
							<span className="hidden sm:flex">Sign in</span>
						</Link>
					</Button>

					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="outline"
								size="icon"
								className="shrink-0 md:hidden border-0">
								<Menu className="h-4 w-4" />
								<span className="sr-only">Toggle sidebar menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right">
							<nav className="grid gap-6 text-lg font-medium">
								<Link
									href="#"
									className="flex items-center gap-2 text-lg font-semibold">
									<span className="sr-only">Acme Inc</span>
								</Link>
								<Link
									href="#"
									className="text-muted-foreground hover:text-foreground">
									Dashboard
								</Link>
								<Link
									href="#"
									className="text-muted-foreground hover:text-foreground">
									Orders
								</Link>
								<Link
									href="#"
									className="text-muted-foreground hover:text-foreground">
									Products
								</Link>
								<Link
									href="#"
									className="text-muted-foreground hover:text-foreground">
									Customers
								</Link>
								<Link href="#" className="hover:text-foreground">
									Settings
								</Link>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
			<div className="bg-gray-300 px-6 py-2 block sm:hidden">
				<SearchForm className="bg-white text-black border border-black flex-row-reverse" />
			</div>
			<NavMenu className="hidden sm:flex h-10 items-center gap-4 border-b bg-background px-4 md:px-6" />
			<FeaturedProducts />
		</div>
	);
}
