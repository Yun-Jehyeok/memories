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
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  UPLIKE_REQUEST,
  UPLIKE_SUCCESS,
  UPLIKE_FAILURE,
  UNLIKE_REQUEST,
  UNLIKE_SUCCESS,
  UNLIKE_FAILURE,
  GET_MYPAGE_REQUEST,
  GET_MYPAGE_SUCCESS,
  GET_MYPAGE_FAILURE,
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
    console.log(result.data);
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

    yield put(push(`/goods`));
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
  return axios.post(`/api/user/${payload.userId}/edit`, payload);
};

function* ProfileEdit(action) {
  try {
    const result = yield call(ProfileEditAPI, action.payload);

    yield put({
      type: PROFILE_EDIT_SUCCESS,
      payload: result.data,
    });

    yield put(push(`/goods`));
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

// change PW
const findPasswordAPI = (findpasswordData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return axios.post('api/user/changepassword', findpasswordData, config);
};

function* findPassword(action) {
  const result = yield call(findPasswordAPI, action.payload);
  try {
    yield put({
      type: CHANGE_PASSWORD_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: CHANGE_PASSWORD_FAILURE,
      payload: e.response,
    });
  }
}

function* watchfindPassword() {
  yield takeEvery(CHANGE_PASSWORD_REQUEST, findPassword);
}

// upLike
const upLikeAPI = (payload) => {
  return axios.post(`/api/product/${payload.productId}/like/uplike`, payload);
};

function* upLike(action) {
  const result = yield call(upLikeAPI, action.payload);

  try {
    if (result.data.upLike) {
      yield put({
        type: UPLIKE_SUCCESS,
        payload: result.data,
      });
    }
  } catch (e) {
    yield put({
      type: UPLIKE_FAILURE,
      payload: e.response,
    });
  }
}

function* watchupLike() {
  yield takeEvery(UPLIKE_REQUEST, upLike);
}

// unLike
const unLikeAPI = (payload) => {
  return axios.post(`/api/product/${payload.productId}/like/unlike`, payload);
};

function* unLike(action) {
  const result = yield call(unLikeAPI, action.payload);
  try {
    if (result.data.unLike) {
      yield put({
        type: UNLIKE_SUCCESS,
        payload: result.data,
      });
    }
  } catch (e) {
    yield put({
      type: UNLIKE_FAILURE,
      payload: e.response,
    });
  }
}

function* watchunLike() {
  yield takeEvery(UNLIKE_REQUEST, unLike);
}

// get Mypage
const getMypageAPI = (payload) => {
  return axios.get(`/api/user/${payload.user}/getMypage`, payload);
};

function* getMypage(action) {
  const result = yield call(getMypageAPI, action.payload);
  console.log(result.data);
  try {
    yield put({
      type: GET_MYPAGE_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: GET_MYPAGE_FAILURE,
      payload: e,
    });
  }
}

function* watchgetMypage() {
  yield takeEvery(GET_MYPAGE_REQUEST, getMypage);
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
    fork(watchfindPassword),
    fork(watchgetMypage),

    // Like //
    fork(watchupLike),
    fork(watchunLike),
  ]);
}
