// 'use server';

// const superAdmins = process.env.WHITELISTED_EMAILS?.split(',') || [];
// export async function handleAddAdmin(payload: {
// 	email: string;
// 	allowedRoutes: string[];
// }) {
// 	const { email, allowedRoutes } = payload;
// 	console.log('add admin', email);
// 	if (superAdmins.includes(email)) return false;
// 	const alreadyExists = await prisma.adminAllowedEmail.findUnique({
// 		where: {
// 			email: email.toLowerCase(),
// 		},
// 	});
// 	console.log('alreadyExists', alreadyExists);
// 	if (alreadyExists) return false;
// 	await prisma.adminAllowedEmail.create({
// 		data: {
// 			email: email.toLowerCase(),
// 			allowedPages: allowedRoutes,
// 		},
// 	});
// 	console.log('added admin', email);
// 	return true;
// }
// export async function handleRemoveAdmin(email: string) {
// 	console.log('remove admin', email);
// 	if (superAdmins.includes(email)) return false;
// 	const alreadyExists = await prisma.adminAllowedEmail.findUnique({
// 		where: {
// 			email: email.toLowerCase(),
// 		},
// 	});
// 	console.log('alreadyExists', alreadyExists);
// 	if (!alreadyExists) return false;
// 	await prisma.adminAllowedEmail.delete({
// 		where: {
// 			email: email.toLowerCase(),
// 		},
// 	});
// 	await prisma.adminUser.deleteMany({
// 		where: {
// 			email: {
// 				equals: email.toLowerCase(),
// 				mode: 'insensitive',
// 			},
// 		},
// 	});
// 	console.log('removed admin', email);
// 	return true;
// }
// export async function handleUpdateAdmin(payload: {
// 	email: string;
// 	allowedRoutes: string[];
// }) {
// 	const { email, allowedRoutes } = payload;
// 	if (superAdmins.includes(email)) return false;
// 	const alreadyExists = await prisma.adminAllowedEmail.findUnique({
// 		where: {
// 			email: email.toLowerCase(),
// 		},
// 	});
// 	if (!alreadyExists) return false;
// 	await prisma.adminAllowedEmail.update({
// 		where: {
// 			email: email.toLowerCase(),
// 		},
// 		data: {
// 			allowedPages: allowedRoutes,
// 		},
// 	});
// 	return true;
// }
