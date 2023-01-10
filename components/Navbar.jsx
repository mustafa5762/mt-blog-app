import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';


function Navbar({setlog}) {

  const [user, loading] = useAuthState(auth);
  const [open, setopen] = useState(false)

  return (
    <div>
      <div className="hidden h-10 w-full bg-lime-600 text-white font-medium text-sm flex items-center justify-center">Get Started With Our Blog To Approve Adsense</div>
        <div className="flex justify-betwee items-center h-20 px-5 lg:px-32 border-b border-gray-300 z-50 bg-white">
          <div className="text-xl lg:text-2xl font-black text-gray-800">READER</div>
          <div className="hidden lg:flex items-center gap-x-8 ml-16 mt-1">
            <div className="text-gray-500 font-medium tracking-wide cursor-pointer hover:text-lime-600 transition">Home</div>
            <div className="text-gray-500 font-medium tracking-wide cursor-pointer hover:text-lime-600 transition">About</div>
            <div className="text-gray-500 font-medium tracking-wide cursor-pointer hover:text-lime-600 transition">Lifestyle</div>
            <div className="text-gray-500 font-medium tracking-wide cursor-pointer hover:text-lime-600 transition">Shopping</div>
            <div className="text-gray-500 font-medium tracking-wide cursor-pointer hover:text-lime-600 transition">Tutorials</div>
            <div className="text-gray-500 font-medium tracking-wide cursor-pointer hover:text-lime-600 transition">Templates</div>
          </div>
          { user &&  <div className='flex gap-6 items-center ml-auto'>
            <div className="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <div className="relative">
              <img onClick={() => setopen(!open)} referrerPolicy='no-referrer' className='w-8 h-8 rounded-full' src={user.photoURL} alt="" />
              {
                open &&
                <div class="p-1 absolute right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow-2xl border border-gray-300">
                  <div class="py-3 px-4 text-sm text-gray-900">
                    <div>{user.displayName}</div>
                    <div class="font-medium truncate">{user.email}</div>
                  </div>
                  <ul class="py-1 text-sm text-gray-700" aria-labelledby="avatarButton">
                    <li>
                      <a class="rounded-md block py-2 px-4 hover:bg-lime-600 hover:text-white transition cursor-pointer">Reading List</a>
                    </li>
                    <li>
                      <a class="rounded-md block py-2 px-4 hover:bg-lime-600 hover:text-white transition cursor-pointer">Settings</a>
                    </li>
                  </ul>
                  <div class="py-1">
                    <a onClick={() => auth.signOut()} class="rounded-md block py-2 px-4 text-sm text-gray-700 hover:bg-lime-600 hover:text-white transition cursor-pointer">Sign out</a>
                  </div>
                </div>
              }
            </div>
          </div>}
          {
            !user &&
            <div className='ml-auto'>
              <button onClick={() => setlog(true)} type="button" class="text-white bg-lime-600 hover:bg-lime-700 transition focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full px-5 py-2.5 tracking-wide text-sm lg:text-base">Get Started</button>
            </div>
          }
        </div>
    </div>
  )
}

export default Navbar