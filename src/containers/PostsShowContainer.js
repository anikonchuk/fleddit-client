import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostsShowContainer extends Component {


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
    posts: state.posts.posts
  }
}

export default connect(mapStateToProps)(PostsShowContainer)
