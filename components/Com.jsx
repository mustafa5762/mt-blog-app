import React, { useState } from 'react'
import {motion} from 'framer-motion'
import axios from 'axios'

function Com({comment,user}) {

    const [likes, setlikes] = useState(comment.likes)
    const [replies, setreplies] = useState(comment.replies)

    const Like = async (_id) => {
        if (user && user.email != null) {
           try {
               const data = {
                   id: _id,
                   user: user.email
               };
               setlikes([...likes, user.email])
               await axios.post('https://ecomm-backend2.herokuapp.com/api/commentsl/', data)
           } catch (error) {
               console.log(error)
           }
        }
        else {
           alert('Plz Login')
        }
    }

    const unLike = async (_id) => {
        if (user && user.email != "null") {
           try {
               const data = {
                   id: _id,
                   user: user.email
               };
               setlikes(likes.filter((like) => like !== user.email ))
               await axios.post('https://ecomm-backend2.herokuapp.com/api/commentsul/', data)
           } catch (error) {
               console.log(error)
           }
        }
        else {
           alert('Plz Login')
        }
    }

    const reply = async (_id) => {
        const data = {
            id: _id,
            body: 'input',
            added_by: {
                username: user.displayName,
                email: user.email,
                image: user.photoURL
            }
        }
        setreplies([...replies, data])
        const res = await axios.post('http://localhost:5000/api/reply', data)
        console.log(res)
    }
    
  return (
        <div className='comment'>
            <div className="c-top">
                <div className="c-img">
                    <img referrerPolicy='noreferrer' src={comment.added_by.image} alt="" />
                </div>
                <div className="c-info">
                    <div className="c-username">{comment.added_by.username}</div>
                    <div className="c-date">28 Nov</div>
                </div>
            </div>
            <div className="c-mid">
                {comment.body}
            </div>
            <div className="comment-bottom">
                <div className="cb-left">
                    <div className="cb-icon">
                        {
                        likes.indexOf(user.email) > -1
                        ?
                        <motion.span onClick={() => unLike(comment._id)} initial={{scale:0}} animate={{scale:1}} transition={{duration:0.3,type:'spring',stiffness:200}} className="Icon" style={{color: '#dc2626'}}>
                            <svg style={{color:'#dc2626'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="whwh">
                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </svg>
                        </motion.span>
                        :
                        <span onClick={() => Like(comment._id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="whwh">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>                       
                        </span>
                        }
                        <span style={{marginLeft: 4}}>{likes.length}</span>
                    </div>
                    <div className="cb-icon">
                        <span onClick={() => reply(comment._id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="whwh">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                            </svg>
                        </span>
                        <span style={{marginLeft: 4}}>{replies.length}</span>
                    </div>
                </div>
                <div className="reply">Reply</div>
            </div>
        </div>
  )
}

export default Com