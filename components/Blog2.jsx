import React from 'react'
import Link from 'next/link'

function Blog2({blog}) {
  return (
    <div>
        <Link href={"/blogs/" + blog._id}>
        <div className="HB-wrapper">
            <div className="HB-img">
                <img src={blog.image} alt="" />
            </div>
            <div className="HB-info">
                <div className="HB-name">{blog.title}</div>
                <div className="HB-description">{blog.short_description}</div>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default Blog2