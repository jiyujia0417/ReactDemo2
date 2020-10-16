import React, { Component } from 'react'
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
import './App.css'
import { Button, TabBar } from 'antd-mobile';
import MyType from './MyType';
import { Route, Router, Switch, NavLink } from 'react-router-dom';
import DocContent from '../ReactPage/DocContent';
import Documentation from '../ReactPage/Documentation';

const App = () => {
    return <Router>
        <Switch>
            <Route exact path='/' component={MyType}/>
            <Route path='/documentation' component={Documentation}/>
        </Switch>
    </Router>
}
export default App