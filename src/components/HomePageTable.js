"use client"
// import tabledata from './mock_data.json';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import Link from 'next/link';
import useSWR from 'swr'
import { fetcher } from '@/helper/fetcher';

const columnHelper = createColumnHelper()

const columns = [
    columnHelper.accessor("province", {
        header: "موقعیت"
    }),
    columnHelper.accessor("job", {
        header: "وظیفه"
    }),
    columnHelper.accessor("username", {
        header: "نام خاص"
    }),
    columnHelper.accessor("name", {
        header: "نام"
    }),
    columnHelper.accessor("id", {
        header: "شماره آیدی"
    }),
]


const HomePageTable = () => {
    const { data, error, isLoading } = useSWR('/api/allUsers',fetcher)

    const table = useReactTable({
        data: data?.user,
        columns,
        getCoreRowModel: getCoreRowModel()
    })

    if(error){
        return <p>{error.message}</p>
    }

    if(isLoading) return <h1 className='bg-blue-500 text-white h-full flex justify-center items-center text-4xl '>Loading...</h1>

    return (
        <div>
            <div className="text-right overflow-auto overflow-x-scroll md:overflow-x-hidden px-4 max-h-fit">
                <table className='font-persionFont text-white w-full'>
                    <thead className='border-4 border-white'>
                        {
                            table.getHeaderGroups().map((headerGroup) => {
                                return <tr key={headerGroup.id}>
                                    {
                                        headerGroup.headers.map((headerColumn) => {
                                            return <th key={headerColumn.id} className='border-white border whitespace-nowrap text-center bg-blue-500 px-4 py-2'>{flexRender(headerColumn.column.columnDef.header, headerColumn.getContext())}</th>
                                        })
                                    }
                                </tr>
                            })
                        }

                    </thead>
                    <tbody>
                        {
                            table.getRowModel().rows.map((row) => {
                                return <tr key={row.id}>
                                    {
                                        row.getVisibleCells().map((tableRowData) => {
                                            return <td key={tableRowData.id} className='whitespace-nowrap p-2 text-center border border-white md:text-lg text-base bg-blue-700'>{
                                                tableRowData.column.id === 'username' ? <Link href={`/profile/${tableRowData.getValue(tableRowData.id)}`} className='inline-block w-full h-full'>{flexRender(tableRowData.column.columnDef.cell, tableRowData.getContext())}</Link> : flexRender(tableRowData.column.columnDef.cell, tableRowData.getContext())
                                            }</td>
                                        })
                                    }
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
            <div className='flex justify-between m-4 font-persionFont'>
                <button className='bg-blue-500 text-white w-fit md:px-10 px-7 py-2 text-sm md:text-xl rounded-md font-bold'>قبلی</button>
                <p className='md:text-xl'>صفحه 1 از 50</p>
                <button className='bg-blue-500 text-white w-fit md:px-10 px-7 py-2 text-sm md:text-xl rounded-md font-bold'>بعدی</button>
            </div>
        </div>
    )
}

export default HomePageTable