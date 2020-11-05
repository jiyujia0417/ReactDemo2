//Cart.js

import { Grid } from 'antd-mobile';
import React from 'react'
import MyTab from './MyTab'
import { connect } from 'react-redux'

const Cart = (props) => {
    console.log('cart.props', props);
    console.log('cart.shoucang:', props.mydata.shoucang);
    console.log('cart.datalist', props.mydata.datalist);
    let arr = [];
    for (let i = 0; i < props.mydata.shoucang.length; i++) {
        arr.push(props.mydata.datalist.filter((item, index) => { return props.mydata.shoucang[i] == item.id })[0])
    }
    console.log('arr:', arr);
    return (

        <div>
            <p style={{ textAlign: 'center', margin: '5px', fontSize: '1.5em' }}>收藏列表</p>

            <Grid data={arr}
                itemStyle={{ height: '200px', width: '171px', margin: '9px 4.5px 0 4.5px' }}
                columnNum={2}
                renderItem={dataItem => (
                    <div>
                        <img src={dataItem.img} style={{ width: '80%' }} alt="" />
                        <div style={{ color: '#888', fontSize: '7px', margin: '3px' }}>
                            <span>{dataItem.title}</span>
                            <br />
                            <span style={{ color: '#FF852A' }}>￥ {dataItem.price} </span>
                            <button
                                style={{ border: '1px solid  #FF9500', color: '#fff', height: '20px', width: '50px', backgroundColor: '#FF9500' }}

                                onClick={() => props.dispatch({
                                    type: 'DEL_SHOUCANG',
                                    value: dataItem.id
                                })}
                            >删除</button>
                        </div>
                    </div>

                )}
            />
            <MyTab />
        </div>

    )
}

const mapStateToprops = (state) => {
    console.log(state);
    return { mydata: state }
}

export default connect(mapStateToprops)(Cart);