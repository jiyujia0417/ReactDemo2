//rafce
import React from 'react'
import { connect } from 'react-redux'

const Todos = (props) => {
    console.log(props);
    return (
        <div>
            {
                props.mydata.todo.map((item, idx) =>
                    <li key={idx}>
                        {item}
                        <button
                            onClick={() => props.dispatch({
                                type: 'DEL_TODO',
                                value: idx
                            })}
                        >del
                        </button>
                    </li>)
            }
            {/* add button  */}
            {/* <button
                onClick={(e) => props.dispatch({
                    type: 'ADD_TODO',
                    value: e.target.value
                })}
            >add</button> */}

            {/* del button */}

        </div>
    )
}

const mapStateToprops = (state) => {
    console.log(state);
    return { mydata: state }
}

export default connect(mapStateToprops)(Todos)
