/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import  SelectInput from './select-input'
import { LuAsterisk } from 'react-icons/lu'
import {useQuery} from '@tanstack/react-query'
import { getAllCategory } from '@/api/category.api'
import {Controller} from 'react-hook-form'
import { ICategoryResponse } from '@/interface/category.interface'


interface IProps {
    required?:boolean,
    control:any
    error?:string
}


const CategorySelect = ({required,control ,error}:IProps) =>{

    const {data} = useQuery({
        queryFn:getAllCategory,
        queryKey:['get-all-category']
    })

    const options = data?.data?.map((cat:ICategoryResponse) => {
        return {
            label:cat.name,
            value:cat._id
        }
    })

    return (
        <div className='mb-0'>
        <div className='flex mb-1'>
            <label htmlFor={'category'} className='text-lg font-semibold'>Category</label>
            {required && <LuAsterisk className='text-red-500 mt-1'/>}
        </div>
        <Controller
        name='category'
        control={control}
        render={({ field: { onChange } }) => (
            <SelectInput error={error} onChange={onChange}  placeholder={'Select Category..'}  options={options}/>
          )}
        />
            
        </div>

    )
}

export default CategorySelect