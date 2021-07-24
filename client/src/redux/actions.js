import { LOGIN_REQUEST, REGISTER_REQUEST, USER_LOADING_REQUEST } from './types';

export const loginAction = (user) => ({
  type: LOGIN_REQUEST,
  payload: user,
});

export const registerAction = (user) => ({
  type: REGISTER_REQUEST,
  payload: user,
});

export const loadUserAction = (token) => ({
  type: USER_LOADING_REQUEST,
  payload: token,
});
