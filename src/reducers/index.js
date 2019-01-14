import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer.js'

const rootReducer = combineReducers({
  posts: postsReducer
});

export default rootReducer;
