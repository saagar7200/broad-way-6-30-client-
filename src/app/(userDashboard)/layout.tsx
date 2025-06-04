'use client'
import { withAuth } from "@/components/hoc/with-auth"
import { Header } from "@/components/layout/header"
import Sidebar from "@/components/layout/sidebar"
import { ReactNode } from "react"

const Layout = ({children}:Readonly<{children:ReactNode}>) =>{
    return (
        <div className='flex w-full h-full overflow-y-clip tracking-wider'>
            <div className=' min-h-[100vh] lg:min-w-[310px] border-r border-gray-500'>
                <Sidebar/>
            </div>
            <div className=' h-full w-full overflow-y-auto'>
                <div className='sticky backdrop-blur-3xl  right-0 top-0 bg-transparent  h-[60px] flex-1 flex items-center py-2 shadow-md'>
                    <Header/>
                </div>
                <div className='flex min-h-screen p-4 pb-15  overflow-y-auto'>
                    {children}
                </div>
            </div>
        </div>
    )
}


export default withAuth(Layout,['USER'])