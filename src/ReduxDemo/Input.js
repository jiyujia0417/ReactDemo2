import React from 'react'
import { connect } from 'react-redux'

const Input = (props) => {
    console.log(props);
    return (
        <div>
            <input
                onKeyDown={(e) => {
                    console.log(e);
                    // 回车键是13
                    if (e.keyCode === 13) {
                        props.dispatch({
                            type: 'ADD_TODO',
                            value: e.target.value
                        })
                        e.target.value='';
                    }
                }}
                type="text"
            />
        </div>
    )
}

// const mapStateToprops = (state) => {
//     return { mydata: state }
// }

export default connect()(Input)

