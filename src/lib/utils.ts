import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import libphonenumber from 'google-libphonenumber';
const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
import { v4 as uuidv4 } from 'uuid';

export function formatPhoneNumber(phoneNumber: string): string {
	if (!/^\d{10,15}$/.test(phoneNumber)) return '';
	const phone = phoneUtil.parse(phoneNumber, 'NG');
	return phoneUtil.format(
		phone,
		libphonenumber.PhoneNumberFormat.INTERNATIONAL
	);
}

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const uniqueId = () => {
	return uuidv4();
};
