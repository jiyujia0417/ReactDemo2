import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import './SearchTab.css'
import React, { Component } from 'react'
import 'antd-mobile/dist/antd-mobile.css'
import { withRouter } from "react-router-dom"

class SearchTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    FoucusChange=()=>{
        this.props.history.push('/JumpChange')
    }
    render() {
        console.log('search:', this.props);
        console.log('location',this.props.location);
        const { pathname } = this.props.location;

        return (<div>
            <header className="header">
                <i className='iconfont icon-taobao' id="search-tab" />
                <WingBlank>
                    <SearchBar onFocus={this.FoucusChange} className="search-bar" placeholder="寻找宝贝店铺" ref={ref => this.autoFocusInst = ref} />
                </WingBlank>
                <WhiteSpace />
            </header>



            {/* <WhiteSpace />
            <WingBlank><div className="sub-title">Show cancel button</div></WingBlank>
            <SearchBar
                value={this.state.value}
                placeholder="Search"
                onSubmit={value => console.log(value, 'onSubmit')}
                onClear={value => console.log(value, 'onClear')}
                onFocus={() => console.log('onFocus')}
                onBlur={() => console.log('onBlur')}
                onCancel={() => console.log('onCancel')}
                showCancelButton
                onChange={this.onChange}
            /> */}
        </div>);
    }
}

export default withRouter(SearchTab)