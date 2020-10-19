import React from 'react';
import 'antd-mobile/dist/antd-mobile.css'
import { Button, TabBar, List, Flex } from "antd-mobile"
import { withRouter } from "react-router-dom"
import './bottomTab.css'
import dianpu from '../assets/dianpu.png'
// const PlaceHolder = ({ className = '', ...restProps }) => (
//     <div className={`${className} placeholder`} {...restProps}>Block</div>
// );
class MyTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
        };
    }
    render() {
        console.log('home:', this.props);
        // const { pathname } = this.props.location;
        return (

            <div className='bottom'>
                <div style={{ position: 'fixed', width: '100%', bottom: 0 }}>
				<TabBar
					unselectedTintColor="#949494"
					tintColor="#5D656B"
					barTintColor="white"
				>
					<TabBar.Item
						icon={
							<i className='iconfont icon-dianpu'></i>
						}
						selectedIcon={
							<i className="iconfont icon-dianpu2"></i>
                        }
                        onPress={() => {
							console.log('店铺')
						}}
                        title="店铺"
                        key="dianpu"
					>
					</TabBar.Item>

					<TabBar.Item
						icon={
							<i className="iconfont icon-kefu3"></i>
						}
						selectedIcon={
							<i className="iconfont icon-kefu3"></i>
                        }
                        onPress={() => {
							console.log('客服')
						}}
						title="客服"
						key="kefu"
					>
					</TabBar.Item>

					<TabBar.Item
						icon={
							<i className='iconfont icon-xingxing'></i>
						}
						selectedIcon={
							<i className='iconfont icon-shoucang'></i>
                        }
                        onPress={() => {
							console.log('收藏')
						}}
						title="收藏"
						key="shoucang"
					>
					</TabBar.Item>

					<TabBar.Item
						icon={
							<i className='iconfont icon-xingxing'></i>
						}
						selectedIcon={
							<i className='iconfont icon-shoucang'></i>
                        }
                        onPress={() => {
							console.log('收藏')
						}}
						title="收藏"
						key="shoucang"
					>
					</TabBar.Item>

                    <TabBar.Item style={{display:'none'}}
						icon={
							<i className='iconfont icon-xingxing'></i>
						}
						selectedIcon={
							<i className='iconfont icon-shoucang'></i>
                        }
                        onPress={() => {
							console.log('收藏')
						}}
						title="收藏"
						key="shoucang"
					>
					</TabBar.Item>
				</TabBar>
			</div>

                {/* <Button className="btn1" inline style={{ width: '16%', height: '120px', fontSize: '0.2em' }} >
                    <i className="iconfont icon-dianpu"><div>店铺</div></i>
                </Button>
                <Button inline style={{ width: '16%', height: '120px', fontSize: '0.2em' }} >客服</Button>
                <Button inline style={{ width: '16%', height: '120px', fontSize: '0.2em' }} >收藏</Button>

                <Button inline style={{ width: '26%', height: '120px', color: '#fff', backgroundColor: '#FF9500', fontSize: '0.9em', textAlign: 'center', lineHeight: '50px' }}>
                    加入购物车
                </Button>
                <Button inline style={{ width: '26%', height: '120px', color: '#fff', backgroundColor: '#FF0036', fontSize: '0.9em', textAlign: 'center', lineHeight: '50px' }}>立即购买</Button> */}

            </div>
        );
    }
}
export default withRouter(MyTab);