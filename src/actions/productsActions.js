import axios from "axios";
import {
  PRODUCTS_LIST_FAIL,
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
} from "../constants/productConstants";

export const Products = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCTS_LIST_REQUEST,
    });

    const headers = {
      "Content-Type": "application/json",
    };
    const url = `${process.env.REACT_APP_SERVER_URL}api/products`;

    const { data } = await axios.get(url, { headers });

    dispatch({
      type: PRODUCTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: PRODUCTS_LIST_FAIL,
      payload: message,
    });
  }
};
