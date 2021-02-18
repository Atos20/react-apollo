import React from 'react'

export const Post: React.FC = ({ post }) => {
  return (
    <div className= 'post'>
      <h1 className="non">{post.id}</h1>
      <h1 className="non">{post.title}</h1>
      <h1 className="non">{post.body}</h1>
    </div>
  )
}



