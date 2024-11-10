import { Metadata } from 'next';

import AuthLoginForm from '../components/auth-login-form';
import { validateRequest } from '@/lib/lucia/validate-request';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Agcoms - Login',
	description: 'Login to your account to continue.',
};

export default async function LoginPage() {
	const { session, user } = await validateRequest();
	if (session?.userId) {
		redirect('/admin/dashboard');
	}
	return (
		<div className="mx-auto flex px-4 w-full flex-col justify-center space-y-6 md:w-[350px]">
			<div className="flex flex-col space-y-2 text-center">
				<h1 className="text-2xl font-semibold tracking-tight">Login</h1>
				<p className="text-sm text-muted-foreground">
					Enter your email and password to continue.
				</p>
			</div>
			<AuthLoginForm />
		</div>
	);
}
