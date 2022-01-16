import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<div className="container">
					<Sidebar />
					<div className="other">other pages</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
