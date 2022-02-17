import axios from "axios";
import { useSelector } from "react-redux";
import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_UPDATE_FAIL,
	USER_UPDATE_REQUEST,
	USER_UPDATE_SUCCESS,
} from "../constants/userConstants";

export const register = (name, email, password) => async (dispatch) => {
	try {
		dispatch({ type: USER_REGISTER_REQUEST });
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.post(
			"http://localhost:5000/api/users",
			{ name, email, password },
			config
		);
		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: data,
		});

		localStorage.setItem("userDetails", JSON.stringify(data));
	} catch (err) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: USER_LOGIN_REQUEST });
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.post(
			"http://localhost:5000/api/users/login",
			{ email, password },
			config
		);
		dispatch({
			type: USER_LOGIN_SUCCESS,
		});

		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: data,
		});

		localStorage.setItem("userDetails", JSON.stringify(data));
	} catch (err) {
		dispatch({
			type: USER_LOGIN_FAIL,
			payload:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const updateUserAction = (name, email) => async (dispatch) => {
	const userSignup = useSelector((state) => state.userSignup);
	const {
		userInfo: { token },
	} = userSignup;
	try {
		dispatch({ type: USER_UPDATE_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		};

		const { data } = await axios.put(
			"http://localhost:5000/api/users/",
			{ name, email },
			config
		);
		dispatch({
			type: USER_UPDATE_SUCCESS,
			payload: data,
		});
		localStorage.setItem("userDetails", JSON.stringify(data));
	} catch (err) {
		dispatch({
			type: USER_UPDATE_FAIL,
			payload:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};
