import { VerifyOTPForm } from '@/app/(auth)/auth/components/otp-verify-form';

export default function VerifyPage() {
	return (
		<div className="mx-auto flex w-full flex-col justify-center space-y-6 md:w-[350px]">
			<div className="flex flex-col space-y-2 text-center">
				<h1 className="text-2xl font-semibold tracking-tight">
					One-Time Password
				</h1>
				<p className="text-sm text-muted-foreground">
					Please enter the 6-digit code sent to your email.
				</p>
			</div>
			<VerifyOTPForm />
		</div>
	);
}
