'use client'
import React,{useState, useEffect} from 'react'
import { list_of_districts } from './ProvinceName'
import { useRouter } from 'next/navigation'
import Button from './Button'

const SearchTable = () => {
    const router = useRouter()
    const [query,setQuery ] = useState('');
    const [provinceNameState,setProvinceNameState] = useState()

    const searchUserByJob = () => {
        router.push(`/search?job=${query}`)
    }
    const searchUserByProvince = () => {
        router.push(`/search?province=${provinceNameState}`)
    }

    return (
        <div className='px-4 md:px-0 font-persionFont md:my-4 md:mx-2'>
            <div className='flex flex-col border border-gray-500'>
                <p className='p-3 w-full bg-gray-100 border border-gray-500 text-sm md:text-lg text-right'>
                    سرچ کردن
                </p>
                <label
                    htmlFor='search'
                    className='p-3 text-sm font-bold text-right tracking-wider md:text-xl'
                >
                    دنبال چی میگردین نجار لوله کش ...؟
                </label>
                <div className='w-[90%] mx-auto md:w-full md:px-3'>
                    <input
                        onChange={(e) => setQuery(e.target.value)}
                        type='text'
                        className='outline-none md:text-xl text-base border-gray-500 border text-right p-1 ml-2 md:w-full md:p-1 md:ml-0'
                        placeholder='دنبال چی میگردین؟؟'
                    />
                </div>
                {/* <button onClick={searchUserByJob} 
                className='bg-blue-700 w-fit m-3 px-7 py-2 text-sm md:text-lg text-white rounded-md ml-5 md:ml-3'>
                    Search
                </button> */}
                <Button text='Search' handler={searchUserByJob} style='bg-blue-700 w-fit m-3 px-7 py-2 text-sm md:text-lg text-white rounded-md ml-5 md:ml-3'/>
            </div>

            <div className='flex flex-col border border-gray-500 my-5'>
                <p className='p-3 w-full bg-gray-100 border border-gray-500 text-sm md:text-lg text-right'>
                    فلتر کردن کارمندان
                </p>
                <div className=' flex flex-col my-2'>
                    <label
                        htmlFor='selectlocation'
                        className='md:my-4 px-3  my-2 text-sm font-bold text-right'
                    >
                        فلتر با ولایت
                    </label>
                    <select
                        name='selectlocation'
                        id='selectlocation'
                        className='border-2 outline-none mx-3 text-lg md:text-xl text-center'
                        onChange={event => setProvinceNameState(event.target.value)}
                        // onClick={searchUserByProvince}
                    >
                        {list_of_districts.map(item => {
                            return (
                                <option 
                                className='text-lg' value={item.label} key={item.value}>
                                    {item.value}
                                </option>
                            )
                        })}
                    </select>
                    <Button text='Search By Province' handler={searchUserByProvince} style={'bg-blue-700 w-fit m-3 px-7 py-2 text-sm md:text-lg text-white rounded-md ml-5 md:ml-3'}/>
                </div>

            </div>
        </div>
    )
}

export default SearchTable
