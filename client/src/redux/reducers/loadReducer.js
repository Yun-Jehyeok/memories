import { LoadUserAction } from '../actions';
import {
  USER_LOADING_REQUEST,
  USER_LOADING_SUCCESS,
  USER_LOADING_FAILURE,
} from '../types';

const initialState = {
  isAuthenticated: null,
  isLoading: false,
  user: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
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
      };
    case USER_LOADING_FAILURE:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        userRole: '',
      };

    default:
      return state;
  }
};

export default authReducer;
