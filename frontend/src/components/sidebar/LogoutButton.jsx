import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className='mt-auto'>
			{!loading ? (
				<div className="bg-red-800 inline-flex justify-center gap-2 items-center rounded-full px-3 py-1 cursor-pointer" onClick={logout}>
					<BiLogOut className='w-6 h-6 text-white'/>
					<p className="text-white text-lg mr-2">Logout</p>
				</div>
				
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;
