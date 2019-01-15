import React from 'react';

const PostPreview = (props) => {
  return (
    <div className="post-preview">
      <h5>{props.title}</h5>
      <p>{props.author}</p>
    </div>
  )
}

export default PostPreview
