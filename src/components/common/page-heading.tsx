
import Link from 'next/link'
import React, { FC } from 'react'
interface IProps {
    title:string,
    buttonText:string,
    link:string

}

const PageHeading:FC<IProps> = ({title,buttonText,link}) => {
  return (
    <div className='w-full tracking-wider flex items-center justify-between'>
        <div>
            <h1 className='font-bold text-lg md:text-xl text-gray-800'>{title}</h1>
        </div>
        <div >
            <Link href={link}>
                <div className='rounded-md text-lg  p-3 bg-blue-500 text-white font-bold'>
                {buttonText}
                </div>
            </Link>
        </div>
    </div>
  )
}

export default PageHeading