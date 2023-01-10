import { useState } from 'react'
import Blog2 from '../components/Blog2'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function Home({ blogg }) {
  return (
    <div>
      <div className='absolute left-0 bg-lime-500 rounded-full z--1 bg-gradient-to-r from-red-400 to-green-400'></div>
      <Navbar/>
      <div style={{padding: '0px 20vw'}} className="mt-20">
        <div className="flex justify-end relative">
          <div style={{left: '-5vw'}} className="absolute top-0 w-3/5 h-full flex items-center justify-center">
            <div className="h-4/6 w-full glass"></div>
          </div>
          <div className="w-4/6">
            <img src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/photo-1465310477141-6fb93167a273-768x512.jpeg" alt="" className="w-full rounded-lg" />
          </div>
        </div>
      </div>


    </div>
  )
}


export async function getServerSideProps() {
  const res = await fetch('https://sore-cyan-twill.cyclic.app/api/blogs')
  const blogg = await res.json()

  return { props: { blogg } }
}

