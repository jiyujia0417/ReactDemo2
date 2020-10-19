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
			<Route exact path='/' component={Home} />
			<Route path = '/home' component={Home}/>
            <Route path='/cart' component={Cart} />
            <Route path='/orderlist' component={Orderlist}/>
            <Route path='/me' component={Me}/>
			<Route path='/JumpChange' component={JumpSearch}/>
			<Route path='/detail' component={Detail}/>
			<Route render={()=><Redirect to='/'/>}/> 
			{/* <Route component={Home}/> */}
			{/* <Redirect from='/' to='/home'/> */}
		</Switch>
		
	</Router>
}
export default App;