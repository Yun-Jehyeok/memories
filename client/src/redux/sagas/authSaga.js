import axios from 'axios';
import { all, call, put, takeEvery, fork } from 'redux-saga/effects';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  USER_LOADING_REQUEST,
  USER_LOADING_FAILURE,
  USER_LOADING_SUCCESS,
  ADD_TO_CART_USER_REQUEST,
  ADD_TO_CART_USER_SUCCESS,
  ADD_TO_CART_USER_FAILURE,
} from '../types';

const loginUserAPI = (loginData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return axios.post('api/auth/login', loginData, config);
};

function* loginUser(loginaction) {
  try {
    const result = yield call(loginUserAPI, loginaction.payload);

    yield put({
      type: LOGIN_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: LOGIN_FAILURE,
      payload: e.response,
    });
  }
}

function* watchLoginUser() {
  yield takeEvery(LOGIN_REQUEST, loginUser);
}

// Register
const registerUserAPI = (registerData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return axios.post('api/user/register', registerData, config);
};

function* registerUser(action) {
  try {
    const result = yield call(registerUserAPI, action.payload);

    yield put({
      type: REGISTER_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: REGISTER_FAILURE,
      payload: e.response,
    });
  }
}

function* watchregisterUser() {
  yield takeEvery(REGISTER_REQUEST, registerUser);
}

// User Loading
const userLoadingAPI = (token) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return axios.get('api/auth/user', config);
};

function* userLoading(action) {
  try {
    const result = yield call(userLoadingAPI, action.payload);

    yield put({
      type: USER_LOADING_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: USER_LOADING_FAILURE,
      payload: e.response,
    });
  }
}

function* watchuserLoading() {
  yield takeEvery(USER_LOADING_REQUEST, userLoading);
}

// Logout
function* logout() {
  try {
    yield put({
      type: LOGOUT_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: LOGOUT_FAILURE,
    });
  }
}
function* watchlogout() {
  yield takeEvery(LOGOUT_REQUEST, logout);
}

// Add to cart
const addToCartAPI = (data) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (data.token) {
    config.headers['x-auth-token'] = data.token;
  }

  return axios.post(`/api/user/addToCart?productId=${data._id}`, config);
};

function* addToCart(action) {
  try {
    const result = yield call(addToCartAPI, action.payload);

    yield put({
      type: ADD_TO_CART_USER_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: ADD_TO_CART_USER_FAILURE,
      payload: e.response,
    });
  }
}

function* watchaddToCart() {
  yield takeEvery(ADD_TO_CART_USER_REQUEST, addToCart);
}

export default function* authSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchregisterUser),
    fork(watchuserLoading),
    fork(watchlogout),
    fork(watchaddToCart),
  ]);
}
