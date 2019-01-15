import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTargetPost } from '../actions/postsActions'
import PostCard from '../components/PostCard'

class PostsShowContainer extends Component {

  componentDidMount() {
    this.props.fetchTargetPost(this.props.match.params.postId)
  }

  render() {
    return(
      <div>
        <h2>This is the PostsShowContainer</h2>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    targetPost: state.posts.targetPost,
    loading: state.posts.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTargetPost: (postId) => {
      dispatch(fetchTargetPost(postId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShowContainer)
