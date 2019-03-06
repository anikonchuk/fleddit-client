import React, { Component } from 'react';

class PostCard extends Component {

  render() {
    return(
      <div className="post-card">
        <h2>{this.props.targetPost.title}</h2>
        <h5><em>{this.props.targetPost.author}</em></h5>
        <p>{this.props.targetPost.content}</p>
        { this.props.targetPost.img_url ? <img src={this.props.targetPost.img_url} alt={this.props.targetPost.title}/> : null }
      </div>
    )
  }
}

export default PostCard
