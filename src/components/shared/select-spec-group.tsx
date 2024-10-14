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
import { getSpecGroups } from '@/lib/actions';

interface SpecsGroupSelectProps {
	value: string;
	onChange: (value: string) => void;
}

interface SpecsGroup {
	name: string;
}

const SpecsGroupSelect = ({ value, onChange }: SpecsGroupSelectProps) => {
	const [specGroup, setSpecGroups] = useState<SpecsGroup[]>([]);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const fetchCountries = async () => {
			const specGroup = await getSpecGroups();
			setSpecGroups(specGroup);
		};
		fetchCountries();
	}, []);
	const category = useMemo(() => {
		return specGroup && specGroup.find((item) => item.name == value)?.name;
	}, [value, specGroup]);
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
						{category ? category : 'Select a spec group...'}
						<ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="p-0" align="start">
					<Command>
						<CommandInput placeholder="Search..." />
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandList>
							<CommandGroup>
								{specGroup.map((item) => {
									const label = item.name;
									return (
										<CommandItem
											key={item.name}
											value={label}
											onSelect={() => {
												onChange(item.name);
												setOpen(false);
											}}>
											<Check
												className={cn(
													'mr-2 h-4 w-4',
													value === item.name ? 'opacity-100' : 'opacity-0'
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

export default SpecsGroupSelect;
