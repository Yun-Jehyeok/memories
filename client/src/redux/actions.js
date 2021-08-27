import {
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  LOGOUT_REQUEST,
  USER_LOADING_REQUEST,
  ADD_TO_CART_USER_REQUEST,
  GET_CART_ITEMS_USER_REQUEST,
  POST_DETAIL_LOADING_REQUEST,
  PROFILE_EDIT_REQUEST,
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
