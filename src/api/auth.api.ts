/* eslint-disable @typescript-eslint/no-explicit-any */
import { ILogin, IRegister } from '@/interface/auth'
import apiInstance from '.'



export const login = async(data:ILogin)=>{
    try {
    const response = await apiInstance.post(`/auth/login/`,data)
    console.log(response)
    return response.data
        
    } catch (error:any) {
        console.log(error)
        throw error.response.data
        
    }


}



export const registerUser = async(data:Partial<IRegister>)=>{
    try {
    const response = await apiInstance.post(`/auth/register/`,data)
    console.log(response)
    return response.data
        
    } catch (error:any) {
        console.log(error)
        throw error.response.data
        
    }


}
