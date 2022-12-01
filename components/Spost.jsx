import React from 'react'

function Spost({blog}) {
  return (
    <div>
        <div className="Spost-wrapper">
            <div className="Spost-C">
                <div className="Spost-top">
                    <div className="Spost-top-img">M</div>
                    <div className="Spost-top-un">{blog.author.name}</div>
                    <div className="Spost-top-date">. Sep 23, 2021</div>
                </div>
                <div className="Spost-bottom">
                    {blog.title}
                </div>
            </div>
            <div className="Spostimg">
                <img src={blog.coverImage.url} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Spost