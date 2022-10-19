import * as constants from '../constants/actionTypes';

export default (posts = [], action) => {
	switch (action.type) {
		case constants.DELETE:
			return posts.filter((post) => post._id !== action.payload);
		case constants.UPDATE:
			return posts.map((post) =>
				post._id === action.payload._id ? action.payload : post
			);
		case constants.FETCH_ALL:
		case constants.FETCH_BY_SEARCH:
			return action.payload;
		case constants.CREATE:
			return [...posts, action.payload];
		default:
			return posts;
	}
};
