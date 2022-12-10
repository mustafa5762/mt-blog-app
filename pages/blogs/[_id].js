import React, { useState } from 'react'
import Blogpost from '../../components/Blogpost';
import Navbar from '../../components/Navbar';
import Icons from '../../components/Icons'
import Comment from '../../components/Comment';
import Login from '../../components/Login'

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
      <Navbar setlog={setlog}/>
       <div className="Sidebar-Left">
        <Icons likess={blog.likes} openit={openit} id={blog._id}/>
       </div>
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