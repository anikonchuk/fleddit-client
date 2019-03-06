import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateLikes } from '../actions/postsActions'

class PostCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      likes: props.targetPost.likes
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.targetPost.likes !== this.props.targetPost.likes) {
      this.setState({likes: nextProps.targetPost.likes})
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    let newLikes = this.state.likes + 1
    this.setState({likes: newLikes}, () => this.props.updateLikes(this.props.targetPost.id, this.state.likes))
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

const mapDispatchToProps = dispatch => {
  return {
    updateLikes: (id, likes) => {
      dispatch(updateLikes(id, likes))
    }
  }
}

export default connect(null, mapDispatchToProps)(PostCard)
