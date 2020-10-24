/*
redux react-redux
webpack
umi 框架
Router (react-router) 怎么实现的（源码）

Redux 提供可预测的状态管理的容器
*/
import store from './store'
import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Redirect, Route, NavLink, Switch } from 'react-router-dom'
import Todos from './Todos';
import Input from './Input'
/*
action 是更新状态的唯一途径，就是一个普通的随想
一定包含一个type属性

reducer是一个纯函数，没有副作用，有相同的输入，一定会有相同的输出

store连接action和Reducer
*/

const App = () => {

    return <Provider store={store}>
        
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