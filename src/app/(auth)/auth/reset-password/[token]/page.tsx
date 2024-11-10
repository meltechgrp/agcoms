import { ResetPassword } from '../../components/reset-password';

export const metadata = {
	title: 'Reset Password',
	description: 'Reset Password Page',
};

export default function ResetPasswordPage({
	params,
}: {
	params: { token: string };
}) {
	return (
		<div className="mx-auto flex w-full flex-col justify-center space-y-6 lg:w-[350px]">
			<div className="flex flex-col space-y-2 text-center">
				<h1 className="text-2xl font-semibold tracking-tight">
					Reset password
				</h1>
				<p className="text-sm text-muted-foreground">Enter new password.</p>
			</div>
			<ResetPassword token={params.token} />
		</div>
	);
}
