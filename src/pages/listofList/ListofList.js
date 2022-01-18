import './listofList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { ListContext } from '../../context/listContext/ListContext';
import { deleteList, getLists } from '../../context/listContext/apiCalls';

export default function ListOfList() {
	const {
		dispatch,
		state: { lists },
	} = useContext(ListContext);

	const handleDelete = (id) => {
		deleteList(dispatch, id);
	};

	useEffect(() => {
		getLists(dispatch);
	}, [dispatch]);

	const columns = [
		{ field: '_id', headerName: 'ID', width: 150 },

		{ field: 'title', headerName: 'Title', width: 250 },
		{ field: 'genre', headerName: 'Genre', width: 250 },
		{ field: 'type', headerName: 'Type', width: 250 },

		{
			field: 'action',
			headerName: 'Action',
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={`/lists/${params.row._id}`}>
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
	if (!lists) {
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
			{lists && (
				<DataGrid
					rows={lists}
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
