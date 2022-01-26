import './widgetSm.css';
import { Visibility } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../../config';

export default function WidgetSm() {
	const [newUsers, setNewUsers] = useState([]);

	useEffect(() => {
		const getUsers = async () => {
			try {
				const res = await axiosInstance.get('/users?new=true', {
					headers: {
						token:
							'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
					},
				});
				setNewUsers(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getUsers();
	}, []);
	return (
		<div className="widgetSm">
			<span className="widgetSmTitle">New Join Members</span>
			<ul className="widgetSmList">
				{newUsers &&
					newUsers.map((user) => (
						<li className="widgetSmListItem" key={user._id}>
							<img
								src={
									user.profilePic ||
									'https://pbs.twimg.com/media/DmBraqkXcAA1Yco.jpg'
								}
								alt=""
								className="widgetSmImg"
							/>
							<div className="widgetSmUser">
								<span className="widgetSmUsername">{user.username}</span>
							</div>
							<button className="widgetSmButton">
								<Visibility className="widgetSmIcon" />
								Display
							</button>
						</li>
					))}
			</ul>
		</div>
	);
}
