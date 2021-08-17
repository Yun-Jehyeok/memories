import {
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  LOGOUT_REQUEST,
  USER_LOADING_REQUEST,
  ADD_TO_CART_USER_REQUEST,
  GET_CART_ITEMS_USER
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

export const getCartItems = (cartItems, userCart) => {
  const request = axios.get(`/api/product/products_by_id?id=${cartItems}&type=array`)
    .then(res => {
      userCart.forEach(cartItem => {
        res.data.forEach((productDetail, ind) => {
          if(cartItem.id === productDetail._id) {
            res.data[ind].quantity = cartItem.quantity;
          }
        })
      })

      return res.data
    });

  return {
    type: GET_CART_ITEMS_USER,
    payload: request
  }
}