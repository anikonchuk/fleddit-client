export default function postsReducer (
  state={
    loading: false,
    posts:[]
  }, action
) {
  switch(action.type) {
    case 'START_ADDING_ALL_POSTS':
      return {...state, loading: true}
    case 'ADD_ALL_POSTS':
      return {loading:false, posts: action.posts}
    default:
      return state;
  }
}
