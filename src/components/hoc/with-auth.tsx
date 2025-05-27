'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Cookies from 'js-cookie'
import toast from "react-hot-toast";
import { parseToken } from "@/utils/parse-token";




export function withAuth<T>(Component:React.ComponentType<T>,roles:string[]){

    return function WithAuthentication (props:any){
        // login 
        const router = useRouter()
        const token = Cookies.get('access_token')
        const {valid,role} = parseToken(token ?? '')
        useEffect(()=>{
            if( !valid || !roles.includes(role ?? '') ){
                router.replace('/auth/login')
                if(token){
                    Cookies.remove('access_token')
                }
                localStorage.removeItem('user')
                toast.error('Session expired.Try login again.')
                return
            }
        },[])


        return <Component {...props}/>


    }

}
