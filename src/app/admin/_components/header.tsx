'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MainNav } from './main-nav';
import { useState } from 'react';

interface Props {
	email: string;
	firstName: string | null;
	lastName: string | null;
}

function Header(props: Props) {
	const [open, setOpen] = useState(false);
	return (
		<header className="md:hidden flex min-h-16 py-4 items-center w-full gap-4 border-b bg-muted/40 px-4 md:h-[60px] md:px-6">
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="shrink-0 md:hidden">
						<Menu className="h-5 w-5" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="flex flex-col w-fit px-2">
					<MainNav {...props} setOpen={setOpen} className="block md:hidden" />
				</SheetContent>
			</Sheet>
		</header>
	);
}

export default Header;
