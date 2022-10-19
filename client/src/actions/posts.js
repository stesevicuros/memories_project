import * as constants from '../constants/actionTypes';
import * as api from '../api';

// Action Creators
export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();
		dispatch({ type: constants.FETCH_ALL, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const getPostBySearch = (searchQuery) => async (dispatch) => {
	try {
		const {
			data: { data },
		} = await api.fetchPostsBySearch(searchQuery);

		dispatch({ type: constants.FETCH_BY_SEARCH, payload: data });

		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post);
		dispatch({ type: constants.CREATE, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const updatePost = (id, post) => async (dispatch) => {
	try {
		const { data } = await api.updatePost(id, post);

		dispatch({ type: constants.UPDATE, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const deletePost = (id) => async (dispatch) => {
	try {
		await api.deletePost(id);

		dispatch({ type: constants.DELETE, payload: id });
	} catch (error) {
		console.log(error.message);
	}
};

export const likePost = (id) => async (dispatch) => {
	try {
		const { data } = await api.likePost(id);

		dispatch({ type: constants.UPDATE, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};
