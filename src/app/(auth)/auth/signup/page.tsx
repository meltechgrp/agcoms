import { Metadata } from 'next';

import AuthSignupForm from '../components/auth-signup-form';
import { validateRequest } from '@/lib/lucia/validate-request';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Agcoms - Sign Up',
	description: 'Sign up to Agcoms to start adding your products.',
};

export default async function SignupPage() {
	const { session, user } = await validateRequest();
	if (session?.userId) {
		redirect('/admin/dashboard');
	}
	return (
		<div className="mx-auto flex w-full flex-col justify-center space-y-6 md:w-[350px]">
			<div className="flex flex-col space-y-2 text-center">
				<h1 className="text-2xl font-semibold tracking-tight">
					Let’s get started
				</h1>
				<p className="text-sm text-muted-foreground">
					Sign up to Agcoms to manage your products.
				</p>
			</div>
			<AuthSignupForm />
		</div>
	);
}
