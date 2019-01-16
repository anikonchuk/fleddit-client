import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/postsActions'

class PostForm extends Component {

  state = {
    title: "",
    author: "",
    img_url: "",
    content: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createPost(this.state);
  }

  render() {
    return(
      <div className="post-form">
        <p><em>Title, author, and content are required.</em></p>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="title">Title</label><br/>
          <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange} required /><br/>
          <label htmlFor="author">Author</label><br/>
          <input type="text" id="author" name="author" value={this.state.author} onChange={this.handleChange} required /><br/>
          <label htmlFor="content">Content</label><br/>
          <textarea id="content" name="content" value={this.state.content} onChange={this.handleChange} required ></textarea><br/>
          <label htmlFor="img_url">Image URL</label><br/>
          <input type="text" id="img_url" name="img_url" value={this.state.img_url} onChange={this.handleChange} /><br/>
          <input type="submit" className="btn btn-primary"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: (post) => {
      dispatch(createPost(post))
    }
  }
}

export default connect(mapDispatchToProps)(PostForm)
