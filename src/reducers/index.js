import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer.js'
import { commentsReducer } from './commentsReducer.js'

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer
});

export default rootReducer;
