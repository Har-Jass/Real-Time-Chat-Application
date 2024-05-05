import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-emerald-900 text-white" : "bg-slate-100";
	// const bubbleBgColor = fromMe ? "bg-transparent" : "bg-transparent";
	// const bubbleBorder = fromMe ? "border border-gray-900" : "border border-gray-900";
	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble text-black ${bubbleBgColor} ${shakeClass} pb-2 h-auto max-w-[800px] min-w-auto overflow-hidden break-words`}>{message.message}</div>
			<div className='chat-footer text-black opacity-80 text-xs flex gap-3 items-center mt-1'>{formattedTime}</div>
		</div>
	);
};
export default Message;
