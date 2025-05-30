'use client'
import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState} from 'react'

interface IUser {
    full_name:string,
    user_name:string,
    email:string,
    password:string,
    createdAt:string,
    updatedAt:string,
    role:string
}

 interface IContext {
    user:IUser | null,
    setUser:Dispatch<SetStateAction<null>>,
    
 } 

const initialValues:IContext = {
    user:null,
    setUser : () =>{}
}



export const AuthContext = createContext(initialValues)



const AuthProvider = ({children}:Readonly<{children:ReactNode}>) =>{
const [user, setUser]= useState(null)

    useEffect(()=>{
        const user = localStorage.getItem('user')
        if(user){
            
            setUser(()=> JSON.parse(user))
        }
    },[])

    return (
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () =>{
    if(!AuthContext){
        console.log('useAuth must be used inside auth provider')         
    }

    return useContext(AuthContext)
}

export default AuthProvider