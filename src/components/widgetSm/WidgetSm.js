import './widgetSm.css';
import { Visibility } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function WidgetSm() {
	const [newUsers, setNewUsers] = useState([]);

	useEffect(() => {
		const getUsers = async () => {
			try {
				const res = await axios.get('/users?new=true', {
					headers: {
						token:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTQ0MGYxN2ZmMzk5MzM3Yzk1M2UyZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjQyOTkyMSwiZXhwIjoxNjQyODYxOTIxfQ.fdgpR5Kr3gVbJ2zT0JLnaj36XefAD2UwgKkMPgBkw2s',
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
						<li className="widgetSmListItem">
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
