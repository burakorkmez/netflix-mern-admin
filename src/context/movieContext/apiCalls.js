import axios from 'axios';
import {
	createMovieFailure,
	createMovieStart,
	createMovieSuccess,
	deleteMovieFailure,
	deleteMovieStart,
	deleteMovieSuccess,
	getMoviesFailure,
	getMoviesStart,
	getMoviesSuccess,
} from './MovieActions';

// GET ALL
export const getMovies = async (dispatch) => {
	dispatch(getMoviesStart());
	try {
		const res = await axios.get('/movies', {
			headers: {
				token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
			},
		});
		dispatch(getMoviesSuccess(res.data));
	} catch (err) {
		dispatch(getMoviesFailure());
	}
};

// GET a single movie
export const getMovie = async (id) => {
	// dispatch(getMoviesStart());
	try {
		const res = await axios.get('/movies/find/' + id, {
			headers: {
				token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
			},
		});
		return res.data;
		// dispatch(getMoviesSuccess(res.data));
	} catch (err) {
		return err;
	}
};

// CREATE A MOVIE
export const createMovie = async (dispatch, movie) => {
	dispatch(createMovieStart());
	try {
		const res = await axios.post('/movies', movie, {
			headers: {
				token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
			},
		});
		dispatch(createMovieSuccess(res.data));
	} catch (err) {
		dispatch(createMovieFailure());
	}
};

// DELETE
export const deleteMovie = async (dispatch, id) => {
	dispatch(deleteMovieStart());
	try {
		const res = await axios.delete('/movies/' + id, {
			headers: {
				token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
			},
		});
		dispatch(deleteMovieSuccess(id));
	} catch (err) {
		console.log(err);
		dispatch(deleteMovieFailure());
	}
};
