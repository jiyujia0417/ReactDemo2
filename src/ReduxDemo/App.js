/* eslint-disable no-unused-vars */
/*
redux react-redux
webpack
umi 框架
Router (react-router) 怎么实现的（源码）

Redux 提供可预测的状态管理的容器
*/
import store from './store'
import React from 'react';
import { Provider } from 'react-redux'
import Todos from './Todos';
import Input from './Input'
import Home from './home'
/*
action 是更新状态的唯一途径，就是一个普通的随想
一定包含一个type属性

reducer是一个纯函数，没有副作用，有相同的输入，一定会有相同的输出

store连接action和Reducer
*/

// let obj = { user: '123' }
// let obj1 = Object.assign({},obj, {}, { user: '456' })
// console.log(obj === obj1);
// console.log(obj, obj1);

const App = () => {

    return <Provider store={store}>
        <Home />
        <Input />
        <Todos />
    </Provider>
    // let todos = store.getState();
    // const [todos,setTodos] = useState(store.getState);
    // useEffect(() => {
    //     store.subscribe(()=>{
    //         setTodos(store.getState())
    //     })
    // }, [])

    //     return <div>
    //         {
    //             todos.map((item) => <li>{item}</li>)
    //         }
    //         <button onClick={() => {
    //             store.dispatch({
    //                 type: 'add_todo',
    //                 value: '456'
    //             })
    //         }}>添加</button>

    //     </div>
}
export default App;