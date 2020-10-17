import { SearchBar } from 'antd-mobile';
import SearchTab from './SearchTab'
import React, { Component } from 'react'
import MyTab from './MyTab';
import Carousels from './Carousels';

export default class Home extends Component {
    FocusChange=(props)=>{
        console.log(props);
    }
    render() {
        return (
            <div>
                 <SearchTab />
                 <Carousels/>
                 <MyTab/>
            </div>
        )
    }
}



// const Home = () =>{
//     return (
       
//     )
// }

// export default Home;