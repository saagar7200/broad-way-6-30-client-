/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import * as React from 'react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

interface IProps {
  data: any[],
  columns: any[],
  isLoading: boolean
}

const Table: React.FC<IProps> = ({ data = [], columns = [], isLoading = false }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="w-full rounded-md border border-blue-500 overflow-x-auto">
      <table className="w-full table-auto">
        <thead className="bg-blue-500 text-white">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th className="py-3 px-2 border-r border-white text-left" key={header.id}>
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

        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={columns.length} className="text-center py-4">
                Fetching data...
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="text-center py-4 text-gray-500">
                No data available
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map(row => (
              <tr
                key={row.id}
                className="transition-all duration-300 hover:bg-blue-100 text-center border-t border-gray-200"
              >
                {row.getVisibleCells().map(cell => (
                  <td className="py-3 px-2" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="h-4" />
    </div>
  )
}

export default Table
