'use client'

import Table from '../common/table'
import {
    createColumnHelper,
  } from '@tanstack/react-table'
type Person = {
    firstName: string
    lastName: string
    age: number
    visits: number
    status: string
    progress: number
  }
  
  const defaultData: Person[] = [
    {
      firstName: 'tanner',
      lastName: 'linsley',
      age: 24,
      visits: 100,
      status: 'In Relationship',
      progress: 50,
    },
    {
      firstName: 'tandy',
      lastName: 'miller',
      age: 40,
      visits: 40,
      status: 'Single',
      progress: 80,
    },
    {
      firstName: 'joe',
      lastName: 'dirte',
      age: 45,
      visits: 20,
      status: 'Complicated',
      progress: 10,
    },
  ]
  
  const columnHelper = createColumnHelper<Person>()
  
  const columns = [
    columnHelper.accessor('firstName', {
      cell: info => info.getValue(),
      header: () => <span>Category Name</span>,
    }),
    columnHelper.accessor(row => row.lastName, {
      id: 'lastName',
      cell: info => <i>{info.getValue()}</i>,
      header: () => <span>Description</span>,
    }),
    columnHelper.accessor('age', {
      header: () => <span>Created At</span>,
      cell: info => info.renderValue(),
    }),
    columnHelper.accessor('visits', {
      header: () => <span >Updated At</span>,
    }),
    columnHelper.accessor('status', {
      header:() => <span >Action</span>,
    }),
    
  ]

const CategoryList = () =>{

    return(
        <div className='w-full mt-14'>
            <Table
                data={defaultData}
                columns={columns}
            />
        </div>
    )
}

export default CategoryList