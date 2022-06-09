import {
  PRODUCTS_LIST_FAIL,
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
} from "../constants/productConstants";

export const productsListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCTS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case PRODUCTS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case PRODUCTS_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
