//App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home';
import Cart from './Cart';
import Orderlist from './Orderlist';
import Me from './Me';
import JumpSearch from './JumpSearch';
import Detail from './Detail'
import More from './More';
import Login from './Login'

const App = () => {
	return <Router>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/home' component={Home} />
			<Route path='/cart' component={Cart} />
			<Route path='/orderlist' component={Orderlist} />
			<Route path='/me' component={Me} />
			<Route path='/more' component={Login} />
			<Route path='/JumpChange' component={JumpSearch} />
			<Route path='/detail' component={Detail} />
			{/* <Route path='/login' component={Login}/> */}
			<Route component={Home} />
		</Switch>
	</Router>
}
export default App;