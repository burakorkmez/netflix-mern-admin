import './newList.css';
import { useContext, useEffect, useState } from 'react';
import { getMovies } from '../../context/movieContext/apiCalls';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { ListContext } from '../../context/listContext/ListContext';
import { createList } from '../../context/listContext/apiCalls';
import { useHistory } from 'react-router-dom';

export default function NewList() {
	const [list, setList] = useState(null);

	const { dispatch } = useContext(ListContext);
	const {
		dispatch: dispatchMovie,
		state: { movies },
	} = useContext(MovieContext);

	const history = useHistory();

	const handleChange = (e) => {
		const value = e.target.value;

		setList((prev) => ({ ...prev, [e.target.name]: value }));
	};

	const handleSelect = (e) => {
		let value = Array.from(e.target.selectedOptions, (option) => option.value);
		setList((prev) => ({ ...prev, [e.target.name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		(async () => {
			const res = await createList(dispatch, list);
			if (res.status === 201) history.push('/lists');
		})();
	};

	useEffect(() => {
		getMovies(dispatchMovie);
	}, [dispatchMovie]);
	console.log(list);

	return (
		<div className="newList">
			<h1 className="addListTitle">New List</h1>
			<form className="addListForm">
				<div>
					<div className="addListItem">
						<label>Title</label>
						<input
							type="text"
							onChange={handleChange}
							placeholder="Popular Movies"
							name="title"
						/>
					</div>
					<div className="addListItem">
						<label>Genre</label>
						<input
							type="text"
							onChange={handleChange}
							placeholder="Action"
							name="genre"
						/>
					</div>
					<div className="addListItem">
						<label>Type</label>
						<select name="type" onChange={handleChange}>
							<option>Type</option>
							<option value="movie">Movie</option>
							<option value="series">Series</option>
						</select>
					</div>
				</div>
				<div className="addListItem">
					<label>Content</label>
					<select
						multiple
						name="content"
						className="contentSelect"
						onChange={handleSelect}
					>
						{movies.map((movie) => (
							<option key={movie._id} value={movie._id}>
								{movie.title}
							</option>
						))}
					</select>
				</div>

				<button className={`addListButton `} onClick={handleSubmit}>
					Create
				</button>
			</form>
		</div>
	);
}
