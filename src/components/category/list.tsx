'use client'

import Table from '../common/table'
import {
    createColumnHelper,
  } from '@tanstack/react-table'

import {useQuery} from '@tanstack/react-query'
import { getAllCategory } from '@/api/category.api'
import {toast} from 'react-hot-toast'

  
  const columnHelper = createColumnHelper<any>()
  
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
      cell: info => info.renderValue(),
    }),
    columnHelper.accessor('updatedAt', {
      header: () => <span >Updated At</span>,
    }),
    columnHelper.accessor('status', {
      header:() => <span >Action</span>,
    }),
    
  ]

const CategoryList = () =>{

    const {data,isLoading,error} = useQuery({
        queryFn:getAllCategory,
        queryKey:['get-all-category']
    })
    if(error){
        toast.error(error?.message)
        return
    }

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