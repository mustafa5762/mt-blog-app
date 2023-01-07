import React from 'react'
import Markdown from 'markdown-to-jsx';
import High from './High';
import Icons from './Icons';




function Blogpost({blog,openit}) {
  return (
    <>
    { blog && <div className='mt-32 px-4 lg:px-32 flex flex-col items-center'>
      <div className="max-w-4xl">
      <h1 className="font-bold text-3xl lg:text-4xl text-slate-900">Brooches - Decorative Pins, Clasps, & Kilt Brooches</h1>
      <div className="text-xl lg:text-2xl text-slate-700 mt-2">A brooch is a decorative pin or clasp, usually made of metal, plastic, shell, precious stone or wood</div>
      <div className="flex justify-end mt-2">
        <Icons likess={blog.likes} id={blog._id} blog={blog} openit={openit} comment={true}/>
      </div>
        <img className='mt-6 w-full rounded-md' src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-3800412-1.jpeg" alt="" />
        <br /><br />
          <Markdown className="prose prose-md lg:prose-xl prose-p:text-slate-600 prose-pre:p-0 prose-pre:m-0 prose-headings:mb-5" options={{ wrapper: 'article' , overrides: {code: {component: High}} }}>
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