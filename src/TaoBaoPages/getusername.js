// getusername.js

import React from 'react'
import { connect } from 'react-redux'
import { login } from './actionCreator'
import { withRouter } from "react-router-dom"

const getusername = (props) => {

    const log = () => {
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
                )
            })
    }

    return (
        <div>

        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('state:',state);
    return {
        username: state.getusername.username
    }
}

export default withRouter(connect(mapStateToProps)(getusername));