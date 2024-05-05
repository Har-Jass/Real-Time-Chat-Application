import { useState } from "react";
import { Link } from "react-router-dom";
import logo from './mylogo.png';
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto backdrop-blur-lg'>
			<h1 className='text-5xl font-semibold text-center text-gray-300 mb-10 select-none'>
				<img src={logo} alt="Queued" className="w-50 h-40 opacity-80" />
				<span className='text-neutral-800'> Queued</span>
			</h1>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0'>
				{/* <img src="./mylogo.png" /> */}
				

				<form onSubmit={handleSubmit}>
					<div className="flex flex-col gap-3">
						<input
							type='text'
							placeholder='Username'
							className='w-full input input-bordered h-10'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>

						<input
							type='password'
							placeholder='Password'
							className='w-full input input-bordered h-10'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<div className="mt-5">
						<button className='btn btn-block btn-sm mt-2 text-lg' disabled={loading}>
							{loading ? <span className='loading loading-spinner '></span> : "Login"}
						</button>
					</div>

					<div className="flex gap-2 justify-center items-center mt-5">
						<span>
							{"Don't"} have an account? 
						</span>
						<Link to='/signup' className='text-md hover:underline hover:text-blue-600 inline-block'>
							Signup
						</Link>
					</div>
					
				</form>
			</div>
		</div>
	);
};
export default Login;

// STARTER CODE FOR THIS FILE
// const Login = () => {
// 	return (
// 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
// 					Login
// 					<span className='text-blue-500'> ChatApp</span>
// 				</h1>

// 				<form>
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text'>Username</span>
// 						</label>
// 						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Enter Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>
// 					<a href='#' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
// 						{"Don't"} have an account?
// 					</a>

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2'>Login</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
// export default Login;
