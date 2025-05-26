"use client";
import React from "react";
import { CiLock, CiMail } from "react-icons/ci";
import { LuAsterisk } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "@/schemas/auth";
import { IRegister } from "@/interface/auth";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/api/auth.api";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const RegisterForm = () => {
	const router = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			full_name:'',
			user_name:'',
			email: "",
			password: "",
			confirm_password: "",
		},
		resolver: yupResolver(RegisterSchema),
	});

	const {mutate,isPending} = useMutation({
		mutationFn:registerUser,
		onSuccess:(data) =>{
			toast.success(data?.message ?? 'Registered')
			router.replace('/auth/login')

		},
		onError:(error)=>{
			toast.error(error?.message ?? 'Registration failed')

		}

	})

	const onSubmit: SubmitHandler<IRegister> = (data) => {
		console.log(data);
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const {confirm_password,...others} = data
		mutate(others)
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col gap-4">
					<div className="flex flex-col gap-1">
						<div className="flex items-center gap-1">
							<IoPersonOutline size={23} className="text-[#171717]" />
							<label className="text-lg flex">
								Full Name
								<LuAsterisk className="text-red-500 text-sm" />
							</label>
						</div>
						<input
							{...register("full_name")}
							type="text"
							placeholder="John Doe"
							className={`border border-blue-200 rounded-md px-2 py-3 ${errors.full_name ? 'border-red-500 focus:outline-red-500' : 'focus:outline-blue-400'}`}
						/>
						{errors.full_name && (
							<p className="text-xs text-red-500">{errors.full_name.message}</p>
						)}
					</div>
{/* user name */}
					<div className="flex flex-col gap-1">
						<div className="flex items-center gap-1">
							<IoPersonOutline size={23} className="text-[#171717]" />
							<label className="text-lg flex">
								User Name
								<LuAsterisk className="text-red-500 text-sm" />
							</label>
						</div>
						<input
							{...register("user_name")}
							type="text"
							placeholder="John Doe"
							className={`border border-blue-200 rounded-md px-2 py-3 ${errors.user_name ? 'border-red-500 focus:outline-red-500' : 'focus:outline-blue-400'}`}
						/>
						{errors.user_name && (
							<p className="text-xs text-red-500">{errors.user_name.message}</p>
						)}
					</div>

					<div className="flex flex-col gap-1">
						<div className="flex items-center gap-1">
							<CiMail size={23} className="text-[#171717]" />
							<label className="text-lg flex">
								Email
								<LuAsterisk className="text-red-500 text-sm" />
							</label>
						</div>
						<input
							{...register("email")}
							type="text"
							placeholder="johndoe@gmail.com"
							className={`border border-blue-200 rounded-md px-2 py-3 ${errors.email ? 'border-red-500 focus:outline-red-500' : 'focus:outline-blue-400'}`}
						/>
						{errors.email && (
							<p className="text-xs text-red-500">{errors.email.message}</p>
						)}
					</div>
					{/*  */}
					<div className="flex flex-col gap-1">
						<div className="flex items-center gap-1">
							<CiLock size={23} className="text-[#171717]" />
							<label className="text-lg flex">
								Password
								<LuAsterisk className="text-red-500 text-sm" />
							</label>
						</div>
						<input
							{...register("password")}
							type="password"
							placeholder="Password"
							className={`border border-blue-200 rounded-md px-2 py-3 ${errors.password ? 'border-red-500 focus:outline-red-500' : 'focus:outline-blue-400'}`}
						/>
						{errors.password && (
							<p className="text-xs text-red-500">{errors.password.message}</p>
						)}
					</div>
					{/* c pass */}
					<div className="flex flex-col gap-1">
						<div className="flex items-center gap-1">
							<CiLock size={23} className="text-[#171717]" />
							<label className="text-lg flex">
								Confirm Password
								<LuAsterisk className="text-red-500 text-sm" />
							</label>
						</div>
						<input
							{...register("confirm_password")}
							type="password"
							placeholder="Password"
							className={`border border-blue-200 rounded-md px-2 py-3 ${errors.confirm_password ? 'border-red-500 focus:outline-red-500' : 'focus:outline-blue-400'}`}
						/>
						{errors.confirm_password && (
							<p className="text-xs text-red-500">
								{errors.confirm_password.message}
							</p>
						)}
					</div>
					<div className="mt-2">
						<button type='submit' disabled={isPending} className="tracking-widest transition-all duration-300 bg-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed hover:bg-blue-500 cursor-pointer w-full h-[50px] rounded-md text-white font-bold">
							Sign Up
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default RegisterForm;
