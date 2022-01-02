import {
	USER_LOGOUT_FAIL,
	USER_LOGOUT_REQUEST,
	USER_LOGOUT_SUCCESS,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_RESET,
	USER_REGISTER_SUCCESS,
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

export const userLogoutReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_LOGOUT_REQUEST:
			return {
				loading: true,
			};
		case USER_LOGOUT_SUCCESS:
			return {
				loading: false,
				success: true,
			};
		case USER_LOGOUT_FAIL:
			return {
				loading: false,
			};
		default:
			return state;
	}
};
