import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_RESET,
	USER_REGISTER_SUCCESS,
	USER_LOGIN_RESET,
	USER_UPDATE_RESET,
	USER_UPDATE_FAIL,
	USER_UPDATE_SUCCESS,
	USER_UPDATE_REQUEST,
} from "../constants/userConstants";

export const userRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_REGISTER_REQUEST:
			return {
				loading: true,
			};
		case USER_REGISTER_SUCCESS:
			return {
				loading: false,
				userInfo: action.payload,
			};
		case USER_REGISTER_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case USER_REGISTER_RESET:
			localStorage.removeItem("userDetails");
			return {};
		default:
			return state;
	}
};

export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_LOGIN_REQUEST:
			return {
				loading: true,
			};
		case USER_LOGIN_SUCCESS:
			return {
				loading: false,
				success: true,
			};
		case USER_LOGIN_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		case USER_LOGIN_RESET:
			return {};

		default:
			return state;
	}
};

export const userUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_UPDATE_REQUEST:
			return {
				loading: true,
			};
		case USER_UPDATE_SUCCESS:
			return {
				loading: false,
				success: true,
			};
		case USER_UPDATE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		case USER_UPDATE_RESET:
			return {};

		default:
			return state;
	}
};
