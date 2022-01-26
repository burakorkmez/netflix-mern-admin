import { useContext, useState } from 'react';
import { login } from '../../context/authContext/apiCalls';
import { AuthContext } from '../../context/authContext/AuthContext';
import './login.css';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const {
		dispatch,
		state: { isFetching }, // destructuring 2 times
	} = useContext(AuthContext);

	const handleLogin = (e) => {
		e.preventDefault();
		login({ email, password }, dispatch);
	};

	return (
		<div className="login">
			<form className="loginForm">
				<input
					className="loginInput"
					type="email"
					placeholder="email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					className="loginInput"
					type="password"
					placeholder="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				{!isFetching ? (
					<button className="loginBtn" onClick={handleLogin}>
						Login
					</button>
				) : (
					<button className="disabledBtn" onClick={handleLogin} disabled>
						loading...
					</button>
				)}
			</form>
		</div>
	);
}
