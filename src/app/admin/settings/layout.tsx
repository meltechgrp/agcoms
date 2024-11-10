import Tabview from '@/app/admin/settings/components/tab-view';

export default function Layout(props: { children: React.ReactNode }) {
	return (
		<div className="w-full h-full py-8 md:py-16 px-0 md:px-8 space-y-8">
			<div>
				<h1 className=" text-xl md:text-3xl font-medium">Settings</h1>
				<p className="text-gray-500">
					View and update all information of admins.
				</p>
			</div>
			<div className="space-y-10">
				<Tabview />
				{props.children}
			</div>
		</div>
	);
}
