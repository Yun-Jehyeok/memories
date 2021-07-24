import { combineReducers } from 'redux';
import authReducer from './authReducer';
import loadReducer from './loadReducer';

const rootReducer = combineReducers({ authReducer, loadReducer });

export default rootReducer;
