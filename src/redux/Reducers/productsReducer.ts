import {
  UPDATE_PRODUCT_LIST_SOURCE,
  UPDATE_PRODUCT_LIST,
  SET_FIRST_PAGE,
  SET_NEXT_PAGE,
  SET_PREV_PAGE,
} from '../actionNames';
import moviesList from '@/movies-list';

const initialState = {
  productsSource: moviesList,
  products: [],
  paginationSize: 10,
  pageNumber: 1,
};

const productsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_PRODUCT_LIST_SOURCE:
      return {
        ...state,
        productsSource: action.list,
        products: action.list,
      };
    case UPDATE_PRODUCT_LIST:
      return {
        ...state,
        products: action.list,
      };
    case SET_FIRST_PAGE:
      return {
        ...state,
        pageNumber: 1,
      };
    case SET_PREV_PAGE:
      return {
        ...state,
        pageNumber: state.pageNumber - 1,
      };
    case SET_NEXT_PAGE:
      return {
        ...state,
        pageNumber: state.pageNumber + 1,
      };
    default:
      return state;
  }
};

export default productsReducer;
