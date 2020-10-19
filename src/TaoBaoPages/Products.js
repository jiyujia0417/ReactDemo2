import React, { Component } from 'react'
import { Grid } from 'antd-mobile';
import { withRouter } from "react-router-dom"


const data = Array.from(new Array(12)).map(() => ({
    icon: 'https://img.alicdn.com/imgextra/i1/279512537/O1CN01vCErSe1UbzRoZgOr8-279512537.jpg_760x760Q50s50.jpg_.webp',
    text: `潮宏基珠宝 花丝糖果 黄18k金手链珍珠手饰女彩金佐藤大联名`,
    money: 1379,
    num: 40
}));

class Products extends Component {
    render() {
        console.log(this.props);
        return (
            <div style={{ width: '100%' }}>
                <div className="sub-title" style={{ color: '#FF4E22', textAlign: 'center' }}>❤ 品质好物 ❤</div>
                <Grid data={data}
                    itemStyle={{ height: '200px', width: '171px', margin: '9px 4.5px 0 4.5px' }}
                    onClick={() => {
                        this.props.history.push('/detail')
                    }}
                    columnNum={2}
                    renderItem={dataItem => (
                        <div>
                            <img src={dataItem.icon} style={{ width: '80%', border: 'node' }} alt="" />
                            <div style={{ color: '#888', fontSize: '7px', margin: '3px' }}>
                                <span>{dataItem.text}</span>
                                <br />
                                <span style={{ color: '#FF852A' }}>￥ {dataItem.money} </span>
                                <span> {dataItem.num}人已购买</span>
                            </div>
                        </div>
                        
                    )}
                />
                <div  className="sub-title" style={{ color: '#FF4E22', textAlign: 'center' }}>更多好物，敬请期待......</div>
                <div style={{height:'50px'}}></div>
            </div>
        )
    }
}

export default withRouter(Products)