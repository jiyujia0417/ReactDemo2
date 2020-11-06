//BottomTab.js

import React from 'react';
import 'antd-mobile/dist/antd-mobile.css'
import { TabBar } from "antd-mobile"
import { withRouter } from "react-router-dom"
import './bottomTab.css'
import { connect } from 'react-redux'

class BottomTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'whiteTab',
		};
	}
	render() {
		let bool = false;
		let id = this.props.info.split('&')[2].split('=')[1]
		for (let i = 0; i < this.props.mydata.shoucang.length; i++) {
			if (id === this.props.mydata.shoucang[i]) {
				bool = true;
				break;
			}
		}

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
							data-seed='logId'
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
								this.setState({
									selectedTab: 'blackTab',
								});
								this.props.mydata.userinfo.username
									? console.log('user already login')
									: this.props.history.push({
										pathname: '/login',
										search: this.props.history.location.pathname
									});
								this.props.dispatch({
									type: 'ADD_SHOUCANG',
									value: (this.props.info.split('&')[2]).split('=')[1]
								})
							}}
							selected={bool}
							title="收藏"
							key="shoucang"
							data-seed='logId'
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
								console.log('添加购物车')
							}}
							title="添加购物车"
							key="addcart"
							data-seed='logId'
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
								console.log('立即购买')
							}}
							title="立即购买"
							key="buynow"
							data-seed='logId'
						>
						</TabBar.Item>
					</TabBar>
				</div>

			</div>
		);
	}
}

const mapStateToprops = (state) => {
	console.log(state);
	return { mydata: state }
}

export default withRouter(connect(mapStateToprops)(BottomTab));