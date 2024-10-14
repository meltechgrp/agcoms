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
					name: 'Tractors',
					slug: 'tractors',
					image: 'tractor.webp',
				},
				{
					name: 'Combines',
					slug: 'combines',
					image: 'combines.webp',
				},
				{
					name: 'Drills',
					slug: 'drills',
					image: 'drills.webp',
				},
				{
					name: 'Balers',
					slug: 'balers',
					image: 'balers.jpg',
				},
			],
		},
		{
			categoryName: 'Lawn & Garden',
			bannerImage: 'lawn-garden.avif',
			slug: 'lawn-garden',
			subcategories: [
				{
					name: 'Lawn Tractors',
					slug: 'lawn-tractors',
					image: 'lawn-tractors.avif',
				},
				{
					name: 'Residential ZTrak™ Zero-Turn Mowers',
					slug: 'mowers',
					image: 'ztrak-mowers.avif',
				},
			],
		},
		{
			categoryName: 'Construction',
			bannerImage: 'construction.avif',
			slug: 'construction',
			subcategories: [
				{
					name: 'Dozers',
					slug: 'dozers',
					image: 'dozers.webp',
				},
				{
					name: 'Skid Steers',
					slug: 'skid-steers',
					image: 'skid-steers.avif',
				},
				{
					name: 'Excavators',
					slug: 'excavators',
					image: 'excavators.avif',
				},
				{
					name: 'Wheel Loaders',
					slug: 'wheel-loaders',
					image: 'wheel-loaders.avif',
				},
				{
					name: 'Motor Graders',
					slug: 'motor-graders',
					image: 'motor-graders.avif',
				},
			],
		},
		{
			categoryName: 'Commercial Mowing',
			slug: 'commercial-mowing',
			bannerImage: 'commercial-mowing.avif',
			subcategories: [
				{
					name: 'Commercial ZTrak™ Zero Turn Mowers',
					slug: 'commercial-mowers',
					image: 'commercial-mowers.avif',
				},
			],
		},
		{
			categoryName: 'Golf & Sports Turf',
			slug: 'golf-sports-turf',
			bannerImage: 'golf-sports-turf.avif',
			subcategories: [
				{
					name: 'Fairway Mowers',
					slug: 'fairway-mowers',
					image: 'fairway-mowers.avif',
				},
				{
					name: 'Riding Greens Mowers',
					slug: 'riding-greens-mowers',
					image: 'riding-greens-mowers.jpg',
				},
				{
					name: 'Turf Gator™ Utility Vehicles Lineup',
					slug: 'turf-gator',
					image: 'turf-gator.avif',
				},
			],
		},
		{
			categoryName: 'Forestry',
			slug: 'forestry',
			bannerImage: 'forestry.avif',
			subcategories: [
				{
					name: 'Tracked Feller Bunchers',
					slug: 'tracked-feller-bunchers',
					image: 'tracked-feller-bunchers.avif',
				},
				{
					name: 'Wheeled Harvesters',
					slug: 'wheeled-harvesters',
					image: 'wheeled-harvesters.webp',
				},
				{
					name: 'Skidders',
					slug: 'skidders',
					image: 'skidders.avif',
				},
				{
					name: 'Forwarders',
					slug: 'forwarders',
					image: 'forwarders.avif',
				},
			],
		},
	];

	// Loop through categories to create them and their subcategories
	for (const categoryData of categoriesWithSubcategories) {
		const { categoryName, bannerImage, slug, subcategories } = categoryData;
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
				...(subcategories?.length
					? {
							subcategories: {
								create: subcategories.map((subcategory) => ({
									name: subcategory.name,
									slug: subcategory.slug,
									images: {
										create: {
											url: subcategory.image,
										},
									},
								})),
							},
					  }
					: {}),
			},
		});
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
		const c = await prisma.postCategories.findFirst({ where: { name } });
		if (c) continue;
		await prisma.postCategories.create({
			data: {
				name,
				slug: name.toLowerCase().replace(/\s/g, '-'),
			},
		});
	}
}
async function Specs() {
	const specs = [
		{ name: 'Engine' },
		{ name: 'Vehicle' },
		{ name: 'Operating Weight' },
		{ name: 'Controls' },
		{ name: 'Dimensions' },
		{ name: 'Cutting Units' },
		{ name: 'Warranty' },
		{ name: 'Certification' },
	];

	for (const spec of specs) {
		const { name } = spec;
		const c = await prisma.productSpecs.findFirst({ where: { name } });
		if (c) continue;
		await prisma.productSpecs.create({
			data: {
				name,
			},
		});
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
Specs()
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
BlogCategory()
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
