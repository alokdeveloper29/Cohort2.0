import React from 'react'
import { usePost } from '../hooks/usePost'

const Post = ({ user, post, loading, handleLike, handleUnLike}) => {

  return (
    <div className="posts">
                <div className="user">
                    <img src={user.profileImage} alt="" />
                    <p>{user.username}</p>
                </div>
                <img src={post.imgUrl} alt="" />
                <div className="icons">
                    <div className="left">
                        <div><i 
                        className={`ri-heart-line ${post.isLiked ? "like" : ""}`}
                        onClick={() => {post.isLiked ? handleLike(post._id) : handleUnLike(post._id)}}>
                        </i></div>
                        <div><i className="ri-chat-1-line"></i></div>
                        <div><i className="ri-share-line"></i></div>
                    </div>
                    <div className="right">
                        <div><i className="ri-bookmark-line"></i></div>
                    </div>
                </div>
                <div className="bottom">
                    <p className='caption'>{post.caption}</p>
                </div>
    </div>
  )
}

export default Post