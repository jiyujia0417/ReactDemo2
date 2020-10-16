import { SearchBar } from 'antd-mobile';
import SearchTab from './SearchTab'
import React, { Component } from 'react'

export default class Home extends Component {
    FocusChange=(props)=>{
        console.log(props);
    }
    render() {
        return (
            <div>
                 <SearchTab />
            </div>
        )
    }
}



// const Home = () =>{
//     return (
       
//     )
// }

// export default Home;