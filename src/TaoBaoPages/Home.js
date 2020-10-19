//Home.js

import SearchTab from './SearchTab'
import React, { Component } from 'react'
import MyTab from './MyTab';
import Carousels from './Carousels';
import Products from './Products'

export default class Home extends Component {
    FocusChange = (props) => {
        console.log(props);
    }
    render() {
        return (
            <div>
                <SearchTab />
                <Carousels />
                <Products />
                <MyTab />
            </div>
        )
    }
}
