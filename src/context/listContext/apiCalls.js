import axios from 'axios';
import {
	createListFailure,
	createListStart,
	createListSuccess,
	deleteListFailure,
	deleteListStart,
	deleteListSuccess,
	getListsFailure,
	getListsStart,
	getListsSuccess,
} from './ListActions';

// GET ALL
export const getLists = async (dispatch) => {
	dispatch(getListsStart());
	try {
		const res = await axios.get('/lists', {
			headers: {
				token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
			},
		});
		dispatch(getListsSuccess(res.data));
	} catch (err) {
		dispatch(getListsFailure());
	}
};

// GET a single list
export const getList = async (id) => {
	// dispatch(getMoviesStart());
	try {
		const res = await axios.get('/lists/find/' + id, {
			headers: {
				token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
			},
		});
		return res.data;
		// dispatch(getMoviesSuccess(res.data));
	} catch (err) {
		return err;
	}
};

// CREATE A LIST
export const createList = async (dispatch, list) => {
	dispatch(createListStart());
	try {
		const res = await axios.post('/lists', list, {
			headers: {
				token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
			},
		});
		dispatch(createListSuccess(res.data));
		return res;
	} catch (err) {
		dispatch(createListFailure());
	}
};

// DELETE
export const deleteList = async (dispatch, id) => {
	dispatch(deleteListStart());
	try {
		await axios.delete('/lists/' + id, {
			headers: {
				token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
			},
		});
		dispatch(deleteListSuccess(id));
	} catch (err) {
		console.log(err);
		dispatch(deleteListFailure());
	}
};
