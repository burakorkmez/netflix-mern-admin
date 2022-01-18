import './newMovie.css';
import { useContext, useState } from 'react';
import { projectStorage } from '../../firebase';
import { createMovie } from '../../context/movieContext/apiCalls';
import { MovieContext } from '../../context/movieContext/MovieContext';

export default function NewMovie() {
	const [movie, setMovie] = useState(null);
	const [img, setImg] = useState(null);
	const [imgTitle, setImgTitle] = useState(null);
	const [imgSm, setImgSm] = useState(null);
	const [trailer, setTrailer] = useState(null);
	const [video, setVideo] = useState(null);
	const [uploaded, setUploaded] = useState(0);

	const { dispatch } = useContext(MovieContext);
	// console.log(isFetching, 'fetch');
	const handleChange = (e) => {
		const value = e.target.value;
		setMovie((prev) => ({ ...prev, [e.target.name]: value }));
	};

	const upload = (items) => {
		items.forEach((item) => {
			const uploadTask = projectStorage
				.ref(`/items/${movie.title}/${item.file.name}`)
				.put(item.file);
			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log(progress);
				},
				(err) => console.log(err),
				() => {
					uploadTask.snapshot.ref.getDownloadURL().then((url) => {
						setMovie((prev) => {
							return { ...prev, [item.label]: url };
						});
						setUploaded((prev) => prev + 1);
					});
				}
			);
		});
	};

	const handleUpload = (e) => {
		e.preventDefault();
		upload([
			{ file: img, label: 'img' },
			{ file: imgTitle, label: 'imgTitle' },
			{ file: imgSm, label: 'imgSm' },
			{ file: trailer, label: 'trailer' },
			{ file: video, label: 'video' },
		]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		createMovie(dispatch, movie);
	};
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
						id="imgSm"
						name="imgSm"
						onChange={(e) => setImgSm(e.target.files[0])}
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
						type="number"
						onChange={handleChange}
						placeholder="2001"
						name="year"
					/>
				</div>
				<div className="addMovieItem">
					<label>Limit</label>
					<input
						type="number"
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
				{uploaded === 5 && (
					<button className={`addMovieButton `} onClick={handleSubmit}>
						Create
					</button>
				)}
				{uploaded !== 5 && (
					<button className={`addMovieButton`} onClick={handleUpload}>
						Upload
					</button>
				)}
			</form>
		</div>
	);
}
