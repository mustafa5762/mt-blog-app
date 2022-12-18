import { useState } from 'react'
import Blog2 from '../components/Blog2'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function Home({ blogg }) {

  const [open, setopen] = useState(false)

  return (
    <div>
      <Sidebar/>
      <Navbar/>

      <div className="flex items-center my-10 px-32 mrr gap-x-6">
        <div className="flex items-center h-12 border border-gray-300 rounded-full w-96">
          <div className="text-gray-600 p-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-5 h-5'>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <input type="text" placeholder='Search' className='px-2 h-full rounded-full flex-1 border-none focus:outline-none text-gray-800' />
        </div>
        <div className="flex items-center gap-x-4">
          <div className="text-sm px-4 py-2 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition cursor-pointer">Design</div>
          <div className="text-sm px-4 py-2 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition cursor-pointer">Development</div>
          <div className="text-sm px-4 py-2 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition cursor-pointer">React.js</div>
          <div className="text-sm px-4 py-2 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition cursor-pointer">Marketing</div>
        </div>
      </div>


      <div className="flex items-center justify-between px-32 mrr">
        <h4 className='font-semibold text-gray-900 text-lg tracking-wide'>Articles</h4>
        <div>
          <div className="flex items-center gap-x-2 border border-gray-300 px-5 py-2.5 rounded-full">
            <span className='text-gray-800 font-medium'>Newest</span>
            <span className='text-gray-600'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="px-32 mrr my-5">
        <div className="border-t border-gray-300 h-px"></div>
      </div>

      <div className="px-32 mrr grid grid-cols-3 gap-6">
        {blogg && blogg.map(blog => <Blog2 blog={blog}/>)}
      </div>

    </div>
  )
}


export async function getServerSideProps() {
  const res = await fetch('https://sore-cyan-twill.cyclic.app/api/blogs')
  const blogg = await res.json()

  return { props: { blogg } }
}

