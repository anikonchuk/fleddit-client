import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllComments } from '../actions/commentsActions'
import Comment from '../components/Comment'

class CommentsContainer extends Component {

  componentDidMount() {
    this.props.fetchAllComments();
  }

  renderComments = () => {
    return this.props.comments.filter(comment => comment.post_id === this.props.targetPost.id).map(comment => <Comment key={comment.id} comment={comment}/>)
  }

  render() {
    return(
      <div className="comments-container">
        <h3><em>Comments</em></h3>
        {this.props.loading ? <h3>Loading Comments</h3> : null}
        {this.renderComments()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments.comments,
    loading: state.comments.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllComments: () => {
      dispatch(fetchAllComments())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)
