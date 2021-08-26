import axios from 'axios';
import { all, call, put, takeEvery, fork } from 'redux-saga/effects';
import { push } from 'connected-react-router';
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
  GET_CART_ITEMS_USER_SUCCESS,
  GET_CART_ITEMS_USER_FAILURE,
  GET_CART_ITEMS_USER_REQUEST,
  PROFILE_EDIT_REQUEST,
  PROFILE_EDIT_SUCCESS,
  PROFILE_EDIT_FAILURE,
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
  return axios.post(
    `/api/user/addToCart?productId=${data.goodsId}&userId=${data.userId}`,
  );
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

// Get Cart Item
const getCartItemAPI = (data) => {
  return axios
    .get(`/api/product/products_by_id?id=${data.cartItems}&type=array`)
    .then((res) => {
      data.userCart.forEach((cartItem) => {
        res.data.forEach((productDetail, ind) => {
          if (cartItem.id === productDetail._id) {
            res.data[ind].quantity = cartItem.quantity;
          }
        });
      });

      return res.data;
    });
};

function* getCartItem(action) {
  try {
    const result = yield call(getCartItemAPI, action.payload);

    yield put({
      type: GET_CART_ITEMS_USER_SUCCESS,
      payload: result,
    });
  } catch (e) {
    yield put({
      type: GET_CART_ITEMS_USER_FAILURE,
      payload: e.response,
    });
  }
}

function* watchgetCartItem() {
  yield takeEvery(GET_CART_ITEMS_USER_REQUEST, getCartItem);
}

// PROFILE //

const ProfileEditAPI = (payload) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  console.log(payload.userId);
  return axios.post(`/api/user/${payload.userId}/edit`, payload, config);
};

function* ProfileEdit(action) {
  try {
    const result = yield call(ProfileEditAPI, action.payload);
    console.log(result.data.userId);
    yield put({
      type: PROFILE_EDIT_SUCCESS,
      payload: result.data,
    });

    yield put(push(`/goods/${result.data.userId}/mypage`));
  } catch (e) {
    yield put({
      type: PROFILE_EDIT_FAILURE,
      payload: e,
    });
  }
}

function* watchProfileEdit() {
  yield takeEvery(PROFILE_EDIT_REQUEST, ProfileEdit);
}

export default function* authSaga() {
  yield all([
    // Auth //
    fork(watchLoginUser),
    fork(watchregisterUser),
    fork(watchuserLoading),
    fork(watchlogout),
    // Cart //
    fork(watchaddToCart),
    fork(watchgetCartItem),
    // Profile //
    fork(watchProfileEdit),
  ]);
}
