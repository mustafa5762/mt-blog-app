import React from 'react'
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, linkWithPopup } from 'firebase/auth'
import {auth} from '../utils/firebase'
import {BsFacebook, BsGoogle} from 'react-icons/bs'

const Login = ({setlog}) => {

    const googleProvider = new GoogleAuthProvider();
    const fbProvider = new FacebookAuthProvider();

    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            setlog(false)
        } catch (error) {
           alert(error) 
        }
    }

    const FacebookLogin = async () => {
      try {
          const result = await signInWithPopup(auth, fbProvider);
          setlog(false)
      } catch (error) {
         alert(error) 
      }
    }

  return (
    <div style={{backgroundColor: 'rgba(255,255,255,0.85)'}} className='fixed w-full h-screen flex items-center justify-center'>
      <div className="bg-white shadow-2xl border border-slate-300 p-20 rounded-xl relative">
        <svg onClick={() => setlog(false)} xmlns="http://www.w3.org/2000/svg" height={24} width={24} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{top: 15, right:15}} className="w-6 h-6 text-slate-500 absolute">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <div className='flex items-center py-4 px-20 bg-lime-600 text-white tracking-wide font-medium rounded-full cursor-pointer hover:bg-lime-700 transition' onClick={GoogleLogin}>
          <span className='text-white'><BsGoogle/></span>
          <span className='ml-5'>SignIn with Google</span>
        </div>
        <div className='mt-6 flex items-center py-4 px-20 bg-lime-600 text-white tracking-wide font-medium rounded-full cursor-pointer hover:bg-lime-700 transition' onClick={FacebookLogin}>
          <span className='text-white'><BsFacebook color='#fff'/></span>
          <span className='ml-5'>SignIn with Facebook</span>
        </div>
      </div>
    </div>
  )
}

export default Login