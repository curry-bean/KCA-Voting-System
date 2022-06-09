import axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOG_OUT,
  USER_REGISTRATION_FAIL,
  USER_REGISTRATION_REQUEST,
  USER_REGISTRATION_SUCCESS,
} from "../constants/userConstants";

export const register =
  (username, email, phone, password) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTRATION_REQUEST,
      });
      const url = `${process.env.REACT_APP_SERVER_URL}api/createuser`;
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        url,
        {
          username,
          email,
          phone,
          password,
        },
        config
      );
      dispatch({
        type: USER_REGISTRATION_SUCCESS,
        payload: data,
      });

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTRATION_FAIL,
        payload: error.response.data.errorMessage,
      });
    }
  };

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const url = `${process.env.REACT_APP_SERVER_URL}api/loginuser`;
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      url,
      {
        email,
        password,
      },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log("error is ", error);
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response.data.errorMessage,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({
    type: USER_LOG_OUT,
  });
};
