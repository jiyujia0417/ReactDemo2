// Products.js

import { connect } from 'react-redux'
import React from 'react'
import { Grid } from 'antd-mobile';
import { withRouter } from "react-router-dom"
import { list } from './actionCreator'


const products = (props) => {
    console.log('prodects.props:', props);
    const product = () => {
        let url = 'https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/getgoodslist';
        fetch(url, {
            method: 'post',
            header: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then((res) => {
                props.dispatch(
                    list(res.data)
                )
            })
    }
    product();

    return (
        <div style={{ width: '100%' }}>
            <div className="sub-title" style={{ color: '#FF4E22', textAlign: 'center', height: '50px', lineHeight: '50px' }}>❤ 品质好物 ❤</div>
            <Grid data={props.productlist}
                itemStyle={{ height: '200px', width: '171px', margin: '9px 4.5px 0 4.5px' }}
                onClick={
                    (item) => {
                        props.history.push({
                            pathname: '/detail',
                            search: "img=" + item.img + "&title=" + item.title + "&id=" + item.id
                        })
                    }
                }
                columnNum={2}
                renderItem={dataItem => (
                    <div>
                        <img src={dataItem.img} style={{ width: '80%', border: 'node' }} alt="" />
                        <div style={{ color: '#888', fontSize: '7px', margin: '3px' }}>
                            <span>{dataItem.title}</span>
                            <br />
                            <span style={{ color: '#FF852A' }}>￥ {dataItem.price} </span>
                            <span> {dataItem.id}人已购买</span>
                        </div>
                    </div>

                )}
            />
            <div className="sub-title" style={{ color: '#FF4E22', textAlign: 'center', height: '50px', lineHeight: '50px' }}>更多好物，敬请期待......</div>
            <div style={{ height: '50px' }}></div>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log('products.state:',state)
    return {
        productlist: state.datalist
    }
}
export default withRouter(connect(mapStateToProps)(products))