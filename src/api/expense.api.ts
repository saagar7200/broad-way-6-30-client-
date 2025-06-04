/* eslint-disable @typescript-eslint/no-explicit-any */
import apiInstance from "."

export const getAllExpenses = async()=>{
    try {
    const response = await apiInstance.get(`/expense/`)
    console.log(response)
    return response.data
        
    } catch (error:any) {
        console.log(error)
        throw error.response.data
        
    }

}

export const deleteExpense = async(id:string)=>{
    try {
    const response = await apiInstance.delete(`/expense/${id}`)
    return response.data     
    } catch (error:any) {
        console.log(error)
        throw error.response.data
        
    }

}


export const createExpense = async(data:any)=>{
    try {
    const response = await apiInstance.post(`/expense`,data)
    return response.data
        
    } catch (error:any) {
        throw error.response.data
        
    }

}