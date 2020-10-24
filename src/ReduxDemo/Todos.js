//rafce
import React from 'react'
import { connect } from 'react-redux'

const Todos = (props) => {
    console.log(props);
    return (
        <div>
            {
                props.mydata.map(
                    item => <li>{item}
                        <button
                            onClick={() => props.dispatch({
                                type: 'DEL_TODO',
                                value: '10000'
                            })}
                        >del
                        </button>
                    </li>)
            }
            {/* add button  */}
            <button
                onClick={() => props.dispatch({
                    type: 'ADD_TODO',
                    value: '10000'
                })}
            >add</button>

            {/* del button */}

        </div>
    )
}

const mapStateToprops = (state) => {
    return { mydata: state }
}

export default connect(mapStateToprops)(Todos)
