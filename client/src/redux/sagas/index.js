import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import dotenv from 'dotenv';
import authSaga from './authSaga';
import productSaga from './productSaga';
import commentSaga from './commentSaga';
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_BASIC_SERVER_URL;

export default function* rootSaga() {
  yield all([fork(authSaga), fork(productSaga), fork(commentSaga)]);
}
