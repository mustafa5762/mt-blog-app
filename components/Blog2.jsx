import React, { useEffect } from 'react'
import Link from 'next/link'
import Icons from './Icons';

function Blog2({blog}) {

  useEffect(() => {
    const first3 = blog.description.slice(0, 30);
    console.log(first3);
  }, [])
  
  return (
    <div className='Hb-wrapper'>


          {/* <div className="Hb-author">
            <div className="Hb-author-img">
              <img src="https://lh3.googleusercontent.com/a/ALm5wu1ofKCQxLq9Rb7N_CNqSiJafb6e5WcGmZukRu7u=s96-c" alt="" />
            </div>
            <div className="Hb-author-info">
              <div className="Hb-author-name">Mustafa Zahid</div>
              <div className="Hb-date">23 Apr 2021</div>
            </div>
  </div> */}


          <div className="pt-6 pb-2 items-center gap-x-8 border-b border-gray-300">
            <Link href={"/blogs/" + blog._id}>
              <img className='w-full h-48 object-cover object-center rounded-md' src={blog.image} alt="" />
            </Link>
            <div>
            <Link href={"/blogs/" + blog._id}>
              <div className="text-xl font-bold text-gray-900 mt-2.5">{blog.title}</div>
            </Link>
              <div className="text-gray-500 text-lg truncate">
                {blog.short_description}
              </div>
              <div>
              </div>
              <Icons likess={blog.likes} id={blog._id} blog={blog} comment={false}/>
            </div>
          </div>


          
        
    </div>
  )
}

export default Blog2