import { IoMdPerson } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import Cookies from 'js-cookie'
import { useRouter } from "next/navigation";
import {useAuth} from '@/context/auth.context'

export const Header = () =>{
    const router = useRouter()
    const {user} = useAuth()
    console.log('context user',user)
    const handleLogout = () =>{
        localStorage.removeItem('user')
        Cookies.remove('access_token')
        router.replace('/auth/login')

    }
    
    return(
        <nav className='w-full  flex justify-between items-center px-4'>
            <div>
               <p className='italic text-md '>Welcome back, {user?.user_name ?? user?.full_name}</p>
            </div>
            <div className='flex items-center gap-3'>
                <div>
                        <IoMdPerson size={26} className='text-blue-500 cursor-pointer'/>
                </div>
                <div>
                    <button onClick={handleLogout} className='cursor-pointer tracking-wider flex items-center rounded-md px-2 md:px-3 py-2 text-red-500 gap-1 border border-red-500'>
                        <span className='hidden md:block'>Logout</span>
                        <MdLogout size={20}/>
                    </button>
                </div>
            </div>
        </nav>
    )
}