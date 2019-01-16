import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createComment } from '../actions/commentsActions';

class CommentForm extends Component {

  state = {
    post_id: this.props.targetPostId,
    author: "",
    content: ""
  }

  render() {
    return(
      <div>
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
