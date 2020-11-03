// Detail.js

import { NavBar, Icon } from 'antd-mobile';
import React from 'react'
import { withRouter } from 'react-router-dom';
import BottomTab from './BottomTab';
import './detail.css'

const Detail = (props) => {
   
    return <div>
        <div style={{ position: "fixed", top: '0', width: '100%' }}>
            <NavBar
                style={{ background: 'none' }}
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => props.history.goBack()}
            ></NavBar>
        </div>
        <img
            src={props.location.search.slice(1)}
            alt=""
            style={{ width: '100%', verticalAlign: 'top' }}
        />
       
        <BottomTab />

    </div>
}
export default withRouter(Detail)