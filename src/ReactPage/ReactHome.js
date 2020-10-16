import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect, Link, Switch, NavLink, useLocation, useParams, useRouteMatch, useHistory } from 'react-router-dom';
import Documentation from './Documentation';
import Blog from './Blog';
import Tutorials from './Tutorials';
import Header from './Header';
import Community from './Community';
import Home from './Home';
import Login from './Login';
import routes from '../router.config';
import { render } from '@testing-library/react';
/*
路由基本配置
路由传参（以及获取参数-props）
动态路由（/:pages）
js跳转
权限路由
*/

function PrivateRoute({ component: Com, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                localStorage.getItem('userInfo') ? <Com /> : (<Redirect to={{ pathname: '/login', state: location }} />)
            }
        />
    )
}

const ReactHome = () => {
    return <Router>
        <Header />
        {/* Home 组件的这种配置方式会在Home组件props里注入四个属性 */}
        <Switch>
            {
                routes.map(({pri,...rest})=>{
                    if(pri){
                        return <PrivateRoute {...rest} />
                    }
                    return <Route {...rest}/>
                })

            }
            {/* <Route exact path='/' component={Home} />
            <PrivateRoute path='/documentation' component={Documentation}></PrivateRoute>
            <PrivateRoute path='/tutorials' component={Tutorials}></PrivateRoute>
            <PrivateRoute path='/blog' component={Blog}></PrivateRoute>
            <PrivateRoute path='/community' component={Community}></PrivateRoute>
            <Route path='/login' component={Login}></Route> */}
            {/* no-match */}
            {/* <Route path='*' component={()=>{<div>404</div>}}></Route> */}
        </Switch>
    </Router>
}

export default ReactHome


