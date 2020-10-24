//rafce
import React from 'react'
import { connect } from 'react-redux'

const Todos = (props) => {
    console.log(props);
    return (
        <div>
            {
                props.mydata.map(item => <li>{item}</li>)
            }
            <button
                onClick={() => props.dispatch({
                    type: 'add_todo',
                    value: '10000'
                })}
            >add</button>
        </div>
    )
}

export default connect = ((state) => {
    return {mydata:state}
})(Todos)
