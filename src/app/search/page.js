"use client"

import SearchTable from '@/components/SearchTable'
import HomePageTable from '@/components/HomePageTable'
import { useSearchParams } from 'next/navigation'

import React from 'react'

const Search = () => {

  const searchParams = useSearchParams()
  const jobsearchparam = searchParams.get('job') 
  const provinceSearchParam = searchParams.get('province')

  return (
    <main className="min-h-screen pt-24 grid grid-cols-1 md:grid-cols-3 md:px-4">
      <div>
        <SearchTable />
      </div>
      <div className='md:col-span-2 md:w-full'>
        <HomePageTable url={jobsearchparam ? `/api/search?job=${jobsearchparam}` : `/api/search?province=${provinceSearchParam}`} />
      </div>
    </main>
  )
}

export default Search