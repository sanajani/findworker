'use client'
import React from 'react'
import { list_of_districts } from './ProvinceName'

const SearchTable = () => {
    return (
        <div className='px-4 md:px-0 font-persionFont md:my-4 md:mx-2'>
            <div className='flex flex-col border border-gray-500'>
                <p className='p-3 w-full bg-gray-100 border border-gray-500 text-sm md:text-lg text-right'>سرچ کردن</p>
                <label htmlFor="search" className='p-3 text-sm font-bold text-right tracking-wider md:text-xl'>دنبال چی میگردین؟؟</label>
                <div className='w-[90%] mx-auto md:w-full md:px-3'>
                    <input type="text" className='outline-none md:text-xl text-base border-gray-500 border text-right p-1 ml-2 md:w-full md:p-1 md:ml-0' placeholder='دنبال چی میگردین؟؟' />
                </div>
                <button className='bg-blue-700 w-fit m-3 px-7 py-2 text-sm md:text-lg text-white rounded-md ml-5 md:ml-3'>Search</button>
            </div>

            <div className='flex flex-col border border-gray-500 my-5'>
    <p className='p-3 w-full bg-gray-100 border border-gray-500 text-sm md:text-lg text-right'>فلتر کردن کارمندان</p>
    <div className=' flex flex-col my-2'>
        <label htmlFor='selectlocation' className='md:my-4 px-3  my-2 text-sm font-bold text-right'>فلتر با ولایت</label>
        <select name="selectlocation" id="selectlocation">
            {
                list_of_districts.map((item) => {
                   return <option value={item.label} key={item.value}>{item.value}</option>
                })
            }
        </select>
    </div>
    </div>
        </div>
    )
}

export default SearchTable