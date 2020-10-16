import React from 'react'

const Login = (props) => {
    const login = () => {
        localStorage.setItem('userInfo', 'tom')
        // 从登录页跳回首页
        props.history.replace(props.location.state)
    }
    return (
        <div>
            <button onClick={login}>login</button>
        </div>
        
    )
}

export default Login
