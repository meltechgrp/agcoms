'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import { ProductFormInput, ProductFormSchema } from '@/lib/validators/auth';
import { useFormState } from 'react-dom';
import { Input } from '@/components/ui/input';
import { useAlertToggle } from '@/components/shared/alert-wrapper';
import { toast } from 'sonner';
import { AlertDialogFooter } from '@/components/ui/alert-dialog';
import { Loader, Trash, Plus } from 'lucide-react';
import dynamic from 'next/dynamic';
import ProductSubCategorySelect from '@/components/shared/select-product-subCat';
import ProductCategorySelect from '@/components/shared/select-product-category';
import ImageUploader from '@/components/shared/image-uploader';
import { createProduct, ProductType } from '@/lib/actions/product-actions';
import SpecsGroupSelect from '@/components/shared/select-spec-group';
const TextEditor = dynamic(() => import('@/components/shared/text-editor'), {
	ssr: false,
});

const BasicSchema = ProductFormSchema.pick({
	description: true,
	price: true,
	name: true,
	category: true,
	subCategory: true,
});

const FeatsSchema = ProductFormSchema.pick({
	features: true,
});

const SpecsSchema = ProductFormSchema.pick({
	specs: true,
});
const ImgsSchema = ProductFormSchema.pick({
	images: true,
});

const NewProduct = (props: { product?: ProductType }) => {
	const { product } = props;
	const [step, setStep] = React.useState(1);
	const [loading, setLoading] = React.useState(false);
	const form = useForm<ProductFormInput>({
		resolver: zodResolver(ProductFormSchema),
		defaultValues: {
			id: product?.id,
			name: product?.name || '',
			description: product?.description || '',
			category: product?.category?.name || '',
			subCategory: product?.subcategory?.name || '',
			images: product?.images || [],
			features: product?.features || [],
			specs: product?.specs || [],
		},
	});
	function handleNext() {
		if (step === 1) {
			let parsed = BasicSchema.safeParse(form.getValues());
			if (!parsed.success) return;
			form.trigger(['name', 'category', 'price', 'subCategory', 'description']);
		}
		if (step === 2) {
			let parsed = FeatsSchema.safeParse(form.getValues());
			if (!parsed.success) return form.trigger(['features']);
		}
		if (step === 3) {
			let parsed = SpecsSchema.safeParse(form.getValues());
			if (!parsed.success) return form.trigger(['specs']);
		}
		if (step === 4) {
			let parsed = ImgsSchema.safeParse(form.getValues());
			if (!parsed.success) return form.trigger(['images']);
		}
		form.clearErrors();
		setStep((prev) => prev + 1);
	}
	const progress = useMemo(() => {
		return step * 25;
	}, [step]);
	const dismissAlert = useAlertToggle();
	const [state, dispatch] = useFormState(createProduct, undefined);

	async function handleSubmit(data: ProductFormInput) {
		setLoading(true);
		return dispatch(data);
	}
	form.watch();
	useEffect(() => {
		if (state?.fieldError) {
			setLoading(false);
			Object.entries(state.fieldError).forEach(([key, value]) => {
				form.setError(key as any, {
					type: 'manual',
					message: value,
				});
			});
		}
		if (state?.formError) {
			setLoading(false);
			toast.error(state.formError);
		}
		if (state?.data) {
			setLoading(false);
			toast.success(
				product?.id
					? 'Product updated successfully'
					: 'Product created successfully'
			);
			form.reset();
			return product
				? dismissAlert('edit', 'true')
				: dismissAlert('productId', 'new');
		}
	}, [state?.formError, state?.fieldError, state?.data]);
	return (
		<div className="grid">
			<Progress
				value={progress}
				className=" w-full h-2 bg-gray-100 p-0"
				indicatorClassName="bg-blue-500 duration-1000"
			/>
			<div className="px-4 py-5">
				<div className="space-y-4">
					<h2 className="space-x-3">
						<span className="text-xl font-medium">
							{product?.id ? 'Update Product' : 'Add New Product'}
						</span>
					</h2>
				</div>
				<div className="my-4">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(handleSubmit)}>
							<div className="grid gap-4">
								{step === 1 && <Basic form={form} />}
								{step === 2 && <Features form={form} />}
								{step === 3 && <Specifications form={form} />}
								{step >= 4 && <Images form={form} />}

								<Controls
									loading={loading}
									handleNext={handleNext}
									product={product}
									dismissAlert={dismissAlert}
									step={step}
									setStep={() => setStep((prev) => prev - 1)}
								/>
							</div>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default NewProduct;

interface ControlProps {
	step: number;
	setStep: () => void;
	loading: boolean;
	dismissAlert: any;
	product?: any;
	handleNext: any;
}

function Controls(props: ControlProps) {
	const { step, setStep, loading, handleNext, dismissAlert, product } = props;
	return (
		<AlertDialogFooter className="w-full flex flex-row gap-3 mt-3 ">
			<Button
				disabled={loading}
				onClick={(e) => {
					e.preventDefault();
					if (step > 1) return setStep();
					step == 1 && product
						? dismissAlert('edit', 'true')
						: dismissAlert('productId', 'new');
				}}
				className="flex-1"
				variant={'outline'}
				type="button">
				{step == 1 ? 'Cancel' : 'Prev'}
			</Button>
			<Button
				disabled={loading}
				onClick={handleNext}
				className=" flex-1"
				type={step > 4 ? 'submit' : 'button'}>
				{loading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
				{step > 3 ? (product?.id ? 'Update' : 'Save') : 'Next'}
			</Button>
		</AlertDialogFooter>
	);
}

interface FormProps {
	form: any;
}

function Basic({ form }: FormProps) {
	return (
		<div className="grid gap-4">
			<FormField
				control={form.control}
				name="id"
				render={({ field }) => (
					<FormItem hidden>
						<FormControl>
							<Input type="text" placeholder="id" {...field} />
						</FormControl>
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name="name"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Product name</FormLabel>
						<FormControl>
							<Input type="text" placeholder="Product name" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<div className="grid sm:grid-cols-2 gap-4">
				<FormField
					control={form.control}
					name="category"
					render={() => (
						<FormItem>
							<FormLabel>Category</FormLabel>
							<FormControl>
								<ProductCategorySelect
									name={form.getValues('category')}
									onValueChange={(name) => {
										form.setValue('category', name);
									}}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="subCategory"
					render={() => (
						<FormItem>
							<FormLabel>Sub category</FormLabel>
							<FormControl>
								<ProductSubCategorySelect
									category={form.getValues('category')}
									name={form.getValues('subCategory') ?? ''}
									onValueChange={(name) => {
										form.setValue('subCategory', name);
									}}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>

			<FormField
				control={form.control}
				name="description"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Product description</FormLabel>
						<FormControl>
							<TextEditor placeholder="Product description" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</div>
	);
}

function Features({ form }: FormProps) {
	const { fields, append, remove } = useFieldArray({
		control: form.control,
		name: 'features',
	});
	const { errors } = form.formState;
	const [currentFeat, setCurrentFeat] = useState('0');
	return (
		<div className="grid gap-4">
			<div className="flex justify-between">
				<div className="space-y-1">
					<h3 className="text-sm sm:text-base font-medium">Product features</h3>
					<p className="text-xs font-medium">Add at least one feature</p>
				</div>
			</div>
			<Accordion
				type="single"
				value={currentFeat}
				onValueChange={setCurrentFeat}
				className="w-full grid gap-4">
				{fields.map((field, index) => (
					<AccordionItem className="" key={field.id} value={index.toString()}>
						<AccordionTrigger className="w-full text-sm hover:no-underline">
							Feature {index + 1}
						</AccordionTrigger>
						<AccordionContent className="space-y-2">
							<FormField
								control={form.control}
								name={`features.${index}.name`}
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												className="rounded-none focus-visible:ring-0 focus-visible:ring-transparent"
												placeholder="Feature name"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name={`features.${index}.content`}
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<TextEditor placeholder="Feature content" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className="flex justify-end items-center gap-3">
								<Button
									variant="ghost"
									type="button"
									onClick={() => {
										setCurrentFeat(
											(parseInt(currentFeat) > 0
												? parseInt(currentFeat) - 1
												: parseInt(currentFeat)
											).toString()
										);
										remove(index);
									}}>
									<Trash className="h-5 w-5 text-destructive" />
								</Button>
								{fields.length - 1 == index && (
									<Button
										type="button"
										variant="outline"
										className="text-blue-500 px-2 py-1 h-6 border-blue-600"
										onClick={() => {
											append(
												{ name: '', content: '' },
												{
													shouldFocus: true,
												}
											);
											setCurrentFeat((parseInt(currentFeat) + 1).toString());
										}}>
										<Plus className="h-5 w-5 mr-2" />
										New
									</Button>
								)}
							</div>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
			<FormMessage>{errors.features?.message}</FormMessage>
		</div>
	);
}
function Specifications({ form }: FormProps) {
	const { fields, append, remove } = useFieldArray({
		control: form.control,
		name: 'specs',
	});
	const { errors } = form.formState;
	const [currentSpec, setCurrentSpec] = useState('0');
	return (
		<div className="grid gap-4">
			<div className="flex justify-between">
				<div className="space-y-1">
					<h3 className="text-sm sm:text-base font-medium">
						Product specifications
					</h3>
					<p className="text-xs font-medium">
						This is optional, remove if there are no specifications
					</p>
				</div>
			</div>
			<Accordion
				type="single"
				value={currentSpec}
				onValueChange={setCurrentSpec}
				className="w-full grid gap-4">
				{fields.map((field, index) => (
					<AccordionItem className="" key={field.id} value={index.toString()}>
						<AccordionTrigger className="w-full text-sm hover:no-underline">
							Specification {index + 1}
						</AccordionTrigger>
						<AccordionContent className="space-y-2">
							<div className="grid sm:grid-cols-[70%,auto] gap-2">
								<FormField
									control={form.control}
									name={`specs.${index}.name`}
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													className="rounded-none focus-visible:ring-0 focus-visible:ring-transparent"
													placeholder="Specification name"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name={`specs.${index}.group`}
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<SpecsGroupSelect {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<FormField
								control={form.control}
								name={`specs.${index}.content`}
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<TextEditor
												placeholder="Specification content"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className="flex justify-end items-center gap-3">
								<Button
									variant="ghost"
									type="button"
									onClick={() => {
										setCurrentSpec(
											(parseInt(currentSpec) > 0
												? parseInt(currentSpec) - 1
												: parseInt(currentSpec)
											).toString()
										);
										remove(index);
									}}>
									<Trash className="h-5 w-5 text-destructive" />
								</Button>
								{fields.length - 1 == index && (
									<Button
										type="button"
										variant="outline"
										className="text-blue-500 px-2 py-1 h-6 border-blue-600"
										onClick={() => {
											append(
												{ name: '', content: '', group: '' },
												{
													shouldFocus: true,
												}
											);
											setCurrentSpec((parseInt(currentSpec) + 1).toString());
										}}>
										<Plus className="h-5 w-5 mr-2" />
										New
									</Button>
								)}
							</div>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
			<FormMessage>{errors.specs?.message}</FormMessage>
		</div>
	);
}

function Images({ form }: FormProps) {
	return (
		<FormField
			control={form.control}
			name="images"
			render={({ field }) => (
				<FormItem>
					<FormLabel className="text-base font-medium">
						Product images
					</FormLabel>
					<FormControl>
						<ImageUploader
							bucketName="images"
							folderName="product-images"
							images={form.getValues('images') as any}
							saveImages={(image) => form.setValue('images', image)}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
