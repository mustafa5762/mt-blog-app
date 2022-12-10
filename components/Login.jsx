import React from 'react'
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, linkWithPopup } from 'firebase/auth'
import {auth} from '../utils/firebase'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'

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
    <div className='Login-wrapper'>
      <div className="Login">
        <svg onClick={() => setlog(false)} xmlns="http://www.w3.org/2000/svg" height={24} width={24} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <div className='Google' onClick={GoogleLogin}>
          <span className='Googlei'><FcGoogle/></span>
          <span>Login with Google</span>
        </div>
        <div className='Facebook' onClick={FacebookLogin}>
          <span className='Facebooki'><BsFacebook color='#3b5998'/></span>
          <span>Login with Facebook</span>
        </div>
      </div>
    </div>
  )
}

export default Login