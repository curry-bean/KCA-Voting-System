import {
  ADD_TO_CART,
  CHANGE_CART_QUANTITY,
  REMOVE_FROM_CART,
} from "../constants/cartConstants";

export const cartReducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: action.payload
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: action.payload
      };
      
    case CHANGE_CART_QUANTITY:
      return {
        ...state,
        cart:action.payload
      };

    default:
      return state;
  }
};

