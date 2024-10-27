'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form';
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from '@/components/ui/input-otp';
import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Paths } from '@/lib/constants';
import { Loader } from 'lucide-react';

const FormSchema = z.object({
	pin: z.string().min(6, {
		message: 'Your one-time password must be 6 characters.',
	}),
});

export function VerifyOTPForm() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			pin: '',
		},
	});
	// const [verifyEmailState, verifyEmailAction] = useFormState(verifyEmail, null);
	// const [resendState, resendAction] = useFormState(
	// 	resendVerificationEmail,
	// 	null
	// );
	const { pending } = useFormStatus();
	const router = useRouter();

	function onSubmit(data: z.infer<typeof FormSchema>) {
		// verifyEmailAction(data.pin);
	}
	// useEffect(() => {
	// 	if (resendState?.success) {
	// 		toast.success('Email sent!.');
	// 		router.replace(Paths.Dashboard);
	// 	}
	// 	if (resendState?.error) {
	// 		toast.error('An error occuried!.');
	// 	}

	// 	if (verifyEmailState?.error) {
	// 		toast.error('An error occuried!.');
	// 	}
	// }, [resendState, verifyEmailState]);
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-8">
				<div className="flex justify-center">
					<FormField
						control={form.control}
						name="pin"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<InputOTP maxLength={6} {...field}>
										<InputOTPGroup>
											<InputOTPSlot index={0} />
											<InputOTPSlot index={1} />
											<InputOTPSlot index={2} />
											<InputOTPSlot index={3} />
											<InputOTPSlot index={4} />
											<InputOTPSlot index={5} />
										</InputOTPGroup>
									</InputOTP>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<Button disabled={pending} className="mt-4" type="submit">
					{pending && <Loader className="mr-2 h-4 w-4 animate-spin" />}
					Submit
				</Button>
			</form>
		</Form>
	);
}
