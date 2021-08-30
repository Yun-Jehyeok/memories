import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  CLEAR_COMMENT_ERROR_FAILURE,
  CLEAR_COMMENT_ERROR_REQUEST,
  CLEAR_COMMENT_ERROR_SUCCESS,
  COMMENT_DELETE_FAILURE,
  COMMENT_DELETE_REQUEST,
  COMMENT_DELETE_SUCCESS,
  COMMENT_LOADING_FAILURE,
  COMMENT_LOADING_REQUEST,
  COMMENT_LOADING_SUCCESS,
  COMMENT_UPLOADING_FAILURE,
  COMMENT_UPLOADING_REQUEST,
  COMMENT_UPLOADING_SUCCESS,
} from '../types';

// Load Comments
const loadCommentsAPI = (payload) => {
  return axios.get(`/api/product/${payload}/comments`);
};

function* loadComments(action) {
  try {
    const result = yield call(loadCommentsAPI, action.payload);

    yield put({
      type: COMMENT_LOADING_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: COMMENT_LOADING_FAILURE,
      payload: e,
    });
  }
}

function* watchloadComments() {
  yield takeEvery(COMMENT_LOADING_REQUEST, loadComments);
}

// Upload Comment
const uploadCommentAPI = (payload) => {
  return axios.post(`/api/product/${payload.id}/comments`, payload);
};

function* uploadComment(action) {
  try {
    const result = yield call(uploadCommentAPI, action.payload);

    console.log(result);

    yield put({
      type: COMMENT_UPLOADING_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: COMMENT_UPLOADING_FAILURE,
      payload: e.response,
    });

    yield push('/');
  }
}

function* watchuploadComment() {
  yield takeEvery(COMMENT_UPLOADING_REQUEST, uploadComment);
}

// Comment Delete
const deleteCommentAPI = (payload) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const token = payload.token;

  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return axios.delete(
    `/api/product/comment/${payload.commentId}`,
    payload,
    config,
  );
};

function* deleteComment(action) {
  try {
    const result = yield call(deleteCommentAPI, action.payload);

    yield put({
      type: COMMENT_DELETE_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: COMMENT_DELETE_FAILURE,
      payload: e,
    });
  }
}

function* watchdeleteComment() {
  yield takeEvery(COMMENT_DELETE_REQUEST, deleteComment);
}

// Clear Comment Error
function* clearCommentError() {
  try {
    yield put({
      type: CLEAR_COMMENT_ERROR_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: CLEAR_COMMENT_ERROR_FAILURE,
    });
  }
}

function* watchclearCommentError() {
  yield takeEvery(CLEAR_COMMENT_ERROR_REQUEST, clearCommentError);
}

export default function* commentSaga() {
  yield all([
    fork(watchloadComments),
    fork(watchuploadComment),
    fork(watchdeleteComment),
    fork(watchclearCommentError),
  ]);
}
