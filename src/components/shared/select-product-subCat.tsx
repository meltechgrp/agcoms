'use client';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command';
import { useEffect, useMemo, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ProductSubCategorySelectProps {
	category: string;
	name: string;
	onValueChange: (name: string) => void;
}

const ProductSubCategorySelect = ({
	category,
	name,
	onValueChange,
}: ProductSubCategorySelectProps) => {
	const [categories, setProductCategories] = useState<any>([]);
	const [open, setOpen] = useState(false);

	// useEffect(() => {
	// 	const fetchCats = async () => {
	// 		const categories = [];
	// 		setProductCategories(categories);
	// 	};
	// 	fetchCats();
	// }, [category]);
	const subCategory = useMemo(() => {
		return (
			categories && categories.find((item: any) => item.name == name)?.name
		);
	}, [name, categories]);
	return (
		<div>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={open}
						aria-label="Select a model"
						className="w-full justify-between">
						{subCategory ? subCategory : 'Select a sub category...'}
						<ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="p-0" align="start">
					<Command>
						<CommandInput placeholder="Search..." />
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandList>
							<CommandGroup>
								{categories.map((item: any) => {
									const label = item.name;
									return (
										<CommandItem
											key={item.name}
											value={label}
											onSelect={() => {
												onValueChange(item.name);
												setOpen(false);
											}}>
											<Check
												className={cn(
													'mr-2 h-4 w-4',
													name === item.name ? 'opacity-100' : 'opacity-0'
												)}
											/>
											{label}
										</CommandItem>
									);
								})}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</div>
	);
};

export default ProductSubCategorySelect;
