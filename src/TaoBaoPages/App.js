import React from 'react';
import { BrowserRouter as Router, Redirect, Route, NavLink, Switch } from 'react-router-dom'
import {Button,TabBar} from 'antd-mobile'
import MyTab from './MyTab';
import Home from './Home';
import Cart from './Cart';
import Orderlist from './Orderlist';
import Me from './Me';
import JumpSearch from './JumpSearch';
import Detail from './Detail'
const App = ()=>{
	return <Router>
		<Switch>
			{/* <Redirect from='/' to='/home'/> */}
			{/* <Redirect from ='/' to='/home'/> */}
			<Route exact path='/' component={Home} />
			<Route path = '/home' component={Home}/>
            <Route path='/cart' component={Cart} />
            <Route path='/orderlist' component={Orderlist}/>
            <Route path='/me' component={Me}/>
			<Route path='/JumpChange' component={JumpSearch}/>
			<Route path='/detail' component={Detail}/>
		</Switch>
		
	</Router>
}
export default App;