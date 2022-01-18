import { Link, useParams } from 'react-router-dom';
import './product.css';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import { Publish } from '@material-ui/icons';
import { useContext, useEffect } from 'react';
import { getMovie } from '../../context/movieContext/apiCalls';
import { MovieContext } from '../../context/movieContext/MovieContext';

export default function Product() {
	const {
		dispatch,
		state: { movies: movie },
	} = useContext(MovieContext);
	const { movieId } = useParams();

	useEffect(() => {
		getMovie(dispatch, movieId);
	}, [dispatch, movieId]);

	return (
		<div className="product">
			<div className="productTitleContainer">
				<h1 className="productTitle">Movie</h1>
				<Link to="/newproduct">
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
