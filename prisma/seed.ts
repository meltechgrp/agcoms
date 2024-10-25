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
			bannerImage: 'agriculture.avif',
			slug: 'agriculture',
		},
		{
			categoryName: 'Lawn & Garden',
			bannerImage: 'lawn-garden.avif',
			slug: 'lawn-garden',
		},
		{
			categoryName: 'Construction',
			bannerImage: 'construction.avif',
			slug: 'construction',
		},
		{
			categoryName: 'Golf & Sports Turf',
			slug: 'golf-sports-turf',
			bannerImage: 'golf-sports-turf.avif',
		},
		{
			categoryName: 'Forestry',
			slug: 'forestry',
			bannerImage: 'forestry.avif',
		},
	];

	// Loop through categories to create them and their subcategories
	for (const categoryData of categoriesWithSubcategories) {
		const { categoryName, bannerImage, slug } = categoryData;
		const cat = await prisma.productCategories.findUnique({
			where: { name: categoryName },
		});
		if (cat) continue;
		// Create or upsert category with a banner image
		await prisma.productCategories.create({
			data: {
				name: categoryName,
				slug: slug,
				images: {
					create: {
						url: bannerImage,
					},
				},
			},
		});
	}

	console.log(
		'Categories and Subcategories with banner images seeded successfully!'
	);
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
