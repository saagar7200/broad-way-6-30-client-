"use client";
import React from "react";
import { CiLock, CiMail } from "react-icons/ci";
import { LuAsterisk } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "@/schemas/auth";
import { IRegister } from "@/interface/auth";
const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
		resolver: yupResolver(RegisterSchema),
	});

	const onSubmit: SubmitHandler<IRegister> = (data) => {
		console.log(data);
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
							{...register("fullName")}
							type="text"
							placeholder="John Doe"
							className={`border border-blue-200 rounded-md px-2 py-3 ${errors.fullName ? 'border-red-500 focus:outline-red-500' : 'focus:outline-blue-400'}`}
						/>
						{errors.fullName && (
							<p className="text-xs text-red-500">{errors.fullName.message}</p>
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
							{...register("confirmPassword")}
							type="password"
							placeholder="Password"
							className={`border border-blue-200 rounded-md px-2 py-3 ${errors.confirmPassword ? 'border-red-500 focus:outline-red-500' : 'focus:outline-blue-400'}`}
						/>
						{errors.confirmPassword && (
							<p className="text-xs text-red-500">
								{errors.confirmPassword.message}
							</p>
						)}
					</div>
					<div className="mt-2">
						<button className="tracking-widest transition-all duration-300 bg-blue-600 hover:bg-blue-500 cursor-pointer w-full h-[50px] rounded-md text-white font-bold">
							Sign Up
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default RegisterForm;
