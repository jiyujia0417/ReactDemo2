//Carousels.js

import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import './Carousels.css'

class Carousels extends React.Component {
    render() {
        return (
            <WingBlank>
                <Carousel
                    autoplay={true}
                    infinite={true}
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                >
                    <img
                        src={`https://gw.alicdn.com/imgextra/i1/47/O1CN01W5pthF1CDZFCQ9VAh_!!47-0-lubanu.jpg`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                        }}
                    />
                    <img
                        src={`https://img.alicdn.com/imgextra/i3/27/O1CN019CAYMI1C4PK6mp9qX_!!27-0-luban.jpg`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                        }}
                    />
                    <img
                        src={`https://gw.alicdn.com/imgextra/i4/78/O1CN01qZs3UU1CRlWJn1ZV1_!!78-0-lubanu.jpg`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                        }}
                    />
                    <img
                        src={`https://img.alicdn.com/imgextra/i1/20/O1CN01GptQEd1C1CYDkX44I_!!20-0-luban.jpg`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                        }}
                    />
                    <img
                        src={`https://gw.alicdn.com/imgextra/i3/67/O1CN01UPyUt41CMjANoqT1h_!!67-0-lubanu.jpg`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                        }}
                    />
                    <img
                        src={`https://gw.alicdn.com/imgextra/i5/44/O1CN01Y7eeN61CE1dk6UnSW_!!48-0-lubanu.jpg`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                        }}
                    />
                </Carousel>
            </WingBlank>
        );
    }
}
export default Carousels;