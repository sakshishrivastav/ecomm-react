import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Address from './Pages/Address';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Login from './Pages/Login';
import OrderHistory from './Pages/OrderHistory';
import AccountDetail from './Pages/AccountDetail';
import RelatedProduct from './components/RelatedProduct';
import CategoryPages from './Pages/CategoryPages';
import Wishlist from './components/Wishlist';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/address" component={Address} />
					<Route exact path="/accountdetails" component={AccountDetail} />
					<Route
						exact
						path="/orderorderhistoryhistory"
						component={OrderHistory}
					/>
					<Route exact path="/relatedproducts" component={RelatedProduct} />
					<Route exact path="/category" component={CategoryPages} />
					<Route exact path="/list" component={Wishlist} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
