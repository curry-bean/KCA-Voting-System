import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { productsListReducer} from './reducers/productsReducer';
import { cartReducer } from './reducers/cartReducer';
import { userLogin, userLogout, userRegistration } from './reducers/userReducer';



const reducer = combineReducers({

     productList:productsListReducer,
     cartList:cartReducer,
     userLog:userLogin,
     userReg:userRegistration,
     userLogOut:userLogout
});

const userInfoFromStorage = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem("userInfo")):null


const initialState = {
    userLog:{userInfo:userInfoFromStorage}
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;