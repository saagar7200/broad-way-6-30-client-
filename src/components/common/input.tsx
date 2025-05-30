/* eslint-disable @typescript-eslint/no-explicit-any */


import React, { FC } from 'react'
import { LuAsterisk } from 'react-icons/lu'

interface IProps {
    label:string;
    required?:boolean;
    name:string;
    error?:string;
    register:any;
    placeholder:string;
    multiline?:boolean
}

const Input:FC<IProps> = ({label,name,required,error,register,placeholder,multiline}) => {
  return (
    <div className='flex flex-col gap-1'>
        <div className='flex'>
            <label htmlFor={name} className='text-lg font-semibold'>{label}</label>
            {required && <LuAsterisk className='text-red-500 mt-1'/>}
        </div>
       {multiline ? 
       <textarea
       {...register(name)}
         className={`min-h-[150px] md:text-lg border border-blue-400 px-3 py-2 rounded-md ${error ? "border-red-500 focus:outline-red-500":"focus:outline-blue-400"}`}
         placeholder={placeholder} />
        : <input
            {...register(name)}
            className={`md:text-lg border border-blue-400 px-3 py-3 rounded-md ${error ? "border-red-500 focus:outline-red-500":"focus:outline-blue-400"}`}
            placeholder={placeholder}
         />}
        {error && <p className='text-xs text-red-500'>{error}</p>}
  </div>
  )
}

export default Input

