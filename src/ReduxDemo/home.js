import React from 'react'
import { connect } from 'react-redux'

const home = (props) => {
    const login = () => {
        let url = 'https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login'
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(res => {
                props.dispatch({
                    type: 'LOGIN',
                    username: res.data.name
                })
            })
    }
    return (
        <div>

            {/* username有值就显示用户名，没值就显示一个登录按钮 */}
            {
                props.username
                    ? <div>
                        {props.username}
                        <button onClick={login}>退出</button>
                    </div>
                    : <button onClick={login}>登录</button>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    username: state.home.username
})

export default connect(mapStateToProps)(home);
