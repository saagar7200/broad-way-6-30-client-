/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiEdit } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import React,{FC} from 'react'

interface IProps {
    onEdit?:()=> any
    onDelete?:()=>void

}

const ActionButton:FC<IProps> = ({onEdit,onDelete}) =>{

    return (
        <div className='w-full flex items-center justify-center gap-3'>
            <FiEdit onClick={onEdit} title='Edit' size={20} className='text-blue-600 cursor-pointer'/>
            <GoTrash onClick={onDelete} title='Delete' size={20} className='text-red-500 cursor-pointer'/>
        </div>
    )
}

export default ActionButton