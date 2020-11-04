//Cart.js

import React from 'react'
import MyTab from './MyTab'
import { connect } from 'react-redux'

const Cart = (props) => {
    console.log('cart:',props);
    console.log('cart.mydata',props.mydata);
    return (
        <div>
            收藏
            {props.mydata.shoucang.map((item,index)=>
                <li key={index}>
                    {item}
                    <button
                    onClick = {()=>props.dispatch({
                        type:'DEL_SHOUCANG',
                        value:index
                    })}
                    >删除</button>
                </li>
            )}
            <MyTab/>
        </div>
        
    )
}

const mapStateToprops = (state) => {
    console.log(state);
    return { mydata: state }
}

export default connect(mapStateToprops)(Cart);