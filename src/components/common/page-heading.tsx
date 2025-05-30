
import Link from 'next/link'
import React, { FC } from 'react'
interface IProps {
    title:string,
    buttonText:string,
    link:string

}

const PageHeading:FC<IProps> = ({title,buttonText,link}) => {
  return (
    <div className='w-full tracking-wider  sm:flex items-center justify-between'>
        <div>
            <h1 className='text-center sm:text-start font-bold text-2xl md:text-xl text-gray-800'>{title}</h1>
        </div>
        <div className='mt-4 sm:mt-0'>
            <Link href={link}>
                <div className='text-center rounded-md text-lg  p-3 bg-blue-500 text-white font-bold'>
                {buttonText}
                </div>
            </Link>
        </div>
    </div>
  )
}

export default PageHeading