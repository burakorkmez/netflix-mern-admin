import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';
import { useContext } from 'react';
import { AuthContext } from './context/authContext/AuthContext';

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
						<Route path="/product/:productId">
							{user && <Product />}
							{!user && <Redirect to="/login" />}
						</Route>
						<Route path="/newproduct">
							{user && <NewProduct />}
							{!user && <Redirect to="/login" />}
						</Route>
					</div>
				</>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
