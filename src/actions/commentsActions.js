const BASE_URL = "https://fleddit-api.herokuapp.com"

export function fetchAllComments() {
  return (dispatch) => {
    dispatch({type: 'START_ADDING_COMMENTS'});
    return fetch(`${BASE_URL}/api/comments`)
      .then(response => response.json())
      .then(comments => dispatch({type: 'ADD_ALL_COMMENTS', comments}));
  };
}

export function createComment(comment) {
  return (dispatch) => {
    return fetch(`${BASE_URL}/api/comments`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ comment: comment })
    })
      .then(response => response.json())
      .then(comment => {
        dispatch(addComment(comment));
      })
  }
}

function addComment(comment){
  return{
    type: 'CREATE_COMMENT_SUCCESS',
    comment
  }
}
