'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { PhoneNumberInput } from '@/components/phone-number-input';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
	MessageFormInput,
	MessageFormSchema,
} from '@/lib/validators/auth';
import { useFormState } from 'react-dom';
import { toast } from 'sonner';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function MessageForm({
	className,
	...props
}: UserAuthFormProps) {
	const form = useForm<MessageFormInput>({
		resolver: zodResolver(MessageFormSchema),
		defaultValues: {
			fullName: '',
			email: '',
			phone: '',
			town: '',
			message: '',
			countryCode: 'NG',
		},
	});
  const [loading, setLoading] = React.useState(false);
  
	const [state, dispatch] = useFormState(, undefined);

	async function handleSubmit(data: MessageFormInput) {
		setLoading(true);
		dispatch(data);
	}
	React.useEffect(() => {
    if (state?.formError) {
      toast.error(state.formError)
		}
		setLoading(false);
	}, [state?.formError, state?.fieldError]);
	return (
		<>
			<Link
				href="/auth/login"
				className={cn(
					buttonVariants({ variant: 'ghost' }),
					'absolute right-4 top-4 md:right-8 md:top-8'
				)}>
				Login
			</Link>
			<div className={cn('grid gap-6', className)} {...props}>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(handleSubmit)}>
						<div className="grid gap-4">
							<div className="grid grid-cols-2 gap-4">
								<FormField
									control={form.control}
									name="firstName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>First name</FormLabel>
											<FormControl>
												<Input placeholder="Your first name" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="lastName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Last name</FormLabel>
											<FormControl>
												<Input placeholder="Your last name" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<FormField
								control={form.control}
								name="businessName"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Business Name</FormLabel>
										<FormControl>
											<Input
												type="text"
												placeholder="Your business name"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												type="email"
												placeholder="Your email address"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="phone"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Phone Number</FormLabel>
										<FormControl>
											<PhoneNumberInput
												placeholder="Your phone number"
												{...field}
												countryCodeValue={form.getValues('countryCode')}
												onCountryCodeChange={(countryCode, countryName) => {
													form.setValue('countryCode', countryCode);
													form.setValue('country', countryName);
												}}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input
												type="password"
												placeholder="Password (min 8 characters)"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button disabled={loading} className="mt-4" type="submit">
								{loading && (
									<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
								)}
								Continue
							</Button>
						</div>
					</form>
				</Form>
			</div>
			<p className="px-8 text-center text-sm text-muted-foreground">
				By clicking continue, you agree to our{' '}
				<Link
					href="/terms"
					className="underline underline-offset-4 hover:text-primary">
					Terms of Service
				</Link>{' '}
				and{' '}
				<Link
					href="/privacy"
					className="underline underline-offset-4 hover:text-primary">
					Privacy Policy
				</Link>
				.
			</p>
		</>
	);
}
