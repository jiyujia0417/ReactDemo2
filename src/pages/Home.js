import React from 'react';
import List from '../components/List.js'
import Buttons from '../components/Buttons.js'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('https://cnodejs.org/api/v1/topics')
            .then(res => res.json())
            .then(({ data }) => {
                this.setState({ data });
            })
    }

    getData = (page) => {
        console.log(page);
        fetch('https://cnodejs.org/api/v1/topics?page=' + page)
            .then(res => res.json())
            .then(({ data }) => {
                this.setState({ data });
            })
    }

    render() {
        const { data } = this.state;
        return <div>
            <Buttons getData={this.getData} />
            <List data={data} />
        </div>
    }

}

// 命名导出
// extend {home}
// extend {a}
// 导入
// import {home} from './pages/home.js'


// 默认导出（+default）当前文件智能默认导出一个
// 不加{}，名字任意起，但一般和前面的名字一样
export default Home;


