import { Link, useParams } from 'react-router-dom';
import './list.css';
import { useEffect, useState } from 'react';
import { getList } from '../../context/listContext/apiCalls';

export default function List() {
	const { listId } = useParams();
	const [list, setList] = useState(null);
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		setIsFetching(true);
		(async function () {
			const res = await getList(listId);
			setList(res);
			setIsFetching(false);
		})();
	}, [listId]);

	if (isFetching || !list) {
		return (
			<div className="spinner">
				<img
					src="/img/spinner.gif"
					alt="Loading spinner"
					className="spinnerImg"
				/>
			</div>
		);
	}
	return (
		<div className="list">
			<div className="listTitleContainer">
				<h1 className="listTitle">List</h1>
				<Link to="/newlist">
					<button className="listAddButton">Create</button>
				</Link>
			</div>
			<div className="listTop">
				<div className="listTopRight">
					<div className="listInfoTop">
						<span className="listName">{list.title}</span>
					</div>
					<div className="listInfoBottom">
						<div className="listInfoItem">
							<span className="listInfoKey">id:</span>
							<span className="listInfoValue">{list._id}</span>
						</div>
						<div className="listInfoItem">
							<span className="listInfoKey">genre:</span>
							<span className="listInfoValue">{list.genre}</span>
						</div>

						<div className="listInfoItem">
							<span className="listInfoKey">type:</span>
							<span className="listInfoValue">{list.type}</span>
						</div>
					</div>
				</div>
			</div>
			<div className="listBottom">
				<form className="listForm">
					<div className="listFormLeft">
						<label>List Name</label>
						<input type="text" placeholder={list.title} />

						<label>Genre</label>
						<input type="text" placeholder={list.genre} />
						<label>Type</label>
						<input type="text" placeholder={list.type} />
					</div>
					<div className="listFormRight">
						<button className="listButton">Update</button>
					</div>
				</form>
			</div>
		</div>
	);
}
