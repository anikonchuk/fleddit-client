const initialState = {
  loading: false,
  posts: [],
  targetPost: {
    id: "",
    title: "",
    author: "",
    content: ""
  }
}

export default function postsReducer (state = initialState, action) {
  switch(action.type) {
    case 'START_ADDING_POSTS':
      return {...state, loading: true}
    case 'ADD_ALL_POSTS':
      return {...state, loading: false, posts: action.posts}
    case 'ADD_TARGET_POST':
      return {...state, loading: false, targetPost: action.post}
    case 'CREATE_POST_SUCCESS':
      return {...state, posts: [...state.posts, action.post]}
    case 'CLEAR_TARGET_POST':
      return {...state, targetPost: initialState.targetPost}
    default:
      return state;
  }
}
