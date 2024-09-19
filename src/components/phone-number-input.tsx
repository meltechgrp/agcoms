import * as React from 'react';

import { cn } from '@/lib/utils';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { ChevronsUpDown, Check } from 'lucide-react';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command';
import countryCodes from 'country-codes-list';
import { Button } from '@/components/ui/button';

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	countryCodeValue?: string;
	onCountryCodeChange?: (countryCode: string, countryName: string) => void;
}
function composeLabel(v: countryCodes.CountryData) {
	return `${v['countryNameEn']} +${v['countryCallingCode']}`;
}

function findCountryByCode(code: string) {
	return countryCodes.all().find((country) => country['countryCode'] === code);
}

const PhoneNumberInput = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{ className, type, countryCodeValue = 'NG', onCountryCodeChange, ...props },
		ref
	) => {
		const [open, setOpen] = React.useState(false);

		return (
			<Popover open={open} onOpenChange={setOpen}>
				<div
					className={cn(
						'flex h-10 items-center w-full rounded-md border border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
						className
					)}>
					<PopoverTrigger asChild>
						<Button
							variant="ghost"
							role="combobox"
							aria-expanded={open}
							className="justify-between p-0 border-none hover:bg-transparent px-3 h-full outline-none focus-visible:ring-transparent">
							+{findCountryByCode(countryCodeValue)?.countryCallingCode}
							<ChevronsUpDown className="ml-1 h-4 w-4 shrink-0 opacity-50" />
						</Button>
					</PopoverTrigger>
					<div className="flex-1 flex h-full">
						<input
							type={type}
							ref={ref}
							{...props}
							placeholder="Phone number"
							className="h-full w-full py-2 pr-3  text-sm outline-none"
						/>
					</div>
				</div>
				<PopoverContent className="p-0" align="start">
					<Command>
						<CommandInput placeholder="Search..." />
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandList>
							<CommandGroup>
								{countryCodes.all().map((country) => {
									const label = composeLabel(country);
									return (
										<CommandItem
											key={label}
											value={label}
											onSelect={(currentValue) => {
												const dialingCode = currentValue.split(' +')[1];
												const country = countryCodes
													.all()
													.find(
														(country) =>
															country['countryCallingCode'] === dialingCode
													);
												if (country) {
													onCountryCodeChange?.(
														country['countryCode'],
														country['countryNameEn']
													);
													setOpen(false);
												}
											}}>
											<Check
												className={cn(
													'mr-2 h-4 w-4',
													countryCodeValue === country['countryCode']
														? 'opacity-100'
														: 'opacity-0'
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
		);
	}
);
PhoneNumberInput.displayName = 'PhoneNumberInput';

export { PhoneNumberInput };
