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
  GET_CART_ITEMS_USER_FAILURE,
  PROFILE_EDIT_REQUEST,
  PROFILE_EDIT_SUCCESS,
  PROFILE_EDIT_FAILURE,
  ON_SUCCESS_BUY_USER,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  UPLIKE_REQUEST,
  UPLIKE_SUCCESS,
  UPLIKE_FAILURE,
  UNLIKE_SUCCESS,
  GET_MYPAGE_REQUEST,
  GET_MYPAGE_SUCCESS,
  GET_MYPAGE_FAILURE,
} from '../types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isPasswordChange: false,
  isProfileChange: false,
  isLoading: false,
  user: '',
  userId: '',
  userName: '',
  userRole: '',
  errorMsg: '',
  successMsg: '',
  cart: [],
  cartDetail: [],
  address: '',
  registerDate: '',
  likes: [],
  views: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MYPAGE_REQUEST:
    case CHANGE_PASSWORD_REQUEST:
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
    case LOGOUT_REQUEST:
      return {
        ...state,
        errorMsg: '',
        isLoading: true,
      };

    case CHANGE_PASSWORD_SUCCESS:
      alert('비밀번호가 변경되었습니다.');
      return {
        ...state,
        isPasswordChange: true,
        isLoading: false,
      };

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);

      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.userForCart,
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
    case CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        isPasswordChange: false,
        errorMsg: action.payload.data.msg,
        isLoading: false,
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
        isLoading: true,
      };
    case GET_CART_ITEMS_USER_SUCCESS:
      return {
        ...state,
        cartDetail: action.payload,
        isLoading: false,
      };
    case GET_CART_ITEMS_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case PROFILE_EDIT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isProfileChange: false,
      };
    case PROFILE_EDIT_SUCCESS:
      return {
        ...state,
        address: action.payload.address,
        userName: action.payload.name,
        userId: action.payload._id,
        isLoading: false,
        isProfileChange: true,
      };
    case PROFILE_EDIT_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case ON_SUCCESS_BUY_USER:
      return {
        ...state,
        cart: action.payload.cart,
        cartDetail: action.payload.cartDetail,
      };

    case UPLIKE_REQUEST:
      return {
        ...state,
      };
    case UPLIKE_SUCCESS:
      return {
        ...state,
        likes: action.payload,
      };
    case UPLIKE_FAILURE:
      return {
        ...state,
      };
    case UNLIKE_SUCCESS:
      return {
        ...state,
      };
    case GET_MYPAGE_SUCCESS:
      return {
        ...state,
        likes: action.payload.likes,
        views: action.payload.views,
      };
    case GET_MYPAGE_FAILURE:
      return {
        ...state,
        likes: [],
        views: [],
      };
    default:
      return state;
  }
};

export default authReducer;
