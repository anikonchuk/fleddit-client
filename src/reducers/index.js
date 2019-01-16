import { combineReducers } from 'redux';
import postsReducer from './postsReducer.js';
import commentsReducer from './commentsReducer.js';
import postFormReducer from './postFormReducer.js';

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  postForm: postFormReducer
});

export default rootReducer;
