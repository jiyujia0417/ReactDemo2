/*
redux react-redux
webpack
umi 框架
Router (react-router) 怎么实现的（源码）

Redux 提供可预测的状态管理的容器
*/
import store from './store'
import React,{useState,useEffect} from 'react';
import {Provider} from 'react-router'

const App = () => {
    // let todos = store.getState();
    const [todos,setTodos] = useState(store.getState);
    useEffect(() => {
        store.subscribe(()=>{
            setTodos(store.getState())
        })
    }, [])
    
    return <div>
        {
            todos.map((item)=><li>{item}</li>)
        }
        <button onClick={()=>{
            store.dispatch({
                type:'add_todo',
                value:'456'
            })
        }}>添加</button>
        
    </div>
}
export default App;