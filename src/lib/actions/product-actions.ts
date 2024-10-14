'use server';

import { revalidatePath } from 'next/cache';
import { ActionResponse } from '.';
import prisma from '../prisma';
import { ProductFormInput, ProductFormSchema } from '../validators/auth';

export async function getProducts(args: {
	cursor?: string;
	take: number;
	skip: number;
	orderBy: {
		createdAt: 'asc' | 'desc';
	};
}) {
	try {
		const { take, skip, orderBy } = args;
		const products = await prisma.products.findMany({
			...(args.cursor && { cursor: { id: args.cursor } }),
			take,
			orderBy,
			include: {
				category: {
					select: {
						name: true,
						slug: true,
					},
				},
				images: {
					select: {
						url: true,
					},
					take: 2,
				},
				subcategory: {
					select: {
						name: true,
						slug: true,
					},
				},
			},
		});
		return products;
	} catch (error) {
		console.error(error);
		return [];
	}
}
export type ProductsType = Awaited<ReturnType<typeof getProducts>>;
export async function getProductData(productId?: string) {
	try {
		if (!productId) return null;
		const product = await prisma.products.findUnique({
			where: { id: productId },
			include: {
				category: {
					select: { name: true, slug: true },
				},
				images: {
					select: { url: true },
					take: 2,
				},
				subcategory: {
					select: {
						name: true,
						slug: true,
					},
				},
				features: {
					select: {
						name: true,
						content: true,
						id: true,
					},
				},
				specs: {
					select: {
						name: true,
						content: true,
						id: true,
						spec: {
							select: {
								name: true,
							},
						},
					},
				},
			},
		});
		return product;
	} catch (error) {
		console.log(error);
		return null;
	}
}
export type ProductType = Awaited<ReturnType<typeof getProductData>>;

export async function createProduct(
	_: any,
	data: ProductFormInput
): Promise<ActionResponse<ProductFormInput>> {
	try {
		const parsed = ProductFormSchema.safeParse(data);
		if (!parsed.success) {
			const err = parsed.error.flatten();
			return {
				fieldError: {
					name: err.fieldErrors.name?.[0],
					description: err.fieldErrors.description?.[0],
					category: err.fieldErrors.category?.[0],
					images: err.fieldErrors.images?.[0],
					features: err.fieldErrors.features?.[0],
				},
			};
		}
		const {
			id,
			images,
			name,
			description,
			subCategory,
			features,
			specs,
			category,
		} = data;
		if (id) {
			await prisma.products.update({
				where: {
					id,
				},
				data: {
					name,
					description,
					category: {
						connect: {
							name: category,
						},
					},
					subcategory: {
						connect: {
							name: subCategory,
						},
					},
					...(images?.length
						? {
								images: {
									connectOrCreate: images.map(({ url }) => ({
										where: {
											url,
										},
										create: {
											url,
										},
									})),
								},
						  }
						: {}),
					...(features?.length
						? {
								features: {
									deleteMany: {},
									create: features.map(({ name, content }) => ({
										name,
										content,
									})),
								},
						  }
						: {}),
					...(specs?.length
						? {
								specs: {
									deleteMany: {},
									create: specs.map(({ name, content, group }) => ({
										name,
										content,
										spec: {
											connect: {
												name: group,
											},
										},
									})),
								},
						  }
						: {}),
				},
			});
			revalidatePath('/admin/products');
			return {
				data: true,
			};
		} else {
			await prisma.products.create({
				data: {
					name,
					description,
					category: {
						connect: {
							name: category,
						},
					},
					subcategory: {
						connect: {
							name: subCategory,
						},
					},
					...(images
						? {
								images: {
									create: images.map(({ url }) => ({ url })),
								},
						  }
						: {}),
					...(features?.length
						? {
								features: {
									create: features.map(({ name, content }) => ({
										name,
										content,
									})),
								},
						  }
						: {}),
					...(specs?.length
						? {
								specs: {
									create: specs.map(({ name, content, group }) => ({
										name,
										content,
										spec: {
											connect: {
												name: group,
											},
										},
									})),
								},
						  }
						: {}),
				},
			});
			revalidatePath('/admin/products');
			return {
				data: true,
			};
		}
	} catch (error) {
		console.log(error);
		return {
			formError: 'Error occurred',
		};
	}
}

export async function deleteProduct(productId: string) {
	try {
		if (!productId) return false;
		await prisma.products.delete({
			where: { id: productId },
		});
		revalidatePath('/admin/products');
		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
}
