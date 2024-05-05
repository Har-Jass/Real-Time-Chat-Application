import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import logo from '../../pages/login/mylogo.png';

const Sidebar = () => {
	return (
		<div className="flex flex-col justify-between ml-[-25rem] border-r border-slate-600 px-16 overflow-y-auto">
			<div>
				<h1 className='flex flex-col font-semibold text-center text-gray-300 mb-10 select-none items-center'>
					<img src={logo} alt="Queued" className="w-30 h-20 opacity-90 select-none" />
					<span className='text-neutral-800 text-2xl'> Queued</span>
				</h1>
				<div className='flex flex-col gap-y-10'>
					<SearchInput />
					<Conversations />
				</div>
			</div>
			<div className="mb-11">
				<LogoutButton />
			</div>
		</div>
		
	);
};

export default Sidebar;

// STARTER CODE FOR THIS FILE
// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";
// import SearchInput from "./SearchInput";

// const Sidebar = () => {
// 	return (
// 		<div className='border-r border-slate-500 p-4 flex flex-col'>
// 			<SearchInput />
// 			<div className='divider px-3'></div>
// 			<Conversations />
// 			<LogoutButton />
// 		</div>
// 	);
// };
// export default Sidebar;
