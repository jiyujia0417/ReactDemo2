import React, { Component } from 'react';
// import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { HashRouter as Router, Route, Redirect, Link, Switch, NavLink } from 'react-router-dom';
// switch包裹Route，如果有重复的话只会显示最先显示的

// 简单的路由配置

const Home = () => {
    return <div>Home</div>
}

const About = (props) => {
    console.log(props);
    console.log(props.location.state);
    return <div>About</div>
}

const Content = (props) => {
    console.log(props);
    return <div>{props.match.params.page}</div>
}
// 组件一般首字母大写，路径一般小写 
const Hello = () => {

    return <Router>
        <ul>
            <li><NavLink activeStyle={{ color: 'red' }} to='/content/1'>content01</NavLink></li>
            <li><NavLink activeStyle={{ color: 'red' }} to='/content/2'>content02</NavLink></li>
            <li><NavLink activeStyle={{ color: 'red' }} to='/content/3'>content03</NavLink></li>

            <li><NavLink activeStyle={{ color: 'red' }} to='/'>home</NavLink></li>
            <li><Link to={{
                pathname: '/about',
                state: { id: 100 }
            }}>about</Link></li>
            <li><Link to='/news'>news</Link></li>
        </ul>

        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/news' render={() => <div>News</div>} />
            <Route path='/about' render={() => <Redirect to='/news' />} />
            <Route path='/content/:page' component={Content} />
        </Switch>
    </Router>

}

export default Hello;
