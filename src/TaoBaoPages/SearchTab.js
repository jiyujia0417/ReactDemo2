import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import './SearchTab.css'
import React, { Component } from 'react'
import 'antd-mobile/dist/antd-mobile.css'
import { withRouter } from "react-router-dom"

class SearchTab extends React.Component {

    render() {
        console.log('search:', this.props);
        console.log('location', this.props.location);

        return (
            <div>
                {/* <i className='iconfont icon-taobao' id="search-tab" /> */}
                <SearchBar
                // style={{backgroundImage: "url(" + require("https://tse3-mm.cn.bing.net/th/id/OIP.79ivlHto5dnXkfZX1Z3aLAHaGl?w=209&h=185&c=7&o=5&dpr=2&pid=1.7") + ")"}}
                    onCancel={() => { console.log('111') }}
                    onFocus={() => {
                        this.props.history.push('/JumpChange')
                    }}
                    onCancel={() => console.log('onCancel')}
                    className="search-bar" placeholder="寻找宝贝店铺" ref={ref => this.autoFocusInst = ref} />

            </div>);
    }
}

export default withRouter(SearchTab)