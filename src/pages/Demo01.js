import React from 'react'
import PropTypes from 'prop-types'
import Context from './context'
import Demo02 from './Demo02'

const Demo01 = (props) => {
    return (
        <div style={{
            width: 100,
            height: 100,
        }}>
            <h2>Demo01</h2>
            <ul>
                <Context.Consumer>
                    {
                        ({ data }) => data.map(
                            item => <li key={item}>{item}</li>
                        )
                    }
                </Context.Consumer>
            </ul>
            <Demo02 />
        </div>
    )
}

Demo01.propTypes = {
    //isRequired：必须要传的
    name: PropTypes.string.isRequired
}

//没有传参时候的默认值
Demo01.defaultProps = {
    name: 'tom'
}

export default Demo01
// rcc
// rafc
// rafce