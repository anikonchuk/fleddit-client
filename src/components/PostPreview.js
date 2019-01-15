import React from 'react';

const PostPreview = (props) => {
  return (
    <div className="post-preview">
      <h5>{props.post.title}</h5>
      <p>{props.post.author}</p>
    </div>
  )
}

export default PostPreview
