//MyTab.js

import React from 'react';
import 'antd-mobile/dist/antd-mobile.css'
import { TabBar } from "antd-mobile"
import { withRouter } from "react-router-dom"

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
			<div style={{ position: 'fixed', width: '100%', bottom: 0 }}>
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
						data-seed="logId1"
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
					</TabBar.Item>

					<TabBar.Item
						icon={
							<i className='iconfont icon-dingdanliebiao'></i>
						}
						selectedIcon={
							<i className="iconfont icon-icon-test"></i>
						}
						title="订单列表"
						key="orderlist"
						selected={pathname === '/orderlist'}
						onPress={() => {
							this.props.history.push('/orderlist')
						}}
						data-seed="logId1"
					>
					</TabBar.Item>

					<TabBar.Item
						icon={
							<i className='iconfont icon-wode'></i>
						}
						selectedIcon={
							<i className='iconfont icon-wodejianying'></i>
						}
						title="我的淘宝"
						key="me"
						selected={pathname === '/me'}
						onPress={() => {
							this.props.history.push('/me')
						}}
						data-seed='logId1'
					>
					</TabBar.Item>
					<TabBar.Item
						icon={
							<i className='iconfont icon-weibiaoti5'></i>
						}
						selectedIcon={
							<i className='iconfont icon-gengduo1'></i>
						}
						title="更多"
						key="more"
						selected={pathname === '/more'}
						onPress={() => {
							this.props.history.push('/more')
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