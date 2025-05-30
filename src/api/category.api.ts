/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICategory } from "@/interface/category.interface"
import apiInstance from "."

export const createCategory = async(data:ICategory)=>{
    try {
    const response = await apiInstance.post(`/category`,data)
    console.log(response)
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

