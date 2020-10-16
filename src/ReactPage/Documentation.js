import DocContent from './DocContent'
import './documentation.css'
import React, { useEffect } from 'react'
import {
    NavLink, Route, Redirect,
    useHistory,
    useLocation,
    useParams,
    useRouteMatch,
    withRouter
} from 'react-router-dom'
import './documentation.css';
import {NavBar,Icon} from 'antd-mobile'

const Documentation = (props) => {
    // 权限路由
    console.log('props:', props);
    // const history = useHistory();
    // const location = useLocation();
    // const params = useParams();
    // const match = useRouteMatch();
    // console.log('history:', history);
    // console.log('location:', location);
    // console.log('parmas:', params);
    // console.log('match:', match);

    return (
        <div className="doc">
            {/* <NavBar
                mode="light"
                icon={ <Icon type="left" /> }
                onLeftClick={ () => props.history.goBack() }
                rightContent={ [
                    <Icon key="0" type="search" style={ { marginRight: '16px' } } />,
                    <Icon key="1" type="ellipsis" />,
                ] }
            >NavBar
            </NavBar> */}
            <div className="content">
                {/* 嵌套路由 */}
                <Route path='/documentation/:type' component={DocContent} />
                {/* <Redirect from='/Doc' to='/doc/'/> */}
            </div>

            <ol>
                <li><NavLink to='/documentation/installation'>安装</NavLink></li>
                <li><NavLink to='/documentation/KeyConcept'>核心概念</NavLink></li>
                <li><NavLink to='/documentation/advancedGuidelines'>高级指引</NavLink></li>
                <li><NavLink to='/documentation/HOOK'>HOOK</NavLink></li>
            </ol>
        </div>
    )
}

// export default Documentation
// withRouter 把不是通过路由切换过来的组件中，将react-router 的 history、location、match 三个对象传入props对象上
export default withRouter(Documentation);
