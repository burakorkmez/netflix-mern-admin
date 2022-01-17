import { createContext, useReducer } from 'react';

const INITIAL_STATE = {
	user: null,
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

		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

	return (
		<AuthContext.Provider value={{ state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};
