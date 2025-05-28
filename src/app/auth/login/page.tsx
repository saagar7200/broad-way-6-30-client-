import LoginForm from '@/components/forms/auth/login-form'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <main className='h-full flex justify-center items-center tracking-wider px-2 md:px-0'>
       <div className='border border-blue-500 w-[400px] min-h-[400px] rounded-md shadow-md p-6' >

        {/* page heading */}
       <div>
            <h1 className='text-center text-2xl font-bold'>Login</h1>
        </div>

        {/* login form */}
        <div>
                <LoginForm/>
        </div>
        <div className='text-center mt-5'>
            <p>Don&apos;t have an account? <Link href={'/auth/register'}> <span className='text-blue-500 underline'>Sign Up</span></Link></p>
        </div>
       </div>


    </main>
  )
}

export default LoginPage