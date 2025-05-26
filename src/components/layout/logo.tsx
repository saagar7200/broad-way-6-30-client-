import { FiBarChart2 } from "react-icons/fi";

export const Logo = () =>{
    return(
        <div className='h-full w-full flex items-center gap-3 tracking-widest italic'>
            <FiBarChart2 size={27} className='text-blue-500'/>
            <p className='text-gray-700 text-xl text-semibold'>Expense Flow</p>
        </div>

    )
}