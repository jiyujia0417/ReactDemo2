import React from 'react';
import { BrowserRouter as Router, Redirect, Route, NavLink, Switch } from 'react-router-dom'
import {Button,TabBar} from 'antd-mobile'
import MyTab from './MyTab';
import Home from './Home';
import Cart from './Cart';
import Orderlist from './Orderlist';
import Me from './Me';
import JumpSearch from './JumpSearch';

const App = ()=>{
	return <Router>
		<Switch>
			<Route exact path='/home' component={Home} />
            <Route path='/cart' component={Cart} />
            <Route path='/orderlist' component={Orderlist}/>
            <Route path='/me' component={Me}/>
			<Route path='/JumpChange' component={JumpSearch}/>
		</Switch>
        <MyTab/>
	</Router>
}
export default App;