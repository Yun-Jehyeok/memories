import {
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  LOGOUT_REQUEST,
  USER_LOADING_REQUEST,
  CHANGE_PASSWORD_REQUEST,
  ADD_TO_CART_USER_REQUEST,
  GET_CART_ITEMS_USER_REQUEST,
  POST_DETAIL_LOADING_REQUEST,
  PROFILE_EDIT_REQUEST,
  ON_SUCCESS_BUY_USER,
  UPLIKE_REQUEST,
  UNLIKE_REQUEST,
} from './types';

import axios from 'axios';

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

export const addToCartRequest = (data) => ({
  type: ADD_TO_CART_USER_REQUEST,
  payload: data,
});

export const getCartItems = (data) => ({
  type: GET_CART_ITEMS_USER_REQUEST,
  payload: data,
});

export const getGoodsDetail = (goodsId) => ({
  type: POST_DETAIL_LOADING_REQUEST,
  payload: goodsId,
});

export const editProfile = (data) => ({
  type: PROFILE_EDIT_REQUEST,
  payload: data,
});

export function onSuccessBuy(data) {
  const request = axios
    .post(`/api/user/successBuy`, data)
    .then((response) => response.data);

  return {
    type: ON_SUCCESS_BUY_USER,
    payload: request,
  };
}

export const changePassword = (user) => ({
  type: CHANGE_PASSWORD_REQUEST,
  payload: user,
});

export const upLikeAction = (data) => ({
  type: UPLIKE_REQUEST,
  payload: data,
});

export const unLikeAction = (data) => ({
  type: UNLIKE_REQUEST,
  payload: data,
});
