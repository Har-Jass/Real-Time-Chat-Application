import { useState } from "react";
// import { BsSend } from "react-icons/bs";
// import { IoPaperPlaneSharp } from "react-icons/io5";
import { IoPaperPlane } from "react-icons/io5";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};

	return (
		<form className='px-4 my-10' onSubmit={handleSubmit}>
			<div className='w-full relative'>
				<input
					type='text'
					className='border rounded-full block w-full p-2.5 bg-slate-100 border-slate-100 text-black max-w-[76rem] h-auto'
					placeholder='Message...'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				{/* <textarea
					className='border rounded-full block w-full p-2.5 bg-slate-100 border-slate-100 text-black max-w-[85rem] h-[3rem]'
					placeholder='Message...'
					value={message}
					onChange={(e) => {setMessage(e.target.value)}}
				/> */}
				{/* <button type='submit' className='rounded-full mr-5 absolute inset-y-0 end-0 flex p-3 text-slate-100 text-xl justify-center items-center w-auto bg-emerald-900'>
					{loading ? <div className='loading loading-spinner'></div> : <IoPaperPlane w-6 h-6 />}
				</button> */}

				<button type='submit' className='rounded-full flex mr-5 absolute items-center inset-y-0 end-0 p-3 w-12 h-12 text-xl text-slate-100 justify-center bg-emerald-900'>
					{loading ? <div className='loading loading-spinner'></div> : <IoPaperPlane />}
				</button>

			</div>
		</form>
	);
};

export default MessageInput;
