import React, { Component } from 'react';
import PostPreview from '../components/PostPreview';
import PostForm from '../components/PostForm';
import { connect } from 'react-redux';
import { fetchAllPosts } from '../actions/postsActions';

class PostsIndexContainer extends Component {

  componentDidMount() {
    this.props.fetchAllPosts();
  }

  displayPostPreviews = () => {
    return this.props.posts.map(post => <PostPreview key={post.id} post={post}/>)
  }

  render() {
    return(
      <div className="row">
        <div className="col-8">
          <h2>All Posts</h2>
          { this.props.loading ? <div><h3>Loading</h3></div> : null }
          { this.displayPostPreviews() }
        </div>
        <div className="col-4">
          <h2>Create a New Post</h2>
          <PostForm />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPosts: () => {
      dispatch(fetchAllPosts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndexContainer)
