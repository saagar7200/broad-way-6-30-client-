/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICategory } from "@/interface/category.interface"
import apiInstance from "."

export const createCategory = async(data:ICategory)=>{
    try {
    const response = await apiInstance.post(`/category`,data)
    return response.data
        
    } catch (error:any) {
        throw error.response.data
        
    }

}

export const deleteCategory = async(id:string)=>{
    try {
    const response = await apiInstance.delete(`/category/${id}`)
    return response.data     
    } catch (error:any) {
        console.log(error)
        throw error.response.data
        
    }

}

export const getAllCategory = async()=>{
    try {
    const response = await apiInstance.get(`/category/user`)
    console.log(response)
    return response.data
        
    } catch (error:any) {
        console.log(error)
        throw error.response.data
        
    }

}

