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
        <Link href={"/blogs/" + blog._id}>


          {/* <div className="Hb-author">
            <div className="Hb-author-img">
              <img src="https://lh3.googleusercontent.com/a/ALm5wu1ofKCQxLq9Rb7N_CNqSiJafb6e5WcGmZukRu7u=s96-c" alt="" />
            </div>
            <div className="Hb-author-info">
              <div className="Hb-author-name">Mustafa Zahid</div>
              <div className="Hb-date">23 Apr 2021</div>
            </div>
  </div> */}


          <div className="Hb-bottom">
            <div className="Hb-info">
              <div className="Hb-title">{blog.title}</div>
              <div className="Hb-desc">
                {blog.description.substring(0,200)}
              </div>
              <br />
              <div style={{display:"flex"}}>
                <div className="Button">Read More</div>
              </div>
            </div>
            <div className="Hb-img">
              <img src={blog.image} alt="" />
            </div>

          </div>


          
        </Link>
    </div>
  )
}

export default Blog2