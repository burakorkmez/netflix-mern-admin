import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<div className="container">
				<Sidebar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/users">
						<UserList />
					</Route>
					<Route exact path="/user/:userId">
						<User />
					</Route>
					<Route exact path="/newUser">
						<NewUser />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
