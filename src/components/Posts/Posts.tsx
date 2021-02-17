import React from 'react'
import { Post } from '../Post/Post'

interface PostsProps {
  posts: typeof Post[]
}

export const Posts: React.FC = ({posts}: PostsProps) => {
  const injectData = () => {
    if(posts){

      return  posts.map(post => {
        return <Post post={post}/>
      })
    }
    else {
      return <div className="loading">loading...</div>
    }
  }

  return (
    <div className= 'post'>
      {injectData()}
    </div>
  )
}



