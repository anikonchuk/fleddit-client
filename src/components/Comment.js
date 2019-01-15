import React from 'react';

const Comment = ({ comment }) => {
  return(
    <div>
      <p><em>{comment.author}</em></p>
      <p>{comment.content}</p>
      <hr/>
    </div>
  )
}

export default Comment;
