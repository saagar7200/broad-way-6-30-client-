/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import * as React from 'react'


import {

  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'




interface IProps {
    data:any[],
    columns:any[]
}

const Table:React.FC<IProps>  = ({data=[],columns=[]}) => {

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="w-full rounded-md border border-blue-500 ">
      <table className='w-full   '>
        <thead className='py-3  rounded-md bg-blue-500 text-white'>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th className='py-3 px-1 md:px-2 border-r border-white' key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className='px-2'>
          {table.getRowModel().rows.map(row => (
            <tr className='px-2 transition-all duration-300 hover:bg-blue-100 text-center py-2 border border-gray-200' key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td className='py-3' key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        
      </table>
      <div className="h-4" />
     
    </div>
  )
}


export default Table