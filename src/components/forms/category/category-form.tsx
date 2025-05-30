'use client'

import { createCategory } from '@/api/category.api';
import Input from '@/components/common/input';
import { ICategory } from '@/interface/category.interface';
import { CategorySchema } from '@/schemas/category.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { GoPlus } from "react-icons/go";

const CategoryForm = () => {

  const {register,handleSubmit,reset,formState:{errors}} = useForm({
    defaultValues:{
      name:'',
      description:''
    },
    resolver:yupResolver(CategorySchema),
    mode:'all'
  })

  const {mutate,isPending} = useMutation({
    mutationFn:createCategory,
    mutationKey:['category-post'],
    onSuccess:(data)=>{
      toast.success(data?.message ?? 'Category created')
      reset()

    },
    onError:(error)=>{
      toast.success(error?.message ?? 'Operation failed')
      // reset()
      
    }
  })


  const onSubmit = (data:ICategory) =>{
    console.log(data)
    mutate(data)
  }

  return (
    <div className='w-[min(100%,400px)] px-7 py-10 border border-blue-500 rounded-md '>
      <form onSubmit={handleSubmit(onSubmit)}>

       <div className='flex flex-col gap-2'>
      <Input
        label={'Name'}
        register={register}
        required
        error={errors?.name?.message}
        name='name'
        placeholder='Entertainment'

      />
      <Input
        label={'Description'}
        register={register}
        error={errors?.description?.message}
        name='description'
        placeholder='Start typing here...'
        multiline
        required={false}

      />

        {/* <div className='flex flex-col gap-1'>
          <label htmlFor='description' className='text-lg font-semibold'> Description</label>
          <textarea
          {...register('description')}
            className={`min-h-[150px] md:text-lg border border-blue-400 px-3 py-2 rounded-md focus:outline-blue-400`}
            placeholder='Write here.....' />
        </div> */}
        <div className='w-full mt-3'>
          <button 
            disabled={isPending}
            type='submit'
            className='disabled:bg-blue-300 disabled:cursor-pointer w-full text-center cursor-pointer tracking-wider flex items-center justify-center gap-1 bg-blue-500 text-white text-lg font-bold rounded-md px-4 py-3'
            >
           <span>{isPending ? 'Creating' :"Create"}</span>
           <GoPlus size={28}/>
          </button>
        </div>
       </div>

      </form>
    </div>
  )
}

export default CategoryForm
