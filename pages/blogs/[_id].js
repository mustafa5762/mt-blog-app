import React, { useState } from 'react'
import Blogpost from '../../components/Blogpost';
import Navbar from '../../components/Navbar';
import Comment from '../../components/Comment';
import Login from '../../components/Login'
import { AnimatePresence } from 'framer-motion';

function Blog({blog}) {

  const [open, setopen] = useState(false)
  const [log, setlog] = useState(false)

  const openit = () => {
    setopen(!open);
  }

  return (
    <div>
      <AnimatePresence>
        { log && <Login setlog={setlog}/> }
      </AnimatePresence>
      <div style={{bottom:15,left:'33%'}} className='fixed bg-gray-100 border border-gray-300 flex justify-center shadow-2xl rounded-full'>
        
      </div>
      <Navbar setlog={setlog} />
      <Blogpost openit={openit} blog={blog}/>
      <AnimatePresence>
        { open && <Comment id={blog._id} open={open}/>}
      </AnimatePresence>
    </div>
  )
}

export default Blog


export async function getServerSideProps(context) {

  const {params} = context;
  const {_id} = params
  
  const res = await fetch('https://sore-cyan-twill.cyclic.app/api/blog/' + _id)
  const blog = await res.json()


  return { props: { blog } }
}