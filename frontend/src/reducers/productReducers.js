import {
	PRODUCT_FAIL,
	PRODUCT_REQUEST,
	PRODUCT_SUCCESS,
	ADD_PRODUCT_REQUEST,
	ADD_PRODUCT_SUCCESS,
	ADD_PRODUCT_FAIL,
} from "../constants/productConstants";

export const getProductReducer = (state = { products: null }, action) => {
	switch (action.type) {
		case PRODUCT_REQUEST:
			return {
				loading: true,
			};
		case PRODUCT_SUCCESS:
			return {
				loading: false,
				products: action.payload,
			};
		case PRODUCT_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const addProductReducer = (state = {}, action) => {
	switch (action.type) {
		case ADD_PRODUCT_REQUEST:
			return {
				loading: true,
			};
		case ADD_PRODUCT_SUCCESS:
			return {
				loading: false,
				success: true,
			};
		case ADD_PRODUCT_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
