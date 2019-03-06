import React, { Component } from 'react';

class PostCard extends Component {

  state = {
    likes: 0
  }

  componentDidMount() {
    this.setState({
      likes: this.props.targetPost.likes
    })
  }

  handleClick = (event) => {
    event.preventDefault();
    let newLikes = this.state.likes + 1
    this.setState({likes: newLikes})
  }

  render() {
    return(
      <div className="post-card">
        <h2>{this.props.targetPost.title}</h2>
        <h5><em>{this.props.targetPost.author}</em></h5>
        <p>{this.props.targetPost.content}</p>
        { this.props.targetPost.img_url ? <img src={this.props.targetPost.img_url} alt={this.props.targetPost.title}/> : null }
        <div className="post-likes">
          <p><em>This post has {this.state.likes} likes.</em></p>
          <button className="btn btn-primary" onClick={this.handleClick}>Like this post!</button>
        </div>
      </div>
    )
  }
}

export default PostCard
