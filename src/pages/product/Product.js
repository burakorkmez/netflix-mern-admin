import { Link, useParams } from 'react-router-dom';
import './product.css';
import { Publish } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { getMovie } from '../../context/movieContext/apiCalls';

export default function Product() {
	const { movieId } = useParams();
	const [movie, setMovie] = useState(null);
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		setIsFetching(true);
		(async function () {
			const res = await getMovie(movieId);
			setMovie(res);
			setIsFetching(false);
		})();
	}, [movieId]);
	console.log(movie);

	if (isFetching || !movie) {
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
		<div className="product">
			<div className="productTitleContainer">
				<h1 className="productTitle">Movie</h1>
				<Link to="/newmovie">
					<button className="productAddButton">Create</button>
				</Link>
			</div>
			<div className="productTop">
				<div className="productTopRight">
					<div className="productInfoTop">
						<img src={movie.img} alt="" className="productInfoImg" />
						<span className="productName">{movie.title}</span>
					</div>
					<div className="productInfoBottom">
						<div className="productInfoItem">
							<span className="productInfoKey">id:</span>
							<span className="productInfoValue">{movie._id}</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">genre:</span>
							<span className="productInfoValue">{movie.genre}</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">year:</span>
							<span className="productInfoValue">{movie.year}</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">limit:</span>
							<span className="productInfoValue">{movie.limit}</span>
						</div>
					</div>
				</div>
			</div>
			<div className="productBottom">
				<form className="productForm">
					<div className="productFormLeft">
						<label>Movie Name</label>
						<input type="text" placeholder={movie.title} />
						<label>Year</label>
						<input type="text" placeholder={movie.year} />
						<label>Genre</label>
						<input type="text" placeholder={movie.genre} />
						<label>Limit</label>
						<input type="text" placeholder={movie.limit} />
						<label>Trailer</label>
						<input type="file" placeholder={movie.trailer} />
						<label>Video</label>
						<input type="file" placeholder={movie.video} />
					</div>
					<div className="productFormRight">
						<div className="productUpload">
							<img src={movie.img} alt="" className="productUploadImg" />
							<label htmlFor="file">
								<Publish className="productPublishIcon" />
							</label>
							<input type="file" id="file" style={{ display: 'none' }} />
						</div>
						<button className="productButton">Update</button>
					</div>
				</form>
			</div>
		</div>
	);
}
