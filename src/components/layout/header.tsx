import { IoMdPerson } from "react-icons/io";
import { MdLogout } from "react-icons/md";

export const Header = () =>{
    return(
        <nav className='w-full flex justify-between items-center px-4'>
            <div>
               <p className='italic text-md '>Welcome back,Bob</p>
            </div>
            <div className='flex items-center gap-3'>
                <div>
                        <IoMdPerson size={26} className='text-blue-500 cursor-pointer'/>
                </div>
                <div>
                    <button className='cursor-pointer tracking-wider flex items-center rounded-md px-3 py-2 text-red-500 gap-1 border border-red-500'>
                        <span>Logout</span>
                        <MdLogout size={20}/>
                    </button>
                </div>
            </div>
        </nav>
    )
}