/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Table from '../common/table'
import {
    createColumnHelper,
  } from '@tanstack/react-table'

import {useQuery,useMutation,useQueryClient} from '@tanstack/react-query'
import { getAllExpenses,deleteExpense } from '@/api/expense.api'
import {toast} from 'react-hot-toast'
import ActionButton from '../common/action-button'
import formatDate from '@/utils/format-date'

interface IImage{
    path:string;
    public_id:string;
    _id:string
}

interface IExpense {
  title:string;
  description?:string;
  createdAt:string;
  updatedAt:string;
  receipts:IImage[];
  category:any;
  amount:number;
  date:string;
  _id:string;
 
}


  
const ExpenseList = () =>{
  const queryClient = useQueryClient()
    const {data,isLoading,error} = useQuery({
        queryFn:getAllExpenses,
        queryKey:['get-all-expenses']
    })

    const {mutate} = useMutation({
      mutationFn:deleteExpense,
      onSuccess:(data) =>{
        queryClient.invalidateQueries({queryKey:['get-all-expenses']})
        toast.success(data?.message ?? 'Expense deleted')

      },
      onError:(error) =>{
        queryClient.invalidateQueries({queryKey:['get-all-expenses']})
        toast.error(error?.message ?? 'Something went wrong.')

      }
    })

    if(error){
        toast.error(error?.message)
        return
    }


    const onDelete = (id:string) =>{
      console.log('delete clicked',id)
      mutate(id)
    }
  
    const onEdit = () =>{
      console.log('edit clicked')
    }
    
    const columnHelper = createColumnHelper<IExpense & {actions:string}>()
    
    const columns = [
      columnHelper.accessor('title', {
        cell: info => info.getValue(),
        header: () => <span className='tracking-wider text-md'>Title</span>,
      }),
      columnHelper.accessor('amount', {
        cell: info => <span className='italic tracking-wider text-sm'>Rs. {info.getValue()}</span>,
        header: () => <span className='tracking-wider text-md'>Amount (NRP.)</span>,
      }),
      columnHelper.accessor('date', {
        header: () => <span className='tracking-wider text-md'>Billing Date</span>,
        cell: info => <span className='text-sm'>{formatDate(info.renderValue() ?? '')}</span>,
      }),
      columnHelper.accessor('category', {
        id: 'category',
        cell: info => <i className='capitalize p-1 px-2 bg-blue-400 text-white rounded-md font-semibold'>{info.getValue()?.name ?? '-'}</i>,
        header: () => <span>Category</span>,
      }),
      columnHelper.accessor('description', {
        id: 'description',
        cell: info => <i>{info.getValue() ?? '-'}</i>,
        header: () => <span>Description</span>,
      }),
      columnHelper.accessor('createdAt', {
        header: () => <span>Created At</span>,
        cell: info => formatDate(info.renderValue() ?? ''),
      }),
      columnHelper.accessor('updatedAt', {
        header: () => <span >Updated At</span>,
        cell: info => formatDate(info.renderValue() ?? ''),
        
      }),
      columnHelper.accessor('actions' ,{
        id:'actions',
        header:() => <span >Action</span>,
        cell:(info) => <ActionButton onDelete={()=>onDelete(info.row.original._id)} onEdit={onEdit}/>
      }),
      
    ]
  

    return(
        <div className='w-full mt-14'>
            <Table
                data={data?.data?.data}
                columns={columns}
                isLoading={isLoading}
            />
        </div>
    )
}

export default ExpenseList