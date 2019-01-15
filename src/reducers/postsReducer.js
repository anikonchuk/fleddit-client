export default function postsReducer (
  state={
    loading: false,
    posts:[],
    targetPost: null
  }, action
) {
  switch(action.type) {
    case 'START_ADDING_POSTS':
      return {...state, loading: true}
    case 'ADD_ALL_POSTS':
      return {...state, loading:false, posts: action.posts}
    case 'ADD_TARGET_POST':
      return {...state, loading:false, targetPost: action.post}
    default:
      return state;
  }
}
