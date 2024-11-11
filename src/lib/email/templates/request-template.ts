import {
	MailerSend,
	EmailParams,
	Sender,
	Recipient,
	Attachment,
} from 'mailersend';

export interface RequestTemplateProps {
	name: string;
	email: string;
	message: string;
}

export const RequestTemplate = async ({
	name,
	email,
	message,
}: RequestTemplateProps) => {
	const mailerSend = new MailerSend({
		apiKey: process.env.API_KEY!,
	});

	const sentFrom = new Sender(
		'MS_uQF2IX@trial-351ndgwev9qgzqx8.mlsender.net',
		'Agcoms International'
	);
	const recipients = [
		new Recipient('contact@agcomsinternational.com', 'Agcoms International'),
	];
	const personalization = [
		{
			email: 'contact@agcomsinternational.com',
			data: {
				name,
				email,
				message,
			},
		},
	];
	const emailParams = new EmailParams()
		.setFrom(sentFrom)
		.setTo(recipients)
		.setSubject('Request of quotation')
		.setTemplateId('vywj2lp6zkj47oqz')
		.setPersonalization(personalization);

	const res = await mailerSend.email.send(emailParams);
	console.log(res);
	return res?.statusCode;
};
