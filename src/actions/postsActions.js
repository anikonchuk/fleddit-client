export function fetchAllPosts() {
  return(dispatch) => {
    dispatch({type: 'START_ADDING_POSTS'});
    return fetch('http://localhost:3005/api/posts')
      .then(response => response.json())
      .then(posts => dispatch({type: 'ADD_ALL_POSTS', posts}));
  };
}

export function fetchTargetPost(postId) {
  return(dispatch) => {
    dispatch({type: 'START_ADDING_POSTS'});
    return fetch(`http://localhost:3005/api/posts/${postId}`)
      .then(response => response.json())
      .then(post => dispatch({type: 'ADD_TARGET_POST', post}))
  }
}
