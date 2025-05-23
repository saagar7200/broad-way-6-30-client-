import RegisterForm from '@/components/forms/auth/register'
import Link from 'next/link'
import React from 'react'

const RegisterPage = () => {
  return (
         <main className='h-full flex justify-center items-center tracking-wider '>
       <div className='border border-blue-500 w-[500px] min-h-[400px] rounded-md shadow-md p-6' >

        {/* page heading */}
       <div>
            <h1 className='text-center text-2xl font-bold'>Sign Up</h1>
        </div>

        {/* login form */}
        <div className='mt-4'>
                <RegisterForm/>
        </div>
        <div className='text-center mt-5'>
            <p>Already have a account? <Link href={'/auth/login'}> <span className='text-blue-500 underline'>Login</span></Link></p>
        </div>
       </div>


    </main>

  )
}

export default RegisterPage