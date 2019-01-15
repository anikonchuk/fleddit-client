export function fetchAllPosts() {
  return(dispatch) => {
    dispatch({type: 'START_ADDING_ALL_POSTS'});
    return fetch('http://localhost:3005/api/posts')
      .then(response => response.json())
      .then(posts => dispatch({type: 'ADD_ALL_POSTS', posts}));
  };
}
