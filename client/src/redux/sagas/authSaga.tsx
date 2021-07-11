import axios from "axios";
import { all, call, put, takeEvery, fork } from "redux-saga/effects";
import { LoginAction, User } from "../actions";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../types";

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

function* loginUser(loginaction: LoginAction) {
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

export default function* authSaga() {
  yield all([fork(watchLoginUser)]);
}
