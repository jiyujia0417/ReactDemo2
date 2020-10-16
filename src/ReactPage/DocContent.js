import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect, Link, Switch, NavLink } from 'react-router-dom';
import Documentation from './Documentation'
const DocContent = (props) => {
    return <h1>
        {props.match.params.type}
    </h1>
}

export default DocContent