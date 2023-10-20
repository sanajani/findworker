import HomePageTable from "./components/HomePageTable"
import SearchTable from "./components/SearchTable"


export default function Home() {
  return (
    <main className="min-h-screen pt-24 grid grid-cols-1 md:grid-cols-3 md:px-4">
      <div>
        <SearchTable />
      </div>
      <div className='md:col-span-2 md:w-full'>
        <HomePageTable />
      </div>
    </main>
  )
}
