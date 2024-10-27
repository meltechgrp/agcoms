'use client';

import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
import { ResetPasswordInput, resetPasswordSchema } from '@/lib/validators/auth';
import { toast } from 'sonner';
import { Loader } from 'lucide-react';

export function ResetPassword({ token }: { token: string }) {
	const form = useForm<ResetPasswordInput>({
		resolver: zodResolver(resetPasswordSchema),
		defaultValues: {
			password: '',
			token: token,
		},
	});
	const [loading, setLoading] = useState(false);
	// const [state, formAction] = useFormState(resetPassword, null);
	async function handleSubmit(data: ResetPasswordInput) {
		setLoading(true);
		// formAction(data);
	}
	// useEffect(() => {
	// 	if (state?.error) {
	// 		toast.error(state.error);
	// 	}
	// }, [state?.error]);

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleSubmit)}>
				<div className="grid gap-4">
					<FormField
						control={form.control}
						name="token"
						render={({ field }) => (
							<FormItem hidden>
								<FormControl>
									<Input type="text" placeholder="token" {...field} />
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
								<FormLabel>New password</FormLabel>
								<FormControl>
									<Input
										type="password"
										placeholder="Your password"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className="grid mt-6">
					<Button disabled={loading} className="mt-4" type="submit">
						{loading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
						Reset password
					</Button>
				</div>
			</form>
		</Form>
	);
}
