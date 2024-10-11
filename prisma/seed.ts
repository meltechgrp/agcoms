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
			bannerImage: 'lawn-garden.avif',
			slug: 'lawn-garden',
			subcategories: [
				{
					name: 'Riding Lawn Equipment',
					slug: 'equipment',
				},
			],
		},
		{
			categoryName: 'Construction',
			bannerImage: 'construction.avif',
			slug: 'construction',
		},
		{
			categoryName: 'Commercial Mowing',
			slug: 'commercial-mowing',
			bannerImage: 'commercial-mowing.avif',
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
			bannerImage: 'golf-sports-turf.avif',
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
			slug: 'forestry',
			bannerImage: 'forestry.avif',
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
		const { categoryName, bannerImage, slug, subcategories } = categoryData;
		const cat = await prisma.category.findUnique({
			where: { name: categoryName },
		});
		if (cat) continue;
		// Create or upsert category with a banner image
		const category = await prisma.category.create({
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

		console.log(`Category ${categoryName} created or already exists.`);
		if (!subcategories) continue;
		// Create subcategories for each category with banner images
		for (const subcategoryData of subcategories) {
			const sub = await prisma.subcategory.findFirst({
				where: { name: subcategoryData.name },
			});
			if (sub) continue;
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

async function BlogCategory() {
	const categories = [
		{ name: 'Financing' },
		{ name: 'Construction' },
		{ name: 'Products' },
	];

	for (const category of categories) {
		const { name } = category;
		const c = await prisma.category.findFirst({ where: { name } });
		if (c) continue;
		await prisma.blogCategory.create({
			data: {
				name,
				slug: name.toLowerCase().replace(/\s/g, '-'),
			},
		});
	}
}

BlogCategory()
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});

main()
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
