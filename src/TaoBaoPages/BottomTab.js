import React from 'react';
import 'antd-mobile/dist/antd-mobile.css'
import { Button, TabBar, List, Flex } from "antd-mobile"
import { withRouter } from "react-router-dom"
import './bottomTab.css'
const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>Block</div>
);
class MyTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
        };
    }
    render() {
        console.log('home:', this.props);
        const { pathname } = this.props.location;
        return (

            <div className='bottom'>
              
                <Button inline style={{ width: '14%', height: '100px', fontSize: '0.4em' }} >
                    <img style={{padding:'0',margin:'0',lineHeight:'-10px'}} className='iconfont icon-dianpu'></img>
                    <i style={{padding:'0',margin:'0'}}>店铺</i>
                    </Button>
                <Button inline style={{ width: '14%', height: '100px', fontSize: '0.4em' }} >客服</Button>
                <Button inline style={{ width: '14%', height: '100px', fontSize: '0.4em' }} >收藏</Button>

                <Button inline style={{ width: '29%', height: '100px', color: '#fff', backgroundColor: '#FF9500', fontSize: '1em', textAlign: 'center', lineHeight: '50px' }}>
                    
                    加入购物车
                </Button>
                <Button inline style={{ width: '29%', height: '100px', color: '#fff', backgroundColor: '#FF0036', fontSize: '1em', textAlign: 'center', lineHeight: '50px' }}>立即购买</Button>

            </div>
        );
    }
}
export default withRouter(MyTab);