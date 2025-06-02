'use client'

import Table from '../common/table'
import {
    createColumnHelper,
  } from '@tanstack/react-table'

import {useQuery,useMutation,useQueryClient} from '@tanstack/react-query'
import { getAllCategory,deleteCategory } from '@/api/category.api'
import {toast} from 'react-hot-toast'
import ActionButton from '../common/action-button'
import formatDate from '@/utils/format-date'

interface ICategory {
  name:string;
  description?:string;
  createdAt:string;
  updatedAt:string;
  _id:string;
 
}


  
const CategoryList = () =>{
  const queryClient = useQueryClient()
    const {data,isLoading,error} = useQuery({
        queryFn:getAllCategory,
        queryKey:['get-all-category']
    })

    const {mutate} = useMutation({
      mutationFn:deleteCategory,
      onSuccess:(data) =>{
        queryClient.invalidateQueries({queryKey:['get-all-category']})
        toast.success(data?.message ?? 'Category deleted')

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
    
    const columnHelper = createColumnHelper<ICategory & {actions:string}>()
    
    const columns = [
      columnHelper.accessor('name', {
        cell: info => info.getValue(),
        header: () => <span>Category Name</span>,
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
                data={data?.data}
                columns={columns}
                isLoading={isLoading}
            />
        </div>
    )
}

export default CategoryList