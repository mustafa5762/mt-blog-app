import React from 'react'
import Markdown from 'markdown-to-jsx';
import High from './High';




function Blogpost({blog}) {
  return (
    <>
    { blog && <div style={{marginLeft: '15vw'}} className='mt-32 px-32'>
      <div className="max-w-3xl">
      <h1 className="font-bold text-4xl text-gray-900">{blog.title}</h1>
      <div className="text-2xl text-gray-700 mt-2">{blog.short_description}</div>
        <img className='mt-6 w-full rounded-md' src={blog.image} alt="" />
        <br /><br />
          <Markdown className="prose prose-xl prose-p:text-gray-900 prose-pre:p-0 prose-pre:m-0 prose-headings:mb-5" options={{ wrapper: 'article' , overrides: {code: {component: High}} }}>
            {blog.description}
          </Markdown>
          <div className="Divider"></div>
          <br /><br />
        </div>
    </div>}
    </>
  )
}

export default Blogpost