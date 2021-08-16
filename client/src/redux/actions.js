import {
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  LOGOUT_REQUEST,
  USER_LOADING_REQUEST,
  ADD_TO_CART_USER_REQUEST,
} from './types';

export const loginAction = (user) => ({
  type: LOGIN_REQUEST,
  payload: user,
});

export const registerAction = (user) => ({
  type: REGISTER_REQUEST,
  payload: user,
});

export const logoutAction = (user) => ({
  type: LOGOUT_REQUEST,
  payload: user,
});

export const loadUserAction = () => ({
  type: USER_LOADING_REQUEST,
  payload: localStorage.getItem('token'),
});

export const addToCartRequest = (id) => ({
  type: ADD_TO_CART_USER_REQUEST,
  payload: id,
});
