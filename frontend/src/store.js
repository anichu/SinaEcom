import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import {
	addProductReducer,
	getProductReducer,
	getSingleProductReducer,
	editProductReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
const reducer = combineReducers({
	userSignup: userRegisterReducer,
	userLogin: userLoginReducer,
	cart: cartReducer,
	addProduct: addProductReducer,
	editProduct: editProductReducer,
	getProducts: getProductReducer,
	getSingleProduct: getSingleProductReducer,
});

const userInfoFromStorage = localStorage.getItem("userDetails")
	? JSON.parse(localStorage.getItem("userDetails"))
	: null;

const cartItemsFromStorage = localStorage.getItem("cartItems")
	? JSON.parse(localStorage.getItem("cartItems"))
	: [];

const initialState = {
	cart: {
		cartItems: cartItemsFromStorage,
	},
	userSignup: {
		userInfo: userInfoFromStorage,
	},
};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
