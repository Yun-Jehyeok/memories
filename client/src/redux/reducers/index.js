import { combineReducers } from 'redux';
import authReducer from './authReducer';
import commentReducer from './commentReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  comment: commentReducer,
});

export default rootReducer;
