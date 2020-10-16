import React from 'react';
import {Button,TabBar} from 'antd-mobile'
class MyType extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		selectedTab: 'blueTab',
	  };
	}
	render() {
	  return (
		<div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
		  <TabBar
			unselectedTintColor="#949494"
			tintColor="#33A3F4"
			barTintColor="white"
		  >
			<TabBar.Item
			  title="首页"
			  key="home"
			  icon={<div style={{
				width: '22px',
				height: '22px',
				background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
			  />
			  }
			  selectedIcon={<div style={{
				width: '22px',
				height: '22px',
				background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
			  />
			  }
			  selected={this.state.selectedTab === 'blueTab'}
			  onPress={() => {
				this.setState({
				  selectedTab: 'blueTab',
				});
			  }}
			  data-seed="logId"
			>
			  首页
			</TabBar.Item>
			<TabBar.Item
			  icon={
				<div style={{
				  width: '22px',
				  height: '22px',
				  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
				/>
			  }
			  selectedIcon={
				<div style={{
				  width: '22px',
				  height: '22px',
				  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
				/>
			  }
			  title="Koubei"
			  key="Koubei"
			  selected={this.state.selectedTab === 'redTab'}
			  onPress={() => {
				this.setState({
				  selectedTab: 'redTab',
				});
			  }}
			  data-seed="logId1"
			>
			  	<Button onClick={()=>{
                    this.props.history.push('/doc')
                }} type='primary'>ToDOC</Button>
			</TabBar.Item>
			<TabBar.Item
			  icon={
				<div style={{
				  width: '22px',
				  height: '22px',
				  background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
				/>
			  }
			  selectedIcon={
				<div style={{
				  width: '22px',
				  height: '22px',
				  background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
				/>
			  }
			  title="Friend"
			  key="Friend"
			  selected={this.state.selectedTab === 'greenTab'}
			  onPress={() => {
				this.setState({
				  selectedTab: 'greenTab',
				});
			  }}
			>
			  教程
			</TabBar.Item>
			<TabBar.Item
			  icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
			  selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
			  title="My"
			  key="my"
			  selected={this.state.selectedTab === 'yellowTab'}
			  onPress={() => {
				this.setState({
				  selectedTab: 'yellowTab',
				});
			  }}
			>
			  社区页
			</TabBar.Item>
		  </TabBar>
		</div>
	  );
	}
  }
export default MyType;


// import React from 'react';
// import {Button,TabBar} from 'antd-mobile'
// class Mytab extends React.Component {
// 	constructor(props) {
// 	  super(props);
// 	  this.state = {
// 		selectedTab: 'blueTab',
// 	  };
// 	}
// 	render() {
// 	  return (
// 		<div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
// 		  <TabBar
// 			unselectedTintColor="#949494"
// 			tintColor="#33A3F4"
// 			barTintColor="white"
// 		  >
// 			<TabBar.Item
// 			  title="首页"
// 			  key="home"
// 			  icon={<div style={{
// 				width: '22px',
// 				height: '22px',
// 				background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
// 			  />
// 			  }
// 			  selectedIcon={<div style={{
// 				width: '22px',
// 				height: '22px',
// 				background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
// 			  />
// 			  }
// 			  selected={this.state.selectedTab === 'blueTab'}
// 			  onPress={() => {
// 				this.setState({
// 				  selectedTab: 'blueTab',
// 				});
// 			  }}
// 			  data-seed="logId"
// 			>
// 			  首页
// 			</TabBar.Item>
// 			<TabBar.Item
// 			  icon={
// 				<div style={{
// 				  width: '22px',
// 				  height: '22px',
// 				  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
// 				/>
// 			  }
// 			  selectedIcon={
// 				<div style={{
// 				  width: '22px',
// 				  height: '22px',
// 				  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
// 				/>
// 			  }
// 			  title="Koubei"
// 			  key="Koubei"
// 			  selected={this.state.selectedTab === 'redTab'}
// 			  onPress={() => {
// 				this.setState({
// 				  selectedTab: 'redTab',
// 				});
// 			  }}
// 			  data-seed="logId1"
// 			>
// 			  	{/* <Button onClick={()=>{
//                     this.props.history.push('/doc')
//                 }} type='primary'>ToDOC</Button> */}
// 			</TabBar.Item>
// 			<TabBar.Item
// 			  icon={
// 				<div style={{
// 				  width: '22px',
// 				  height: '22px',
// 				  background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
// 				/>
// 			  }
// 			  selectedIcon={
// 				<div style={{
// 				  width: '22px',
// 				  height: '22px',
// 				  background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
// 				/>
// 			  }
// 			  title="Friend"
// 			  key="Friend"
// 			  selected={this.state.selectedTab === 'greenTab'}
// 			  onPress={() => {
// 				this.setState({
// 				  selectedTab: 'greenTab',
// 				});
// 			  }}
// 			>
// 			  教程
// 			</TabBar.Item>
// 			<TabBar.Item
// 			  icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
// 			  selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
// 			  title="My"
// 			  key="my"
// 			  selected={this.state.selectedTab === 'yellowTab'}
// 			  onPress={() => {
// 				this.setState({
// 				  selectedTab: 'yellowTab',
// 				});
// 			  }}
// 			>
// 			  社区
// 			</TabBar.Item>
// 		  </TabBar>
// 		</div>
// 	  );
// 	}
//   }
// export default Mytab;