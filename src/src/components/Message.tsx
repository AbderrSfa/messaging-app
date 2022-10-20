import MessageT from '../typings/MessageT';

type Props = {
	msg: MessageT;
	myID: number;
};

const Message = ({ msg, myID }: Props) => {
	return (
		<article className="my-4">
			{msg.userID === myID ? (
				<div className="flex items-center justify-end">
					<p className="mx-2 text-sm text-slate-400">{msg.timestamp}</p>
					<p className="w-max rounded-full rounded-br-none bg-[#392fc6] py-2 px-4 text-white">
						{msg.text}
					</p>
				</div>
			) : (
				<div className="flex items-center justify-start">
					<p className="w-max rounded-full rounded-bl-none bg-slate-200 py-2 px-4">
						{msg.text}
					</p>
					<p className="mx-2 text-sm text-slate-400">{msg.timestamp}</p>
				</div>
			)}
		</article>
	);
};

export default Message;
