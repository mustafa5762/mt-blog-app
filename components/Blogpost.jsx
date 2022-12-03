import React from 'react'
import Markdown from 'markdown-to-jsx';
import High from './High';



function Blogpost({blog}) {
  return (
    <>

    { blog && <div className='Blogpost-wrapper'>
      <div className="Content">
      <h1 className="title">8 React Open-Source projects to learn and become a React.js Developer</h1>
      <div className="Short">{blog.short_description}</div>
        <img src={blog.image} alt="" />
        <br /><br />
          <Markdown options={{ wrapper: 'article' , overrides: {code: {component: High}} }}>
            {blog.description}
          </Markdown>
          <br /><br />
          <div className="Divider"></div>
          <br /><br />
        </div>
    </div>}
    </>
  )
}

export default Blogpost