import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<div className="container">
					<Sidebar />
					<Home />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
