'use client';

import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Paths } from '@/lib/constants';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Loader } from 'lucide-react';

const FormSchema = z.object({
	email: z.string().email('Please enter a valid email.'),
});

export function SendResetEmail() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: '',
		},
	});
	const [pending, setPending] = useState(false);
	// const [state, formAction] = useFormState(sendPasswordResetLink, null);
	const router = useRouter();
	async function handleSubmit(data: z.infer<typeof FormSchema>) {
		setPending(true);
		// formAction(data.email);
	}
	// useEffect(() => {
	// 	if (state?.success) {
	// 		toast.success('A password reset link has been sent to your email.');
	// 		router.replace(Paths.Login);
	// 	}
	// 	if (state?.error) {
	// 		toast.error(state?.error || 'An error occurred while resetting');
	// 	}
	// 	setPending(false);
	// }, [state?.error, state?.success]);

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleSubmit)}>
				<div className="grid gap-4">
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

					<div className="mt-6 flex flex-col md:flex-row-reverse gap-4">
						<Button disabled={pending} className="w-full" type="submit">
							{pending && <Loader className="mr-2 h-4 w-4 animate-spin" />}
							Submit
						</Button>
						<Button variant="outline" className="w-full bg-card">
							<Link href="/auth/login">Cancel</Link>
						</Button>
					</div>
				</div>
			</form>
		</Form>
	);
}
