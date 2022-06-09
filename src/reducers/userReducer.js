import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOG_OUT,
  USER_REGISTRATION_FAIL,
  USER_REGISTRATION_REQUEST,
  USER_REGISTRATION_SUCCESS,
  USER_LOGIN_FAIL
} from "../constants/userConstants";

export const userRegistration = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTRATION_REQUEST:
      return {
        loading:true,
      };
    case USER_REGISTRATION_SUCCESS:
      return {
        loading:false,
        userInfo: action.payload,
      };
    case USER_REGISTRATION_FAIL:
        return{
        loading:false,
        error:action.payload
    }

    default:
      return state;
  }
};

export const userLogin = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading:true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading:false,
        userInfo: action.payload,
      };
    case USER_LOGIN_FAIL:
        return{
        loading:false,
        error:action.payload
    }

    default:
      return state;
  }
};

export const userLogout=(state={},action)=>{
  switch (action.type) {
    case USER_LOG_OUT:
      return{
           userInfo:action.payload
      }
      
    default:
      return state;
  }

}