import axios from 'axios';
import {
  ADD_TO_CART_USER,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  LOGOUT_REQUEST,
  USER_LOADING_REQUEST,
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

export const loadUserAction = (token) => ({
  type: USER_LOADING_REQUEST,
  payload: token,
});

export function addToCart(_id, token) {
  const request = axios
    .post(`/api/user/addToCart?productId=${_id}`, token)
    .then((response) => response.data);

  return {
    type: ADD_TO_CART_USER,
    payload: request,
  };
}
