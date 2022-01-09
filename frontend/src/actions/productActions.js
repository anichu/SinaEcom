import axios from "axios";
import {
	PRODUCT_FAIL,
	PRODUCT_REQUEST,
	PRODUCT_SUCCESS,
	ADD_PRODUCT_FAIL,
	ADD_PRODUCT_REQUEST,
	ADD_PRODUCT_SUCCESS,
} from "../constants/productConstants";

export const product = () => async (dispatch) => {
	try {
		dispatch({ type: PRODUCT_REQUEST });
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.post(
			"http://localhost:5000/api/users",
			{},
			config
		);
		dispatch({
			type: PRODUCT_SUCCESS,
			payload: data,
		});

		localStorage.setItem("userDetails", JSON.stringify(data));
	} catch (err) {
		dispatch({
			type: PRODUCT_FAIL,
			payload:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const addProduct = (add) => async (dispatch, getState) => {
	try {
		dispatch({ type: ADD_PRODUCT_REQUEST });
		const {
			userSignup: { userInfo },
		} = getState();
		console.log(userInfo.token);
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.post(
			"http://localhost:5000/api/products",
			add,
			config
		);
		dispatch({
			type: ADD_PRODUCT_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: ADD_PRODUCT_FAIL,
			payload:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};