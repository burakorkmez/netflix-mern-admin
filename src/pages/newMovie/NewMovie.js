import './newMovie.css';
import { useState } from 'react';
export default function NewMovie() {
	const [movie, setMovie] = useState(null);
	const [img, setImg] = useState(null);
	const [imgTitle, setImgTitle] = useState(null);
	const [imgThumb, setImgThumb] = useState(null);
	const [trailer, setTrailer] = useState(null);
	const [video, setVideo] = useState(null);

	const handleChange = (e) => {
		const value = e.target.value;
		setMovie((prev) => ({ ...prev, [e.target.name]: value }));
	};
	console.log(movie);
	return (
		<div className="newMovie">
			<h1 className="addMovieTitle">New Movie</h1>
			<form className="addMovieForm">
				<div className="addMovieItem">
					<label>Image</label>
					<input
						type="file"
						id="img"
						name="img"
						onChange={(e) => setImg(e.target.files[0])}
					/>
				</div>
				<div className="addMovieItem">
					<label>Title Image</label>
					<input
						type="file"
						id="imgTitle"
						name="imgTitle"
						onChange={(e) => setImgTitle(e.target.files[0])}
					/>
				</div>
				<div className="addMovieItem">
					<label>Thumbnail Image</label>
					<input
						type="file"
						id="imgThumb"
						name="imgThumb"
						onChange={(e) => setImgThumb(e.target.files[0])}
					/>
				</div>
				<div className="addMovieItem">
					<label>Title</label>
					<input
						type="text"
						onChange={handleChange}
						placeholder="John Wick"
						name="title"
					/>
				</div>
				<div className="addMovieItem">
					<label>Description</label>
					<input
						type="text"
						onChange={handleChange}
						placeholder="description"
						name="desc"
					/>
				</div>
				<div className="addMovieItem">
					<label>Year</label>
					<input
						type="text"
						onChange={handleChange}
						placeholder="2001"
						name="year"
					/>
				</div>
				<div className="addMovieItem">
					<label>Limit</label>
					<input
						type="text"
						onChange={handleChange}
						placeholder="16"
						name="limit"
					/>
				</div>
				<div className="addMovieItem">
					<label>Genre</label>
					<input
						type="text"
						onChange={handleChange}
						placeholder="Crime"
						name="genre"
					/>
				</div>
				<div className="addMovieItem">
					<label>Duration</label>
					<input
						type="text"
						onChange={handleChange}
						placeholder="duration"
						name="duration"
					/>
				</div>
				<div className="addMovieItem">
					<label>Is series?</label>
					<select name="isSeries" id="isSeries" onChange={handleChange}>
						<option value="false">No</option>
						<option value="true">Yes</option>
					</select>
				</div>
				<div className="addMovieItem">
					<label>Trailer</label>
					<input
						type="file"
						name="trailer"
						onChange={(e) => setTrailer(e.target.files[0])}
					/>
				</div>
				<div className="addMovieItem">
					<label>Video</label>
					<input
						type="file"
						name="video"
						onChange={(e) => setVideo(e.target.files[0])}
					/>
				</div>
				<button className="addMovieButton">Create</button>
			</form>
		</div>
	);
}
