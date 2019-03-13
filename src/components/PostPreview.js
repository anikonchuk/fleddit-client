import React from 'react';
import { Link } from 'react-router-dom';

const PostPreview = (props) => {
  return (
    <div className="post-preview">
      <h5><Link to={`/posts/${props.post.id}`}>{props.post.title}</Link></h5>
      <p>{props.post.author}</p>
      <p><em>{props.post.likes} {props.post.likes == 1 ? "like" : "likes"}</em></p>
    </div>
  )
}

export default PostPreview
