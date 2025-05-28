'use client'
import { withAuth } from "@/components/hoc/with-auth"
import { Header } from "@/components/layout/header"
import Sidebar from "@/components/layout/sidebar"
import { ReactNode } from "react"

const Layout = ({children}:Readonly<{children:ReactNode}>) =>{
    return (
        <div className='flex w-full h-full overflow-y-hidden tracking-wider'>
            <div className='min-h-[100vh] lg:min-w-[300px] border-r border-gray-500'>
                <Sidebar/>
            </div>
            <div className='h-full w-full'>
                <div className='h-[60px] w-full flex items-center py-2 shadow-md'>
                    <Header/>
                </div>
                <div className='flex  h-full p-4'>
                    {children}
                </div>
            </div>
        </div>
    )
}


export default withAuth(Layout,['USER'])