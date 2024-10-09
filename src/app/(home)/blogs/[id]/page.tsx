import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface Props {
	params: {
		id: string;
	};
}

async function NewsUpdates({ params: { id } }: Props) {
	const data: any = null;
	return (
		<div className="space-y-20">
			<Breadcrumb className="px-4 sm:px-12 py-6">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink
							className="text-base font-medium text-green-500"
							href="/">
							Home
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator className=" text-green-500 font-bold" />
					{data?.category?.name && (
						<>
							<BreadcrumbItem>
								<BreadcrumbLink
									className="text-base font-medium text-green-500"
									href={`/${data?.category?.name}`}>
									{data?.category?.name}
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator className=" text-green-500 font-bold" />
						</>
					)}
					<BreadcrumbItem>
						<BreadcrumbPage className="text-sm text-gray-500 font-normal  capitalize">
							{data?.title}
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div>
				{data && (
					<div className="space-y-8">
						<div className="mx-auto w-[80%]">
							<h1 className="text-xl sm:text-3xl text-center">{data.title}</h1>
						</div>
						<div>
							<img
								src={data.images[0]?.url}
								alt={data.title}
								className="w-full h-[300px] sm:h-[600px] object-cover"
							/>
						</div>
						<div className="px-4 sm:px-12">
							<p>{data.content}</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default NewsUpdates;
