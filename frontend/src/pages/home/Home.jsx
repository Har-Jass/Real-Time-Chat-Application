import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		// <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-0'>
		// 	<Sidebar />
		// 	<MessageContainer />
		// </div>
		<div className='justify-center mt-5 flex sm:h-full md:h-full md:w-full rounded-lg overflow-hidden bg-cover bg-center h-screen w-screen bg-gray-400 bg-opacity-0'>
			<Sidebar />
			<div className="flex justify-center">
				<MessageContainer />
			</div>
		</div>
	);
};
export default Home;
