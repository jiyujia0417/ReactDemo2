import React from 'react'

const login = (username) => {
    return {
        type:'LOGIN',
        username:username
    }
}

export {login}
