import React from 'react';

const PostCard = ({ targetPost }) => {
  return(
    <div className="post-card">
      <h2>{targetPost.title}</h2>
      <h4>by: {targetPost.author}</h4>
      <p>{targetPost.content}</p>
      { targetPost.img_url ? <img src={targetPost.img_url} alt={targetPost.title}/> : null }
    </div>
  )
}

export default PostCard
