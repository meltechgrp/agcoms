import { Button } from '../ui/button';

export default function Governace() {
	return (
		<div className="py-16 bg-center px-4 flex items-center justify-start sm:px-16">
			<div className="flex  p-4 flex-col gap-8">
				<h1 className="text-2xl self-start border-b-4 border-tertiary pb-1 sm:text-4xl">
					Governance
				</h1>
				<p className="w-full sm:w-1/2 text-base">
					Strong governance is essential to maintaining transparency and
					accountability in our operations. Our leadership adheres to rigorous
					governance practices, ensuring responsible decision-making, effective
					risk management, and compliance with all applicable laws and
					regulations. We regularly review and update our policies to reflect
					the latest standards and best practices in corporate governance,
					supporting our mission to build a sustainable and ethical business for
					the long term. For more information on our ethical guidelines and
					governance policies, please refer to our full Ethics and Compliance
					document
				</p>
				<div className="">
					<Button className="bg-green-500 hover:bg-green-500 text-white font-semibold w-56 h-12">
						Learn More
					</Button>
				</div>
			</div>
		</div>
	);
}
