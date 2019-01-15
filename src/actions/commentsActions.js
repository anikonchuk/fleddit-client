export function fetchAllComments() {
  return(dispatch) => {
    dispatch({type: 'START_ADDING_COMMENTS'});
    return fetch('http://localhost:3005/api/comments')
      .then(response => response.json())
      .then(comments => dispatch({type: 'ADD_ALL_COMMENTS', comments}));
  };
}
