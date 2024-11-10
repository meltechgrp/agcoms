import { GlareCard } from '../ui/glare-card';

export default function Values() {
	return (
		<div className="py-20 bg-gray-100">
			<div className="p-4 lg:p-16 justify-center flex flex-col  space-y-8 ">
				<h1 className="text-2xl self-center border-bottom lg:text-4xl">
					Our Values
				</h1>
				<div className="grid grid-cols-1 mx-auto lg:grid-cols-3 gap-10">
					<GlareCard className="flex bg-white shadow-md backdrop-blur-md text-black flex-col items-start rounded justify-start py-8 px-6">
						<h4 className="font-bold text-lg lg:text-xl border-b-4 self-start border-tertiary pb-1">
							Integrity, innovation, and customer satisfaction
						</h4>
						<p className="font-normal text-base mt-4">
							Integrity, innovation, and customer satisfaction are at the core
							of AGCOMS. We believe in conducting our business with transparency
							and ethics, ensuring that our clients not only receive premium
							equipment but also a partnership grounded in trust.
						</p>
					</GlareCard>
					<GlareCard className="flex bg-white shadow-md backdrop-blur-md text-black flex-col items-start rounded justify-start py-8 px-6">
						<h4 className="font-bold text-lg lg:text-xl border-b-4 self-start border-tertiary pb-1">
							Global Reach with Local Support
						</h4>
						<p className="font-normal text-base mt-4">
							AGCOMS understands the importance of responsive service. With
							strategically located offices and a robust network of partners,
							we’re equipped to deliver products and services to various regions
							seamlessly, ensuring consistent support and minimal downtime for
							our clients.
						</p>
					</GlareCard>
					<GlareCard className="flex bg-white shadow-md backdrop-blur-md text-black flex-col items-start rounded justify-start py-8 px-6">
						<h4 className="font-bold text-lg lg:text-xl border-b-4 self-start border-tertiary pb-1">
							Our Commitment to Excellence
						</h4>
						<p className="font-normal text-base mt-4">
							With a strong focus on{' '}
							<strong>quality, durability, and efficiency</strong>, AGCOMS
							combines advanced engineering with real-world applications. Our
							commitment to after-sales service, spare parts availability, and
							technical support ensures that our clients experience minimal
							disruption and maximum performance.
						</p>
					</GlareCard>
				</div>
			</div>
		</div>
	);
}
