import { createContext, useEffect, useReducer } from 'react';
import { useHistory } from 'react-router-dom';

const INITIAL_STATE = {
	user: JSON.parse(localStorage.getItem('user')) || null,
	isFetching: false,
	error: false,
};
export const AuthContext = createContext();

const AuthReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN_START':
			return { user: null, isFetching: true, error: false };
		case 'LOGIN_SUCCESS':
			return { user: action.payload, isFetching: false, error: false };
		case 'LOGIN_FAILURE':
			return { user: null, isFetching: false, error: true };
		case 'LOGOUT':
			return { user: null, isFetching: false, error: false };

		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
	let history = useHistory();

	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(state.user));

		// if (!state.user) {
		// 	history.push('/login');
		// }
	}, [state.user, history]);

	return (
		<AuthContext.Provider value={{ state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};
