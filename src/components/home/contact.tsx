import MessageForm from './message-form';

export default function Contact() {
	return (
		<div className="my-8 px-4 mt-16">
			<div className="space-y-6">
				<h1 className="text-xl sm:text-3xl font-bold text-center">
					Send us a Message
				</h1>
				<MessageForm />
			</div>
		</div>
	);
}
