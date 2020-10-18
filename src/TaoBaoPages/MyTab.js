import React from 'react';
import 'antd-mobile/dist/antd-mobile.css'
import { Button, TabBar } from "antd-mobile"
import { withRouter } from "react-router-dom"


class MyTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'blueTab',
		};
	}
	render() {
		console.log('home:',this.props);
		const { pathname } = this.props.location;
		return (
			<div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
				<TabBar
					unselectedTintColor="#949494"
					tintColor="#5D656B"
					barTintColor="white"
				>
					<TabBar.Item
						icon={
							<i className='iconfont icon-shouye'></i>
						}
						selectedIcon={
							<i className="iconfont icon-weibiaoti1"></i>
						}
						title="首页"
						key="home"
						selected={pathname === '/home'}
						onPress={() => {
							this.props.history.push('/home')
						}}
						data-seed="logId"
					>
					</TabBar.Item>

					<TabBar.Item
						icon={
							<i className="iconfont icon-gouwuche"></i>
						}
						selectedIcon={
							<i className="iconfont icon-gouwuche1"></i>
						}
						title="购物车"
						key="cart"
						selected={pathname === '/cart'}
						onPress={() => {
							this.props.history.push('/cart')
						}}
						data-seed="logId1"
					>
						{/* <Button onClick={() => {
							this.props.history.push('/documentation')
						}} type='primary'>ToDOC</Button> */}
					</TabBar.Item>

					<TabBar.Item
						icon={
							<i className='iconfont icon-dingdanliebiao'></i>
						}
						selectedIcon={
							<i className='iconfont icon-icon-test'></i>
						}
						title="订单列表"
						key="orderlist"
						selected={pathname === '/orderlist'}
						onPress={() => {
							this.props.history.push('/orderlist')
						}}
						data-seed='logId1'
					>
					</TabBar.Item>

					<TabBar.Item
						icon={
							<i className='iconfont icon-wode'></i>
						}
						selectedIcon={
							<i className='iconfont icon-wodejianying'></i>
						}
						title="我的"
						key="me"
						selected={pathname === '/me'}
						onPress={() => {
							this.props.history.push('/me')
						}}
						data-seed='logId1'
					>
					</TabBar.Item>
				</TabBar>
			</div>
		);
	}
}
export default withRouter(MyTab);