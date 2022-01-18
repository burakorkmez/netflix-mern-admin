import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Movie from './pages/movie/Movie';
import NewMovie from './pages/newMovie/NewMovie';
import Login from './pages/login/Login';
import { useContext } from 'react';
import { AuthContext } from './context/authContext/AuthContext';
import ListofList from './pages/listofList/ListofList';
import List from './pages/list/List';

function App() {
	const {
		state: { user }, // destructuring 2 times
	} = useContext(AuthContext);

	return (
		<BrowserRouter>
			<Switch>
				<Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
				<>
					<Navbar />
					<div className="container">
						<Sidebar />
						<Route exact path="/">
							{user && <Home />}
							{!user && <Redirect to="/login" />}
						</Route>

						<Route exact path="/users">
							{user && <UserList />}

							{!user && <Redirect to="/login" />}
						</Route>
						<Route exact path="/user/:userId">
							{user && <User />}

							{!user && <Redirect to="/login" />}
						</Route>
						<Route exact path="/newUser">
							{user && <NewUser />}

							{!user && <Redirect to="/login" />}
						</Route>
						<Route path="/movies">
							{user && <ProductList />}
							{!user && <Redirect to="/login" />}
						</Route>
						<Route path="/product/:movieId">
							{user && <Movie />}
							{!user && <Redirect to="/login" />}
						</Route>

						<Route path="/newMovie">
							{user && <NewMovie />}
							{!user && <Redirect to="/login" />}
						</Route>
						<Route path="/lists">
							{user && <ListofList />}
							{!user && <Redirect to="/login" />}
						</Route>
						<Route path="/lists/:listId">
							{user && <List />}
							{!user && <Redirect to="/login" />}
						</Route>
					</div>
				</>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
