import React from 'react'
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from 'firebase/auth'
import {auth} from '../utils/firebase'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'

const Login = () => {

    const googleProvider = new GoogleAuthProvider();
    const fbProvider = new FacebookAuthProvider();

    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log(result)
        } catch (error) {
           console.log(error) 
        }
    }

    const FacebookLogin = async () => {
      try {
          const result = await signInWithPopup(auth, fbProvider);
          console.log(result)
      } catch (error) {
         alert(error) 
      }
    }

  return (
    <div className='Login-wrapper'>
      <div className="Login">
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