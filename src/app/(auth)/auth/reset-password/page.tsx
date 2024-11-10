import { SendResetEmail } from '../components/send-reset-email';

export const metadata = {
	title: 'Forgot Password',
	description: 'Forgot Password Page',
};

export default async function ForgotPasswordPage() {
	return (
		<div className="mx-auto flex w-full flex-col justify-center space-y-6 lg:w-[350px]">
			<div className="flex flex-col space-y-2 text-center">
				<h1 className="text-2xl font-semibold tracking-tight">
					Forgot password?
				</h1>
				<p className="text-sm text-muted-foreground">
					Password reset link will be sent to your email.
				</p>
			</div>

			<SendResetEmail />
		</div>
	);
}
