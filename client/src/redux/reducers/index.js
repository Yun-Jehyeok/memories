import { combineReducers } from 'redux';
import authReducer from './authReducer';
import commentReducer from './commentReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  comment: commentReducer,
});

export default rootReducer;
