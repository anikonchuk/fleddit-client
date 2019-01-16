import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createComment } from '../actions/commentsActions';

class CommentForm extends Component {

  state = {
    author: "",
    content: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const commentData = Object.assign({}, this.state, {post_id: this.props.targetPostId})
    this.props.createComment(commentData);
    this.setState({
      author: "",
      content: ""
    })
  }

  render() {
    console.log('props:', this.props)
    return(
      <div className="comment-form">
        <h3><em>Add a New Comment</em></h3>
        <p><em>Author and content are required</em></p>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="author">Author</label><br/>
          <input type="text" id="author" name="author" value={this.state.author} onChange={this.handleChange} required /><br/>
          <label htmlFor="content">Content</label><br/>
          <textarea id="content" name="content" value={this.state.content} onChange={this.handleChange} required ></textarea><br/>
          <input type="submit" className="btn btn-primary"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createComment: (comment) => {
      dispatch(createComment(comment))
    }
  }
}

export default connect(null, mapDispatchToProps)(CommentForm)
