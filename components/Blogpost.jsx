import React from 'react'
import Markdown from 'markdown-to-jsx';
import High from './High';
import Icons from './Icons';




function Blogpost({blog,openit}) {
  return (
    <>
    { blog && <div className='mt-32 px-4 lg:px-32 flex flex-col items-center'>
      <div className="max-w-4xl">
      <div className="flex items-center gap-x-4 mb-6">
        <div className="bg-indigo-50 text-indigo-700 px-2 py-1 text-sm cursor-pointer hover:bg-indigo-100 transition rounded-xl">Gaming</div>
        <div className="bg-amber-50 text-amber-700 px-2 py-1 text-sm cursor-pointer hover:bg-amber-100 transition rounded-xl">Lifestyle</div>
        <div className="bg-green-50 text-green-700 px-2 py-1 text-sm cursor-pointer hover:bg-green-100 transition rounded-xl">Shopping</div>
      </div>
      <h1 className="font-extrabold tracking-normal text-3xl lg:text-4xl text-slate-900">Brooches - Decorative Pins, Clasps, & Kilt</h1>
      <div className="text-lg lg:leading-normal lg:text-2xl text-slate-700 mt-2">A brooch is a decorative pin or clasp, usually made of metal, plastic, shell, precious stone or wood</div>
      <div className="flex justify-end mt-2">
        <Icons likess={blog.likes} id={blog._id} blog={blog} openit={openit} comment={true}/>
      </div>
        <img className='mt-6 w-full rounded-md' src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-3800412-1.jpeg" alt="" />
        <br /><br />
          <Markdown className="prose prose-lg lg:prose-xl prose-slate prose-pre:p-0 prose-pre:m-0 prose-headings:mb-5" options={{ wrapper: 'article' , overrides: {code: {component: High}} }}>
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