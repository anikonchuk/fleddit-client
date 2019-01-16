import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePostFormData } from '../actions/postFormActions'

class PostForm extends Component {

  handleChange = event => {
    const currentPostFormData = Object.assign({}, this.props.postFormData, {[event.target.name]: event.target.value});
    this.props.updatePostFormData(currentPostFormData)
  }

  render() {
    console.log(this.props.postFormData)
    return(
      <div className="post-form">
        <p><em>Title, author, and content are required.</em></p>
        <form>
          <label htmlFor="title">Title</label><br/>
          <input type="text" id="title" name="title" value={this.props.postFormData.title} onChange={this.handleChange} required /><br/>
          <label htmlFor="author">Author</label><br/>
          <input type="text" id="author" name="author" value={this.props.postFormData.author} onChange={this.handleChange} required /><br/>
          <label htmlFor="content">Content</label><br/>
          <textarea id="content" name="content" value={this.props.postFormData.content} onChange={this.handleChange} required ></textarea><br/>
          <label htmlFor="img_url">Image URL</label><br/>
          <input type="text" id="img_url" name="img_url" value={this.props.postFormData.img_url} onChange={this.handleChange} /><br/>
          <input type="submit" className="btn btn-primary"/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    postFormData: state.postForm
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updatePostFormData: (currentPostFormData) => {
      dispatch(updatePostFormData(currentPostFormData))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
