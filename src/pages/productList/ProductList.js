import './productList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { getMovies } from '../../context/movieContext/apiCalls';

export default function ProductList() {
	const {
		dispatch,
		state: { movies },
	} = useContext(MovieContext);

	const handleDelete = (id) => {
		// setData(data.filter((item) => item.id !== id));
	};

	useEffect(() => {
		getMovies(dispatch);
	}, [dispatch]);
	console.log(movies);

	const columns = [
		{ field: '_id', headerName: 'ID', width: 90 },
		{
			field: 'movie',
			headerName: 'Movie',
			width: 200,
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
						<Link to={'/product/' + params.row.id}>
							<button className="productListEdit">Edit</button>
						</Link>
						<DeleteOutline
							className="productListDelete"
							onClick={() => handleDelete(params.row.id)}
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

	return (
		<div className="productList">
			{movies && (
				<DataGrid
					rows={movies}
					disableSelectionOnClick
					columns={columns}
					pageSize={8}
					checkboxSelection
					getRowId={(r) => r._id}
				/>
			)}
		</div>
	);
}
