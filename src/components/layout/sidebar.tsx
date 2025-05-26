import React from 'react'
import Link from 'next/link'
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineBarChart } from "react-icons/md";
import { LuTag } from "react-icons/lu";
import { Logo } from './logo';
const Sidebar = () => {
  return (
    <div className='flex flex-col gap-4'>
        <div className='px-3 h-[60px] border-b border-gray-500'>
           <Logo/>
        </div>
        
        <div className='px-3 flex flex-col gap-3'>
            <Link href='/'>
                <div className='flex items-center gap-2'>
                    <LuLayoutDashboard className='text-blue-600' size={23}/>
                    <p className='text-lg'>Dashboard</p>
                </div>
            </Link>
            <Link href='/categories'>
                <div className='flex items-center gap-2'>
                    <LuTag className='text-blue-600' size={23}/>
                    <p className='text-lg'>Category</p>
                </div>
            </Link>
            <Link href='/expenses'>
                <div className='flex items-center gap-2'>
                    <MdOutlineBarChart className='text-blue-600' size={23}/>
                    <p className='text-lg'>Expenses</p>
                </div>
            </Link>

        </div>


    </div>
  )
}

export default Sidebar