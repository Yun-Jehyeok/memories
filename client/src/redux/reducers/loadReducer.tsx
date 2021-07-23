import { LoadUserAction } from '../actions';
import {
  USER_LOADING_REQUEST,
  USER_LOADING_SUCCESS,
  USER_LOADING_FAILURE,
} from '../types';

type authState = {
  isAuthenticated: null | boolean;
  isLoading: boolean;
  user: string;
};

const initialState: authState = {
  isAuthenticated: null,
  isLoading: false,
  user: '',
};

const authReducer = (
  state: authState = initialState,
  action: LoadUserAction,
) => {
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
