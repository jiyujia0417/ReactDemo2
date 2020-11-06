import { ActivityIndicator } from 'antd-mobile'
import React, { useState } from 'react'
import { connect } from 'react-redux'

import { login } from './actionCreator'

const home = (props) => {
    // 声明一个自己的状态
    // const [isShow, setShow] = useState(false)

    const log = () => {
        // setShow(true)
        let url = 'https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login'
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(res => {
                props.dispatch(
                    login(res.data.name)
                    //     type: 'LOGIN',
                    //     username: res.data.name
                )
                // setShow(false)
            })
    }
    console.log('props:', props)
    console.log('props.username:', props.username)
    return (
        <div>

            {/* username有值就显示用户名，没值就显示一个登录按钮 */}
            {
                props.username
                    ? <div>
                        {props.username}
                        <button onClick={log}>退出</button>
                    </div>
                    : <button onClick={log}>登录</button>
            }
            {/* <ActivityIndicator
                toast
                text="登陆中"
                // animating={isShow}
            /> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('state:',state);
    return {
        username: state.home.username
    }
}

export default connect(mapStateToProps)(home);
