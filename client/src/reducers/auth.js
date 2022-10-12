import * as constants from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
	switch (action.type) {
		case constants.AUTH:
			localStorage.setItem(
				'profile',
				JSON.stringify({ ...action?.data })
			);
			return { ...state, authData: action?.data };
		case constants.LOGOUT:
			localStorage.clear();
			return { ...state, authData: null };

		default:
			return state;
	}
};
export default authReducer;
