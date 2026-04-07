import React, { useEffect } from 'react'
import "../style/feed.scss"
import Post from '../components/Post'
import { usePost } from '../hooks/usePost'
import Nav from '../../shared/components/Nav'

const Feed = () => {

    const { feed, handleGetFeed, loading, handleLike, handleUnLike } = usePost()

    useEffect(() => {
        handleGetFeed()
    }, [])

    if(loading || !feed){
        return <h1>loading...</h1>
    }

  return (
    <main className='feed-page'>
        <Nav />
        <div className="feed">
            {feed.map((post) => {
                return <Post user={post.user} post={post} loading={loading} handleLike={handleLike} handleUnLike={handleUnLike}/>
            })}
        </div>
    </main>
  )
}

export default Feed
