/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { login } from '@/api/auth.api';
import { ILogin } from '@/interface/auth';
import { LoginSchema } from '@/schemas/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { CiLock,CiMail } from "react-icons/ci";
import { LuAsterisk } from "react-icons/lu";
import {useMutation} from '@tanstack/react-query'
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie'
import toast from 'react-hot-toast';
const LoginForm = () => {
    const router = useRouter()
    const {register,handleSubmit,reset,formState:{errors}} = useForm<ILogin>({
        defaultValues:{
            email:'',
            password:''
        },
        resolver:yupResolver(LoginSchema)
    })


   
    const {mutate,isPending} = useMutation({
        mutationFn:login,
        mutationKey:['login'],
        onSuccess:(data:any)=>{
                console.log('login success',data)
                localStorage.setItem('user',JSON.stringify(data.data))
                Cookies.set('access_token',data?.access_token)
                reset()
                toast.success(data?.message ??'Login Success')
                router.replace('/')
        },
        onError:(error)=>{
            console.log('login error',error)
            toast.error(error?.message ??'Login failed')

        }
    })

    const submit:SubmitHandler<ILogin> = (data) =>{

        console.log("from submitted",data)
         mutate(data)



    }
    
  return (
    <div>
        <form  onSubmit={handleSubmit(submit)}>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <div className='flex items-center gap-1'>
                        <CiMail size={23} className='text-[#171717]'/>
                        <label className='text-lg flex'>Email
                        <LuAsterisk className='text-red-500 text-sm'/>

                        </label>
                    </div>
                    <input  {...register('email')}  type='text' placeholder='johndoe@gmail.com' className={`border border-blue-200 rounded-md px-2 py-3 ${errors.email ? "focus:outline-red-500 border-red-500" :'border-blue-200 focus:outline-blue-400'}`}/>
                    {errors.email && <p className='text-xs text-red-500'>{errors.email.message}</p>}
                </div>

                <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-1'>
                        <CiLock size={23} className='text-[#171717]'/>
                        <label className='text-lg flex'>Password 
                        <LuAsterisk className='text-red-500 text-sm'/>

                        </label>
                       
                    </div>
                    <input {...register('password')} type='password' placeholder='Password' className={`border  rounded-md px-2 py-3 ${errors.password ? ' focus:outline-red-500 border-red-500' : 'border-blue-200 focus:outline-blue-400'}`}/>
                    {errors.password && <p className='text-xs text-red-500'>{errors.password.message}</p>}
               
                </div>
                <div className='mt-2'>
                    <button  disabled={isPending} type='submit' className='disabled:cursor-not-allowed disabled:bg-blue-500 tracking-widest transition-all duration-300 bg-blue-600 hover:bg-blue-500 cursor-pointer w-full h-[50px] rounded-md text-white font-bold'>Login</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default LoginForm