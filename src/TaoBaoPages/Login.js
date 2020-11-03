import React from 'react'

const Login = (props) => {
    console.log('props:',props);
    const log = () => {
        localStorage.setItem('userinfo', 'tom');
        props.history.push('/cart');
        // props.history.goBack()
        // console.log(props.location)
        // console.log(props.location.state)
        // props.history.replace(props.location.state)
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ textAlign: "center", backgroundColor: 'lightgray', fontSize: '1.5em', marginBottom: '10px' }}>您需要登录才能继续访问</div>
            <i className="iconfont icon-taobao" style={{ color: '#fff', textAlign: 'center', borderRadius: '50%', backgroundColor: '#FF6F05' }}></i>
            <div>
                <input type="text" placeholder="手机号/邮箱/会员名" style={{ margin: '15px', border: '1px solid #FF6F05', width: '70%', height: '40px' }}></input><br />
                <input type="password" placeholder="请输入登录密码" style={{ margin: '10px', border: '1px solid #FF6F05', width: '70%', height: '40px' }}></input>
            </div>
            <div>
                <i>短信验证码登录 </i>
                <i> 免费注册</i>
            </div>
            <button
                onClick={log}
                style={{ background: '#FF6F05', color: '#fff', border: '1px solid #FF6F05', borderRadius: '15px', height: '35px', width: '80%', fontSize: '1.2em', margin: '10px' }}>
                登录
            </button>
        </div>
    )
}

export default Login