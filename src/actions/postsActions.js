export function fetchAllPosts() {
  return (dispatch) => {
    dispatch({type: 'START_ADDING_POSTS'});
    return fetch('http://localhost:3005/api/posts')
      .then(response => response.json())
      .then(posts => dispatch({type: 'ADD_ALL_POSTS', posts}));
  };
}

export function fetchTargetPost(postId) {
  return (dispatch) => {
    dispatch({type: 'START_ADDING_POSTS'});
    return fetch(`http://localhost:3005/api/posts/${postId}`)
      .then(response => response.json())
      .then(post => dispatch({type: 'ADD_TARGET_POST', post}))
  }
}

export function createPost(post) {
  return (dispatch) => {
    return fetch('http://localhost:3005/api/posts', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ post: post })
    })
      // .then(res => {
      //   if (res.ok) {
      //     return res
      //   }
      //
      //   return throw Error(res)
      // })
      .then(response => response.json())
      .then(post => {
        dispatch(addPost(post));
      })
      //.catch(alert("Something went wrong. Please try again"))
  }
}

function addPost(post){
  return {
    type: 'CREATE_POST_SUCCESS',
    post
  }
}

export function removeTargetPost() {
  return {
    type: 'CLEAR_TARGET_POST'
  }
}
