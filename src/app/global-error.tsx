'use client';
import * as Sentry from '@sentry/nextjs';
import Error from 'next/error';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

// Error boundaries must be Client Components

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		Sentry.captureException(error);
	}, [error]);
	return (
		// global-error must include html and body tags
		<html>
			<body className="w-screen h-screen bg-[f5f4f4] text-white justify-center items-center flex-col gap-2">
				<h2 className="text-xl lg:text-3xl font-bold text-red-500">
					Something went wrong!
				</h2>
				<Button onClick={() => reset()}>Try again</Button>
			</body>
		</html>
	);
}
