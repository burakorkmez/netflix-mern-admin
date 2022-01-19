import './newList.css';
import { useContext, useEffect, useState } from 'react';
import { getMovies } from '../../context/movieContext/apiCalls';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { ListContext } from '../../context/listContext/ListContext';

export default function NewList() {
	const [list, setList] = useState(null);

	const { dispatch } = useContext(ListContext);
	const {
		dispatch: dispatchMovie,
		state: { movies },
	} = useContext(MovieContext);

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
							placeholder="John Wick"
							name="Title"
						/>
					</div>
					<div className="addListItem">
						<label>Genre</label>
						<input
							type="text"
							onChange={handleChange}
							placeholder="Genre"
							name="genre"
						/>
					</div>
					<div className="addListItem">
						<label>Type</label>
						<select name="type" onChange={handleChange}>
							<option disabled>Type</option>
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
