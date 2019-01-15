import React, { Component } from 'react';
import PostPreview from '../components/PostPreview';
import { connect } from 'react-redux';
import { fetchAllPosts } from '../actions/postsActions';

class PostsIndexContainer extends Component {

  render() {
    return(
      <div>
        <h2>This is the PostsIndexContainer</h2>
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
