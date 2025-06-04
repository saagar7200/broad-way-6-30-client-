/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Input from '@/components/common/input';
import  CategorySelect  from '@/components/common/category-select';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation ,useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { GoPlus } from "react-icons/go";
import ImageUploadController from '@/components/common/image-uploader';
import { IExpense } from '@/interface/expense.interface';
import { expenseSchema } from '@/schemas/expense.schema';
import { createExpense } from '@/api/expense.api';

const ExpenseForm = () => {

  const queryClient = useQueryClient()
  const router = useRouter()
  const {watch,control,register,handleSubmit,reset,formState:{errors}} = useForm({
    defaultValues:{
      title:'',
      description:'',
      date:'',
      amount:0,
      category:'',
      receipts:[]
    },
    resolver:yupResolver(expenseSchema),
    mode:'all'
  })

  console.log(watch('category'))
  const {mutate,isPending} = useMutation({
    mutationFn:createExpense,
    mutationKey:['category-post'],
    onSuccess:(data)=>{
      toast.success(data?.message ?? 'Expense created')
      reset()
      queryClient.invalidateQueries({queryKey:['get-all-expense']})
      router.back()
    },
    onError:(error)=>{
      toast.success(error?.message ?? 'Operation failed')
      // reset()
      
    }
  })


  const onSubmit = (data:IExpense) =>{
    console.log(data)
    const formData = new FormData()

    formData.append('title',data.title)
    formData.append('amount',data.amount.toString())
    formData.append('date',data.date)
    if(data.description){

      formData.append('description',data.description)
    }
    // @ts-expect-error //value
    if(data.category?.value){
    // @ts-expect-error //value
      formData.append('categoryId', data.category?.value)
    }

    if(data.receipts && Array.isArray(data.receipts)){
      data.receipts.forEach((file:any) =>{
        formData.append('receipts',file)
      })
    }


mutate(formData)


  }

  return (
    <div className='w-[min(100%,500px)] px-7 py-10 border border-blue-500 rounded-md '>
      {/* @ts-expect-error //desc */}
      <form onSubmit={handleSubmit(onSubmit)}>

       <div className='flex flex-col gap-2'>
      <Input
        label={'Title'}
        register={register}
        required
        error={errors?.title?.message}
        name='title'
        placeholder='Food & Drinks'

      />
      <CategorySelect required error={errors.category?.message as string} control={control}/>
      <div className='grid grid-cols-2 gap-2'>
            <Input
                label={'Amount'}
                register={register}
                type='number'
                required
                error={errors?.amount?.message}
                name='amount'
                placeholder='1000'
                min={0}

            />
            <Input
                label={'Billing Date'}
                register={register}
                type={'date'}
                required
                error={errors?.date?.message}
                name='date'
                placeholder={'Billing Date'}

            />
      </div>
      <ImageUploadController   name='receipts' label={'Receipts'} control={control} error={errors?.receipts?.message ?? ''}/>
      <Input
        label={'Description'}
        register={register}
        error={errors?.description?.message}
        name='description'
        placeholder='Start typing here...'
        multiline
        required={false}

      />

        
        <div className='w-full mt-3'>
          <button 
            disabled={isPending}
            type='submit'
            className='disabled:bg-blue-300 disabled:cursor-not-allowed w-full text-center cursor-pointer tracking-wider flex items-center justify-center gap-1 bg-blue-500 text-white text-lg font-bold rounded-md px-4 py-3'
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

export default ExpenseForm
