import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  USER_LOADING_REQUEST,
  USER_LOADING_SUCCESS,
  USER_LOADING_FAILURE,
  ADD_TO_CART_USER_REQUEST,
  ADD_TO_CART_USER_SUCCESS,
  ADD_TO_CART_USER_FAILURE,
  GET_CART_ITEMS_USER_REQUEST,
  GET_CART_ITEMS_USER_SUCCESS,
  GET_CART_ITEMS_USER_FAILURE
} from '../types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isPasswordChange: false,
  isLoading: false,
  user: '',
  userId: '',
  userName: '',
  userRole: '',
  errorMsg: '',
  successMsg: '',
  cart: [],
  cartDetail: []
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
    case LOGOUT_REQUEST:
      return {
        ...state,
        errorMsg: '',
        isLoading: true,
      };

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);

      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        userId: action.payload.user.id,
        userRole: action.payload.user.role,
        userName: action.payload.user.name,
        errorMsg: '',
      };

    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
    case LOGOUT_FAILURE:
      localStorage.removeItem('token');

      return {
        ...state,
        ...action.payload,
        token: null,
        user: null,
        userId: null,
        isAuthenticated: false,
        isLoading: false,
        userRole: null,
        errorMsg: action.payload.data.msg,
      };
    case LOGOUT_SUCCESS:
      localStorage.removeItem('token');
      return {
        token: null,
        user: null,
        userId: null,
        isAuthenticated: false,
        isLoading: false,
        userRole: null,
        errorMsg: '',
      };
    case USER_LOADING_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADING_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
        userId: action.payload._id,
        userName: action.payload.name,
        userRole: action.payload.role,
      };
    case USER_LOADING_FAILURE:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        userRole: '',
      };

    case ADD_TO_CART_USER_REQUEST:
      return {
        ...state,
      };
    case ADD_TO_CART_USER_SUCCESS:
      return {
        ...state,
        cart: action.payload,
      };
    case ADD_TO_CART_USER_FAILURE:
      return {
        ...state,
      };
    
    case GET_CART_ITEMS_USER_REQUEST:
      return {
        ...state,
      }
    case GET_CART_ITEMS_USER_SUCCESS:
      return {
        ...state,
        cartDetail: action.payload
      }
    case GET_CART_ITEMS_USER_FAILURE:
      return {
        ...state
      }

    default:
      return state;
  }
};

export default authReducer;
