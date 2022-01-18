import axios from 'axios';
import { getListsFailure, getListsStart, getListsSuccess } from './ListActions';

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
