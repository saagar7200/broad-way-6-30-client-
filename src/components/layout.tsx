import React from 'react'
import Providers from '@/providers';
import { Toaster } from 'react-hot-toast';

const Layout = ({children}:Readonly<{children:React.ReactNode}>) => {
  return (
    <div className='h-full w-full'>
        <Providers>

        {children}
        <Toaster/>
        </Providers>
    </div>
  )
}

export default Layout