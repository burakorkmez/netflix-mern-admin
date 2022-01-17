import React, { useContext } from 'react';
import './navbar.css';
import {
	NotificationsNone,
	Language,
	Settings,
	ExitToApp,
} from '@material-ui/icons';
import { AuthContext } from '../../context/authContext/AuthContext';
import { useHistory } from 'react-router-dom';

export default function Topbar() {
	const { dispatch } = useContext(AuthContext);

	let history = useHistory();

	const handleLogout = () => {
		dispatch({ type: 'LOGOUT' });
		// history.push('/login');
	};

	return (
		<div className="topbar">
			<div className="topbarWrapper">
				<div className="topLeft">
					<span className="logo">netFlix Admin</span>
				</div>
				<div className="topRight">
					<div className="topbarIconContainer">
						<NotificationsNone />
						<span className="topIconBadge">2</span>
					</div>
					<div className="topbarIconContainer">
						<Language />
						<span className="topIconBadge">2</span>
					</div>
					<div className="topbarIconContainer">
						<Settings />
					</div>
					<img
						src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt=""
						className="topAvatar"
					/>
					<button className="logout" onClick={handleLogout}>
						<ExitToApp />
						<span>Logout</span>
					</button>
				</div>
			</div>
		</div>
	);
}
