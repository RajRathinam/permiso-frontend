import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';
import LoadingSpinner from '../../components/common/LoadingSpinner';

const LoginPage = ({authUser,setAuthUser}) => {
	const isError = 0;
	const isPending = 0;
	const [formData, setFormData] = useState({
		userType: "student",
		username: "",
		password: "",
	});
	const toggleUserType = () => {
		setFormData((prev) => ({ ...prev, userType: prev.userType === 'student' ? 'staff' : 'student' }));
	};
	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		localStorage.setItem('authUser', JSON.stringify(formData));
		setAuthUser(formData)
	}
	const capitalize = (str)=>{
		return str.charAt(0).toUpperCase()+str.slice(1);
	}
	return (
		<div className="h-screen bg-[url('/bg.jpg')] bg-cover bg-center grid place-items-center">
			<div className='relative  bg-black/70 top-0 left-0 h-screen w-screen'></div>
			<div className='absolute inset-0 m-auto lg:w-2/3 flex-1 flex flex-col gap-10 lg:flex-row lg:gap-20 justify-center items-center'>
				<div className='lg:w-1/2 text-white'>
					<h1 className='font-extrabold text-center lg:text-left text-[32px] py-3 lg:py-6 lg:text-4xl lg:font-extrabold'>Welcome to Permiso!</h1>
					<p className='hidden lg:block lg:text-lg text-justify mx-2 lg:mx-0 mb-5 '>Welcome to Permiso, the all-in-one platform designed to streamline on-duty and leave requests for students and staff.</p>

					<p className='hidden lg:block text-lg text-justify'>Whether you're a student requesting time off or going on-duty, or a staff member managing student requests and approvals, Permiso simplifies the process with a seamless interface.</p>
				</div>
				<div className='bg-slate-300/30 p-5 rounded-xl backdrop-blur-sm'>
					<form className='flex gap-4 flex-col' onSubmit={handleSubmit}>
						<h1 className='font-extrabold text-3xl lg:text-4xl lg:font-extrabold text-white'>Login!</h1>
						<label className='flex justify-between input input-bordered rounded items-center gap-2'>
							<h1 className='flex gap-2 items-center'>{formData.userType === "student" ? <FaUserGraduate /> : <FaChalkboardTeacher />}{capitalize(formData.userType)}</h1>
							<input type="checkbox" onClick={toggleUserType} className="toggle" />
						</label>
						<label className='input input-bordered rounded flex items-center gap-2'>
							<FaUser />
							<input
								type='text'
								className='grow'
								placeholder='username'
								name='username'
								onChange={handleInputChange}
								value={formData.username}
							/>
						</label>

						<label className='input input-bordered rounded flex items-center gap-2'>
							<MdPassword />
							<input
								type='password'
								className='grow'
								placeholder='Password'
								name='password'
								onChange={handleInputChange}
								value={formData.password}
							/>
						</label>
						<button className='btn rounded-full btn-primary text-white'>{isPending ? <LoadingSpinner size="sm"/> : "Login"}</button>
						{isError === true && <p className='text-red-500'>Something went wrong</p>}
					</form>
				</div>
			</div>
		</div>
	)
}

export default LoginPage
