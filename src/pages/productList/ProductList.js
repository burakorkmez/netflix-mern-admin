import './productList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { deleteMovie, getMovies } from '../../context/movieContext/apiCalls';

export default function ProductList() {
	const {
		dispatch,
		state: { movies },
	} = useContext(MovieContext);

	const handleDelete = (id) => {
		deleteMovie(dispatch, id);
	};

	useEffect(() => {
		getMovies(dispatch);
	}, [dispatch]);
	const columns = [
		{ field: '_id', headerName: 'ID', width: 90 },
		{
			field: 'movie',
			headerName: 'Movie',
			width: 220,
			renderCell: (params) => {
				return (
					<div className="productListItem">
						<img className="productListImg" src={params.row.img} alt="" />
						{params.row.title}
					</div>
				);
			},
		},
		{ field: 'genre', headerName: 'Genre', width: 120 },
		{ field: 'year', headerName: 'Year', width: 120 },
		{ field: 'limit', headerName: 'limit', width: 120 },
		{ field: 'isSeries', headerName: 'isSeries', width: 120 },

		{
			field: 'action',
			headerName: 'Action',
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link
							to={{ pathname: '/product/' + params.row._id, movie: params.row }}
						>
							<button className="productListEdit">Edit</button>
						</Link>
						<DeleteOutline
							className="productListDelete"
							onClick={() => handleDelete(params.row._id)}
						/>
					</>
				);
			},
		},
	];

	if (movies.length === 0) {
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

	console.log(movies);
	return (
		<div className="productList">
			{movies && Array.isArray(movies) && (
				<DataGrid
					rows={movies}
					disableSelectionOnClick
					columns={columns}
					pageSize={8}
					rowsPerPageOptions={[8]}
					checkboxSelection
					getRowId={(r) => r._id}
				/>
			)}
		</div>
	);
}
