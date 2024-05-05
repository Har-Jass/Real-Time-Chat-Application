import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
// import logo from '../../pages/login/mylogo.png';

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='md:min-w-[950px] md:max-w-[950px] flex flex-col ml-52 '>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className="flex flex-col justify-around h-full ml-[-6rem] mr-[-18rem]">
						<div className='bg-emerald-900 rounded-lg px-4 py-2 mb-8 select-none '>
							{/* <span className='text-white '>To:</span>{" "} */}
							<span className='text-white'>{selectedConversation.fullName}</span>
							{/* <span>{selectedConversation}</span> */}
						</div>
						<Messages />
						<MessageInput />
					</div>
				</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full select-none mb-10 ml-20 flex-col gap-4'>
			{/* <img src={logo} alt="Queued Logo" className="opacity-50"/> */}
			<div className='px-4 text-center sm:text-lg md:text-xl text-slate-700 font-semibold flex flex-col items-center gap-5'>
				<p>Welcome 👋 {authUser.fullName} ❄</p>
				<p>Let your words be as sweet as chocolate 🍫</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};

// STARTER CODE SNIPPET
// import MessageInput from "./MessageInput";
// import Messages from "./Messages";

// const MessageContainer = () => {
// 	return (
// 		<div className='md:min-w-[450px] flex flex-col'>
// 			<>
// 				{/* Header */}
// 				<div className='bg-slate-500 px-4 py-2 mb-2'>
// 					<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>John doe</span>
// 				</div>

// 				<Messages />
// 				<MessageInput />
// 			</>
// 		</div>
// 	);
// };
// export default MessageContainer;
