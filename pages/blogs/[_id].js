import React, { useState } from 'react'
import Blogpost from '../../components/Blogpost';
import Navbar from '../../components/Navbar';
import Icons from '../../components/Icons'
import Comment from '../../components/Comment';
import Login from '../../components/Login'
import Sidebar from '../../components/Sidebar'

function Blog({blog}) {

  const [open, setopen] = useState(false)
  const [log, setlog] = useState(false)

  const openit = () => {
    setopen(!open);
  }

  return (
    <div>
      { log && <Login setlog={setlog}/> }
      <div className={open && "blur"}>
      <Sidebar/>
      <div className='Sidebar-Left'>
        <Icons likess={blog.likes} id={blog._id} blog={blog} openit={openit}/>
      </div>
      <Navbar setlog={setlog} />
      <Blogpost blog={blog}/>
      </div>
      { open && <Comment id={blog._id} open={open}/>}
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