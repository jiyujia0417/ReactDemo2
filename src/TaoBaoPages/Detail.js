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
            src={`https://img.alicdn.com/imgextra/i1/279512537/O1CN01vCErSe1UbzRoZgOr8-279512537.jpg_760x760Q50s50.jpg_.webp`}
            alt=""
            style={{ width: '100%', verticalAlign: 'top' }}
        />
        <div style={{ margin: '5px 10px', fontSize: '1em' }}>潮宏基 花丝糖果 黄18k金手链珍珠手饰彩金佐藤大联名</div>
        <BottomTab />

    </div>
}
export default withRouter(Detail)