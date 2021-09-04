import {
  POST_DETAIL_LOADING_FAILURE,
  POST_DETAIL_LOADING_REQUEST,
  POST_DETAIL_LOADING_SUCCESS,
  GET_VIEWS_REQUEST,
  GET_VIEWS_SUCCESS,
  GET_VIEWS_FAILURE,
  UPVIEWS_REQUEST,
} from '../types';

const initialState = {
  loading: false,
  writer: '',
  title: '',
  description: '',
  price: 0,
  images: [],
  sold: 0,
  views: 0,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIEWS_REQUEST:
    case UPVIEWS_REQUEST:
    case POST_DETAIL_LOADING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_DETAIL_LOADING_SUCCESS:
      return {
        ...state,
        writer: action.payload.writer,
        title: action.payload.title,
        description: action.payload.description,
        price: action.payload.price,
        images: action.payload.images,
        sold: action.payload.sold,
        views: action.payload.views,
        loading: false,
      };
    case POST_DETAIL_LOADING_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case GET_VIEWS_SUCCESS:
      return {
        ...state,
        views: action.payload,
      };
    case GET_VIEWS_FAILURE:
      return {
        ...state,
        views: 0,
      };
    default:
      return state;
  }
};

export default productReducer;
