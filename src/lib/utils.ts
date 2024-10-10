import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import libphonenumber from 'google-libphonenumber';
const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();

export function formatPhoneNumber(
	phoneNumber: string,
	countryCode: string
): string {
	if (!/^\d{10,15}$/.test(phoneNumber)) return '';
	const phone = phoneUtil.parse(phoneNumber, countryCode);
	return phoneUtil.format(
		phone,
		libphonenumber.PhoneNumberFormat.INTERNATIONAL
	);
}

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function koboToNaira(kobo: number) {
	return kobo / 100;
}

export function formatToNaira(amount: number, currency: string = 'NGN') {
	const locales = {
		NGN: 'en-NG',
		USD: 'en-US',
		GBP: 'en-GB',
		EUR: 'en-EU',
	} as Record<string, string>;
	currency = currency.toUpperCase();
	return Intl.NumberFormat(locales[currency], {
		style: 'currency',
		currency,
	}).format(amount);
}

export function formFullname(
	data: Partial<{ firstname: string; lastname: string }>
) {
	return `${data.firstname} ${data.lastname}`;
}

export const getExceptionType = (error: unknown) => {
	const UnknownException = {
		type: 'UnknownException',
		status: 500,
		message: 'An unknown error occurred',
	};

	if (!error) return UnknownException;

	if ((error as Record<string, unknown>).name === 'DatabaseError') {
		return {
			type: 'DatabaseException',
			status: 400,
			message: 'Duplicate key entry',
		};
	}

	return UnknownException;
};

export function formatDate(
	date: Date | string | number,
	options: Intl.DateTimeFormatOptions = {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	}
) {
	return new Intl.DateTimeFormat('en-US', {
		...options,
	}).format(new Date(date));
}

export function formatPrice(
	price: number | string,
	options: Intl.NumberFormatOptions = {}
) {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: options.currency ?? 'USD',
		notation: options.notation ?? 'compact',
		...options,
	}).format(Number(price));
}

export function absoluteUrl(path: string) {
	return new URL(path, process.env.NEXT_PUBLIC_APP_URL).href;
}
