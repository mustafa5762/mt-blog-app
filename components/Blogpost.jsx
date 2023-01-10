import React from 'react'
import Markdown from 'markdown-to-jsx';
import High from './High';
import Icons from './Icons';




function Blogpost({blog,openit}) {
  return (
    <>
    { blog && <div className='mt-32 px-4 lg:px-32 flex flex-col items-center'>
      <div className="max-w-5xl">
      <div className="flex items-center gap-x-4 mb-6">
        <div className="bg-indigo-50 text-indigo-700 px-2 py-1 text-sm cursor-pointer hover:bg-indigo-100 transition rounded-xl">Gaming</div>
        <div className="bg-amber-50 text-amber-700 px-2 py-1 text-sm cursor-pointer hover:bg-amber-100 transition rounded-xl">Lifestyle</div>
        <div className="bg-green-50 text-green-700 px-2 py-1 text-sm cursor-pointer hover:bg-green-100 transition rounded-xl">Shopping</div>
      </div>
      <h1 className="font-extrabold text-3xl lg:text-4xl text-slate-800">Custom Cursor in Next.js (Cuberto Cursor)</h1>
      <div className="text-lg lg:leading-normal lg:text-2xl text-slate-600 mt-2">{blog.short_description}</div>
      <div className="flex justify-end mt-2">
        <Icons likess={blog.likes} id={blog._id} blog={blog} openit={openit} comment={true}/>
      </div>
        <img className='mt-6 w-full rounded-md' src={blog.image} alt="" />
        <br /><br />
          <Markdown className="prose prose-md lg:prose-xl prose-slate prose-p:font-serif prose-pre:p-0 prose-pre:m-0 prose-headings:mb-5" options={{ wrapper: 'article' , overrides: {code: {component: High}} }}>
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