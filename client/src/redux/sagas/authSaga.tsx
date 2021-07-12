import axios from "axios";
import { all, call, put, takeEvery, fork } from "redux-saga/effects";
import { AuthAction, User } from "../actions";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
} from "../types";

type Result = {
  data: any;
};

const loginUserAPI = (loginData: User) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios.post("api/auth/login", loginData, config);
};

function* loginUser(loginaction: AuthAction) {
  try {
    const result: Result = yield call(loginUserAPI, loginaction.payload);

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
const registerUserAPI = (registerData: User) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios.post("api/user/register", registerData, config);
};

function* registerUser(action: AuthAction) {
  try {
    const result: Result = yield call(registerUserAPI, action.payload);

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

export default function* authSaga() {
  yield all([fork(watchLoginUser), fork(watchregisterUser)]);
}
