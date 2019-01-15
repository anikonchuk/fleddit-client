import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllComments } from '../actions/commentsActions'

class CommentsContainer extends Component {

  componentDidMount() {
    this.props.fetchAllComments();
  }

  render() {
    return(
      <div className="comments-container">
        <h3><em>Comments</em></h3>
        {this.props.loading ? <h3>Loading Comments</h3> : null}
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
