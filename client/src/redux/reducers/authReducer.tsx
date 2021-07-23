import { AuthAction } from '../actions';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../types';

type authState = {
  token: null | string;
  isAuthenticated: null | boolean;
  isPasswordChange: boolean;
  isLoading: boolean;
  user: string;
  userId: string;
  userName: string;
  userRole: string;
  errorMsg: string;
  successMsg: string;
};

const initialState: authState = {
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
};

const authReducer = (state: authState = initialState, action: AuthAction) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
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

    default:
      return state;
  }
};

export default authReducer;
