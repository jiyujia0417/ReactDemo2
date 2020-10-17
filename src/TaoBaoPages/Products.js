import React, { Component } from 'react'
import { Grid } from 'antd-mobile';
import { withRouter } from "react-router-dom"
// const data = Array.from(new Array(10)).map((_val, i) => ({
//     icon: 'https://img.alicdn.com/imgextra/i1/279512537/O1CN01vCErSe1UbzRoZgOr8-279512537.jpg_760x760Q50s50.jpg_.webp',
//     text: `潮宏基珠宝 花丝糖果 黄18k金手链珍珠手饰女彩金佐藤大联名`,
// }));

const data1 = Array.from(new Array(12)).map(() => ({
    icon: 'https://img.alicdn.com/imgextra/i1/279512537/O1CN01vCErSe1UbzRoZgOr8-279512537.jpg_760x760Q50s50.jpg_.webp',
}));

class Products extends Component {
    render() {
        console.log(this.props);
        return (
            <div style={{ textAlign: 'center', height: '900px' }}>
                <div className="sub-title" style={{ color: '#FF4E22', textAlign: 'center' }}>❤ 品质好物 ❤</div>
                <Grid data={data1}
                    onClick={() => {
                        this.props.history.push('/detail')
                    }}
                    columnNum={2}
                    renderItem={dataItem => (
                        <div style={{}}>
                            <img src={dataItem.icon} style={{ width: '80%', height: '90px' }} alt="" />
                            <div style={{ color: '#888', fontSize: '7px', margin: '3px' }}>
                                <span>潮宏基 花丝糖果 黄18k金手链珍珠手饰彩金佐藤大联名</span>
                                <br />
                                <div style={{ height: '10px' }}></div>
                                <span style={{ color: '#FF852A' }}>￥1,379  </span>
                                <span> 40人已购买</span>
                            </div>
                        </div>
                    )}
                />
                {/* <div style={{ color: '#FF4E22' }}>更多好物，敬请期待</div> */}
            </div>
        )
    }
}

export default withRouter(Products)