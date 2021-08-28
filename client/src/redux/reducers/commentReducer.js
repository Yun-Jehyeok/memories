import {
  CLEAR_COMMENT_ERROR_FAILURE,
  CLEAR_COMMENT_ERROR_REQUEST,
  CLEAR_COMMENT_ERROR_SUCCESS,
  COMMENT_DELETE_SUCCESS,
  COMMENT_LOADING_FAILURE,
  COMMENT_LOADING_REQUEST,
  COMMENT_LOADING_SUCCESS,
  COMMENT_UPLOADING_FAILURE,
  COMMENT_UPLOADING_REQUEST,
  COMMENT_UPLOADING_SUCCESS,
} from '../types';

const initialState = {
  comments: [],
  creatorId: '',
  loading: false,
  isAuthenticated: false,
  errorMsg: '',
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_LOADING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COMMENT_LOADING_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        loading: false,
      };
    case COMMENT_LOADING_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case COMMENT_UPLOADING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COMMENT_UPLOADING_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, action.payload],
        isAuthenticated: true,
        loading: false,
      };
    case COMMENT_UPLOADING_FAILURE:
      return {
        ...state,
        loading: false,
        errorMsg: action.payload.data.msg,
      };

    case COMMENT_DELETE_SUCCESS:
      window.location.reload();

      return {
        ...state,
      };

    // CLEAR COMMENT ERROR
    case CLEAR_COMMENT_ERROR_REQUEST:
      return {
        ...state,
      };
    case CLEAR_COMMENT_ERROR_SUCCESS:
      return {
        ...state,
        errorMsg: '',
      };
    case CLEAR_COMMENT_ERROR_FAILURE:
      return {
        ...state,
        errorMsg: 'Clear Error Fail',
      };

    default:
      return state;
  }
};

export default commentReducer;
