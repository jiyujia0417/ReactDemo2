import { SearchBar } from 'antd-mobile';
import './SearchTab.css'
import React from 'react'
import 'antd-mobile/dist/antd-mobile.css'
import { withRouter } from "react-router-dom"

class SearchTab extends React.Component {

    render() {
        console.log('search:', this.props);
        console.log('location', this.props.location);

        return (
            <div className='searchTab'>
                <SearchBar
                    onCancel={() => { console.log('111') }}
                    onFocus={() => {
                        this.props.history.push('/JumpChange')
                    }}
                    className="search-bar" placeholder="寻找宝贝店铺" ref={ref => this.autoFocusInst = ref} />

            </div>);
    }
}

export default withRouter(SearchTab)