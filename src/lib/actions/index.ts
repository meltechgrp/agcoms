'use server';

import prisma from '@/lib/prisma';
// import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';

export interface ActionResponse<T> {
	fieldError?: Partial<Record<keyof T, string | undefined>>;
	formError?: string;
	data?: boolean;
	res?: Partial<Record<keyof T, string | undefined>>;
}

export const getProCats = async () => {
	const proCats = await prisma.productCategories.findMany({
		select: {
			name: true,
		},
	});
	if (proCats) return proCats;
	return [];
};

// export async function sendMail() {
// 	try {
// 		const mailerSend = new MailerSend({
// 			apiKey:
// 				'mlsn.65a5c360da06423ad0986881a0d40c5b0b2c707a74b234a43c4f64aa7be11af2',
// 		});

// 		const sentFrom = new Sender(
// 			'MS_uQF2IX@trial-351ndgwev9qgzqx8.mlsender.net'
// 		);

// 		const recipients = [
// 			new Recipient('joshuahumphrey579@gmail.com', 'Nerds lab'),
// 		];

// 		const emailParams = new EmailParams()
// 			.setFrom(sentFrom)
// 			.setTo(recipients)
// 			.setReplyTo(sentFrom)
// 			.setSubject('This is a Subject')
// 			.setHtml('<strong>This is the HTML content</strong>')
// 			.setText('This is the text content');

// 		const res = await mailerSend.email.send(emailParams);
// 		console.log(res, res.body?.warnings);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
export const getProNavData = async () => {
	const nav = await prisma.products.findMany({
		select: {
			id: true,
			name: true,
			category: {
				select: {
					name: true,
					slug: true,
				},
			},
		},
	});
	return nav ? nav : [];
};

export type ProNavData = Awaited<ReturnType<typeof getProNavData>>;
