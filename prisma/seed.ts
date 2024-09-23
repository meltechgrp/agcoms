import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
	log: ['query'],
});
async function main() {
	await prisma.$connect();
	console.log('Populating data');
	// Define categories, subcategories, and their banner images
	const categoriesWithSubcategories = [
		{
			categoryName: 'Agriculture',
			bannerImage: '/p-categories/agriculture.avif',
			link: '/products/agriculture',
			slug: 'products',
			subcategories: [
				{
					name: 'WHEEL TRACTORS',
					slug: 'tractors',
				},
				{
					name: 'WHEEL AND TRACK TRACTORS',
					slug: 'tractors',
				},
				{
					name: 'SCRAPER TRACTORS',
					slug: 'tractors',
				},
				{
					name: 'FARM EQUIPMENTS & TECHNOLOGY PRODUCTS',
					slug: 'technology-products',
				},
			],
		},
		{
			categoryName: 'Lawn & Garden',
			bannerImage: '/p-categories/lawn-garden.avif',
			link: '/products/lawn-garden',
			subcategories: [
				{
					name: 'Riding Lawn Equipment',
					slug: 'equipment',
				},
			],
		},
		{
			categoryName: 'Construction',
			bannerImage: '/p-categories/construction.avif',
			link: '/products/construction',
		},
		{
			categoryName: 'Commercial Mowing',
			slug: 'commercial-mowing',
			bannerImage: '/p-categories/commercial-mowing.avif',
			link: '/products/commercial-mowing',
			subcategories: [
				{
					name: 'Commercial ZTrak™ Zero Turn Mowers',
					slug: 'mowers',
				},
			],
		},
		{
			categoryName: 'Golf & Sports Turf',
			slug: 'golf-sports-turf',
			bannerImage: '/p-categories/golf-sports-turf.avif',
			link: '/products/golf-sports-turf',
			subcategories: [
				{
					name: 'Golf Course Mowers',
					slug: 'mowers',
				},
				{
					name: 'Specialty Equipment',
					slug: 'specialty-equipment',
				},
				{
					name: 'All-Purpose Equipment',
					slug: 'all-purpose-equipment',
				},
			],
		},
		{
			categoryName: 'Forestry',
			link: '/products/forestry',
			bannerImage: '/p-categories/forestry.avif',
			subcategories: [
				{
					name: 'Forestry Equipment',
					slug: 'forestry-equipment',
				},
				{
					name: 'Wheeled Harvesters',
					slug: 'wheeled-harvesters',
				},
				{
					name: 'Skidders',
					slug: 'skidders',
				},
			],
		},
	];

	// Loop through categories to create them and their subcategories
	for (const categoryData of categoriesWithSubcategories) {
		const { categoryName, bannerImage, link, slug, subcategories } =
			categoryData;

		// Create or upsert category with a banner image
		const category = await prisma.category.upsert({
			where: { name: categoryName },
			update: {}, // If the category already exists, do nothing
			create: {
				name: categoryName,
				bannerImage: bannerImage,
				link: link,
				slug: slug,
			},
		});

		console.log(`Category ${categoryName} created or already exists.`);
		if (!subcategories) continue;
		// Create subcategories for each category with banner images
		for (const subcategoryData of subcategories) {
			await prisma.subcategory.create({
				data: {
					name: subcategoryData.name,
					slug: subcategoryData.slug,
					category: {
						connect: { id: category.id }, // Link subcategory to the created category
					},
				},
			});

			console.log(
				`Subcategory ${subcategoryData.name} created for category ${categoryName}.`
			);
		}
	}

	console.log(
		'Categories and Subcategories with banner images seeded successfully!'
	);
}
async function blogs() {
	await prisma.$connect();
	console.log('Populating data');
	// Define categories, subcategories, and their banner images
	const blogs = [
		{
			title: 'How To Finance',
			slug: 'how-to-finance',
			content: `The Financing Solution For You
At John Deere Financial, we understand your challenges, and that cash flow is a concern throughout the year.

Whether you are getting ready for a new season or starting a new construction project, we can ensure that you have what you need to be successful and alleviate any concerns, stresses or frustrations you may carry.

This is why we offer value that no other lender can — a deep understanding of your industry, unmatched equipment expertise, and personal financial solutions, provided to you how you prefer, as fast as possible.

With limited resources and unlimited opportunities, we can make owning and operating equipment easy and affordable. By helping you find the right financial solution to keep your business running, we enable you to purchase the John Deere equipment you need at the right time.

You deserve;

To work with industry experts that understand your business and can help you structure your finance solutions correctly in a way that suits you.
Reliable products that are specifically designed with our customers in mind to improve your business.
Assistance throughout the application process, with the least amount of effort and documentation submissions required from your side.
To work with an organisation that can ensure all regulatory requirements are met along the way.
You deserve our undivided attention on your journey to success.

For generations, we have been enabling our customers to purchase the equipment they need to succeed. And without question, we’ll be here for you in good times and bad.

It’s about building an enduring relationship by ensuring your financing works as hard and reliably for you as your equipment.

After all, your success is our sole focus — your business is why we’re in business.`,
			category: 'FINANCING',
			bannerImage: '/blog-banners/how-to-finance.avif',
		},
		{
			title: 'Finance Now Available On AGCOMS',
			slug: 'construction-and-mining-machinery',
			content: `John Deere Financial is excited to announce that we have extended our portfolio to include John Deere Construction, Mining, and Forestry equipment. The John Deere Financial objective is to support you and your business to benefit from tailor-made asset finance, which saves you money in the process. To deliver the best possible service and solution to our clients, John Deere Financial is built on four key pillars, namely: Convenience, Commitment, Competitiveness and Insightfulness.

CONVENIENCE
Time is a valuable asset, which is why John Deere Financial works hard to make it as quick and easy as possible to receive financing when you purchase John Deere products. The company has a dedicated representative in most areas who can help clients through the entire financing process. John Deere Financial has a team that is ready and waiting to visit its clients, assess and understand their unique needs, and recommend the most fitting financial solution. With the necessary permission, it is even possible for the John Deere Financial representative to assist in gathering the documents from the accountant or auditor. In this way, both parties can do what they enjoy, and the client can focus on what he does best.

COMMITMENT
Our clients invest in John Deere with the purchase of new John Deere equipment. In return, John Deere Financial wants to contribute to the success of our clients and their business. Unpredictable circumstances can easily disrupt the plans of our clients. During these times, John Deere Financial can provide the necessary support by presenting flexible solutions to their clients. John Deere Financial also recognises that business cycles may differ from year to year, which is why the payment date can easily be extended by a month or two, working with the client’s cash flow cycle.

COMPETITIVENESS
The first thing people consider when it comes to financing solutions is good interest
rates. The financial package structure, along with considerations of the term and deposit,
means that our clients can expect competitive interest rates.
Competitiveness does not end with interest rates. However, the speed of these services,
the type of financial solutions available to our clients, and their
convenience all add weight. By positioning John Deere Financial as the market leader
in the financing of John Deere equipment, the company challenges competitors to
continuously improve their service and price, all to the benefit of our clients.

INSIGHTFULNESS
John Deere Financial continues to grow with the business of our clients. Through this,
the company ensures that its service and solutions remain relevant and sufficient to meet
the growing needs of our clients. In the construction environment, John Deere Financial
provides custom-designed financial solutions and support with fast approvals. John Deere
Financial invites customers based in the construction, mining, quarrying business,
and farmers interested in purchasing new equipment to contact their nearest
John Deere Financial representative.`,
			category: 'FINANCING',
			bannerImage: '/blog-banners/construction-and-mining-machinery.avif',
		},
	];
	//
	// Loop through categories to create them and their subcategories
	for (const blog of blogs) {
		const { title, bannerImage, content, slug, category } = blog;
		const b = await prisma.blog.findFirst({ where: { title } });
		if (b) continue;
		// Create or upsert category with a banner image
		await prisma.blog.create({
			data: {
				title,
				bannerImage,
				slug,
				content,
				category: category as any,
			},
		});

		console.log(`Blog ${title} created or already exists.`);
	}
}

main()
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
blogs()
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
