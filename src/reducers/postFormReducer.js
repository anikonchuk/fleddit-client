const initialState = {
  title: "",
  author: "",
  content: "",
  img_url: ""
}

export default function postFormReducer(state = initialState, action) {
  switch(action.type) {
    case 'UPDATED_POST_DATA':
      return action.postFormData;
    case 'RESET_POST_FORM':
      return initialState;
    default:
      return state;
  }
}
