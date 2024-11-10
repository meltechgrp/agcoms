import MessageForm from './message-form';

export default function Contact() {
	return (
		<div className="my-8 px-4 mt-16">
			<div className="space-y-6 flex flex-col">
				<h1 className="text-xl self-center border-b-2 border-blue-600 pb-1 md:text-3xl font-bold text-center">
					Send us a Message
				</h1>
				<MessageForm />
			</div>
		</div>
	);
}
