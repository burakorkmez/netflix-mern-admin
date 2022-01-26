import { axiosInstance } from '../../config';

export const login = async (user, dispatch) => {
	dispatch({ type: 'LOGIN_START' });
	try {
		const res = await axiosInstance.post('auth/login', user);
		res.data.isAdmin && dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
	} catch (err) {
		dispatch({ type: 'LOGIN_FAILURE' });
	}
};
