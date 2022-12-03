import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import Com from './Com';

function Comment({id}) {

    const [comments, setcomments] = useState(null)
    const [input, setinput] = useState(null)
    const [user, loading] = useAuthState(auth);

    const fetchComments = async () => {
        const res = await axios.get('https://sore-cyan-twill.cyclic.app/api/comments/' + id)
        setcomments(res.data)
    }

    useEffect(() => {
      fetchComments()
    }, [])

    const postComment = async () => {
        const data = {
            body: input,
            blogID: id,
            added_by: {
                username: user.displayName,
                email: user.email,
                image: user.photoURL
            }
        }
        const com = await axios.post('https://sore-cyan-twill.cyclic.app/api/comments', data)
        setcomments([...comments, com.data])
    }
    
    
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
            <motion.div initial={{x:800}} animate={{x:0}} transition={{duration:1}} className="Comments">
                { comments && <h2>Comments ({comments.length})</h2>}
                <div className="post-comment">
                    {<div>
                    <div className="wc-mid">
                        <textarea onChange={(e) => setinput(e.target.value)} placeholder='Write a Comment' rows="3"></textarea>
                    </div>
                    </div>}
                    <div className="wc-bottom">
                        <div onClick={postComment} className="wc-button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="whwh">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
                <br /><br />
                {   comments &&
                    comments.map(comment => 
                        <Com comment={comment} user={user}/>   
                    )
                }
            </motion.div>
    </div>
  )
}

export default Comment