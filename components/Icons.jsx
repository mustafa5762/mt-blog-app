import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import axios from 'axios'
import {motion} from 'framer-motion'
import { useStatePersist } from 'use-state-persist';

function Icons({id, openit, likess, blog, comment}) {

    const [likes, setlikes] = useState(likess)
    const [user, loading] = useAuthState(auth);
    const [saved, setsaved] = useStatePersist('saved', [])
    

    const Like = async () => {
         if (user && user.email != null) {
            try {
                const data = {
                    id: id,
                    user: user.email
                };
                setlikes([...likes, user.email])
                await axios.post('https://sore-cyan-twill.cyclic.app/api/blogl/', data)
            } catch (error) {
                console.log(error)
            }
         }
         else {
            alert('Plz Login')
         }
    }

    const unLike = async () => {
        if (user && user.email != "null") {
           try {
               const data = {
                   id: id,
                   user: user.email
               };
               setlikes(likes.filter((like) => like !== user.email ))
               await axios.post('https://sore-cyan-twill.cyclic.app/api/blogul/', data)
           } catch (error) {
               console.log(error)
           }
        }
        else {
           alert('Plz Login')
        }
   }

   const addtoSaved = async (blog) => {
        const found = saved.some(el => el._id === blog._id);
        if (found) {
            alert('already added')
        }
        else {
            setsaved([...saved, blog])
        }
   }

   const removeSaved = async (_id) => {
    setsaved(saved.filter((el) => el._id !== _id ))
   }

   const check = (_id) => {
    const found = saved.some(el => el._id === _id);
    return found;
   }

  return (
    <div>
        <div className="flex p-1">
            { 
            user && likes && likes.indexOf(user.email) > -1 ?
            <motion.div initial={{scale:0}} animate={{scale:1}} transition={{duration:0.3,type:'spring',stiffness:200}} onClick={unLike} className="flex cursor-pointer items-center text-red-500 p-3 m-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 lg:w-6 lg:h-6">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
                <span className='ml-1.5 text-base text-slate-500'>{likes.length}</span>
            </motion.div>
            :
            <div onClick={Like} className="flex cursor-pointer items-center text-slate-600 p-3 m-1 hover:bg-red-100 hover:text-red-900 rounded-full transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <span className='ml-1.5 text-base'>{likes.length}</span>
            </div>
            }
            { comment && <div onClick={openit} className="text-slate-600 p-3 m-1 hover:bg-orange-100 hover:text-orange-900 rounded-full transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
            </svg>
            </div>}
            {
                check && check(blog._id) ?
                <motion.div initial={{scale:0}} animate={{scale:1}} transition={{duration:0.3,type:'spring',stiffness:200}} onClick={() => removeSaved(blog._id)} className="text-lime-700 p-3 m-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 lg:w-6 lg:h-6">
                        <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
                    </svg>
                </motion.div>
                :
                <div onClick={() => addtoSaved(blog)} className="text-slate-600 p-3 m-1 hover:bg-green-100 hover:text-green-900 rounded-full transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                    </svg>
                </div>
            }
            <div className="Dropdown">
            <div className="text-slate-600 p-3 m-1 hover:bg-purple-100 hover:text-purple-900 rounded-full transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                </svg>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Icons