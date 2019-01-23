export default function commentsReducer (
  state={
    loading: false,
    comments:[]
  }, action
) {
  switch(action.type) {
    case 'START_ADDING_COMMENTS':
      return {...state, loading: true}
    case 'ADD_ALL_COMMENTS':
      return {loading: false, comments: action.comments}
    case 'CREATE_COMMENT_SUCCESS':
      return {...state, comments: [...state.comments, action.comment]}
    default:
      return state;
  }
}
