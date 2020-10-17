import { Grid} from 'antd-mobile';
import { withRouter } from "react-router-dom"
import React, { Component } from 'react'
import './grids.css'
const data = Array.from(new Array(8)).map((_val, i) => ({
    icon: 'https://tse2-mm.cn.bing.net/th/id/OIP.m-vc0NNFfmS8npt7kF5K-AHaHa?w=203&h=203&c=7&o=5&dpr=2&pid=1.7',
    text: `天猫国际`,
}));

// const data1 = Array.from(new Array(9)).map(() => ({
//   icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
// }));


const Grids = () => {
    // console.log(this.props);
    return (
        <div>
            <Grid
                data={data}
                hasLine={true}
            />

        </div>

    )
}

export default withRouter(Grids);