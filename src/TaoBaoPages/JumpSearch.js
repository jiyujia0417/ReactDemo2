import './SearchTab.css'
import React, { Component } from 'react'
import 'antd-mobile/dist/antd-mobile.css'
import { withRouter } from "react-router-dom"
import './jumpSearch.css'
import { SearchBar, Button, WhiteSpace, WingBlank, TabBar } from 'antd-mobile';

class JumpSearch extends React.Component {
    state = {
        value: '美食',
    };
    onChange = (value) => {
        console.log('onchange')
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };
    handleClick = () => {
        this.manualFocusInst.focus();
    }
    render() {
        return (<div>

            <SearchBar
                // value={this.state.value}
                placeholder="宝贝"
                onSubmit={value => console.log(value, 'onSubmit')}
                onClear={value => console.log(value, 'onClear')}
                onFocus={() => console.log('onFocus')}
                onBlur={() => console.log('onBlur')}
                onCancel={() => this.props.history.goBack()}
                showCancelButton
                onChange={this.onChange}
            />

        </div>);
    }
}

export default withRouter(JumpSearch)
