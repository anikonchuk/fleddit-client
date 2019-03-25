const BASE_URL = "https://fleddit-api.herokuapp.com"

export function fetchAllPosts() {
  return (dispatch) => {
    dispatch({type: 'START_ADDING_POSTS'});
    return fetch(`${BASE_URL}/api/posts`)
      .then(response => response.json())
      .then(posts => dispatch({type: 'ADD_ALL_POSTS', posts}));
  };
}

export function fetchTargetPost(postId) {
  return (dispatch) => {
    dispatch({type: 'START_ADDING_POSTS'});
    return fetch(`${BASE_URL}/api/posts/${postId}`)
      .then(response => response.json())
      .then(post => dispatch({type: 'ADD_TARGET_POST', post}))
  }
}

export function createPost(post) {
  return (dispatch) => {
    return fetch(`${BASE_URL}/api/posts`, {
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

export function updateLikes(id, likes) {
  return (dispatch) => {
    const post_likes = {
      likes: likes
    }
    return fetch(`${BASE_URL}/api/posts/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({post: post_likes})
    })
      .then(response => response.json())
      .then(post => {
        dispatch(updatePost(post));
      })
  }
}

function updatePost(post) {
  return {
    type: 'UPDATE_LIKES_SUCCESS',
    post
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
