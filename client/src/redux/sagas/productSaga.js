import axios from 'axios';
import { all, call, put, takeEvery, fork } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  POST_DETAIL_LOADING_REQUEST,
  POST_DETAIL_LOADING_SUCCESS,
  POST_DETAIL_LOADING_FAILURE,
  GET_VIEWS_REQUEST,
  GET_VIEWS_SUCCESS,
  GET_VIEWS_FAILURE,
  UPVIEWS_REQUEST,
  UPVIEWS_SUCCESS,
} from '../types';

const loadPostDetailAPI = (payload) => {
  return axios.get(`/api/product/products_by_id?id=${payload}&type=single`);
};

function* loadPostDetail(action) {
  try {
    const result = yield call(loadPostDetailAPI, action.payload);

    yield put({
      type: POST_DETAIL_LOADING_SUCCESS,
      payload: result.data[0],
    });
  } catch (e) {
    yield put({
      type: POST_DETAIL_LOADING_FAILURE,
      payload: e,
    });

    yield put(push('/goods'));
  }
}

function* watchloadPostDetail() {
  yield takeEvery(POST_DETAIL_LOADING_REQUEST, loadPostDetail);
}

// get Views
const getViewsAPI = (payload) => {
  return axios.get(`api/product/${payload.productId}/views`, payload);
};

function* getViews(action) {
  const result = yield call(getViewsAPI, action.payload);
  console.log(result.data);
  try {
    yield put({
      type: GET_VIEWS_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: GET_VIEWS_FAILURE,
      payload: e,
    });
  }
}

function* watchgetViews() {
  yield takeEvery(GET_VIEWS_REQUEST, getViews);
}

// up Views
const upViewsAPI = (payload) => {
  return axios.post(`/api/product/${payload.productId}/views`, payload);
};

function* upViews(action) {
  const result = yield call(upViewsAPI, action.payload);
  try {
    if (result.data.success) {
      yield put({
        type: UPVIEWS_SUCCESS,
        payload: result.data,
      });
    }
  } catch (e) {
    console.log(e);
  }
}

function* watchupViews() {
  yield takeEvery(UPVIEWS_REQUEST, upViews);
}

export default function* productSaga() {
  yield all([
    fork(watchloadPostDetail),
    fork(watchgetViews),
    fork(watchupViews),
  ]);
}
