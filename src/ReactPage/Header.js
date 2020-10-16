import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'

const Header = () => {
    return <header>
        <nav>
            <NavLink activeClassName='active' exact to='/'>React</NavLink>
            <NavLink activeStyle={{ color: '#61DAFB' }} to='/documentation'>文档 </NavLink>
            <NavLink activeStyle={{ color: '#61DAFB' }} to='/tutorials'>教程 </NavLink>
            <NavLink activeStyle={{ color: '#61DAFB' }} to='/blog'>博客 </NavLink>
            <NavLink activeStyle={{ color: '#61DAFB' }} to='/community'>社区 </NavLink>
        </nav>
    </header>
}

export default Header


