import React, { Component } from 'react'

export default class AddList extends Component {//rcc
    constructor() {
        super();
        this.state = {
            inpValue: '',
            todos: []
        }
    }
    handlChange = (e) => { this.setState({ inpValue: e.target.value }) }

    //挂载完执行
    componentDidMount() {
        this.input.focus()
        let todos = localStorage.getItem('todos');
        if (todos) {
            this.setState({
                todos: JSON.parse(todos)
            })
        }
    }

    componentUpdate() {
        localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }

    addtodo = () => {
        // 第一种方法（不推荐）：
        // this.state.todos.push({ titie: this.state.inpValue })
        // 第二种方法（推荐：
        //setState是异步的
        this.setState({
            todos: [
                { title: this.state.inpValue, done: false },
                ...this.state.todos
            ],
            inpValue: ''
        });
        localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }

    deltodo = (index) => {
        // 方法1：
        // 为了深拷贝
        // let newTodos = JSON.parse(JSON.stringify(this.state.todos));
        // newTodos.splice(index, 1);
        // this.setState({ todos: newTodos });
        //方法2:
        this.setState({
            //setState是异步执行的，注意callback的用法
            todos: this.state.todos.filter((item, idx) => idx != index)
        });
    }

    toggle = (index) => {
        let newTodos = JSON.parse(JSON.stringify(this.state.todos));
        newTodos[index].done = !newTodos[index].done;
        this.setState({
            todos: newTodos
        })
    }

    renderTodo(done) {
        return this.state.todos.map((todo, index) => {
            if (done == todo.done) {
                return <li>
                    <input
                        onClick={() => this.toggle(index)}
                        type='checkbox'
                        checked={done} 
                    />
                    <span>{todo.title}</span>
                    <button onClick={() => this.deltodo(index)}>del</button>
                </li>
            }
        })
    }
    //只要input加了value属性，input就受react控制了
    render() {
        
        const { todos, inpValue } = this.state;
        // let arr1 = todos.filter(item=>!item.done);
        // let arr2 = todos.filter(item=>item.done);
        // console.log(arr1);

        return (
            <div>
                <input
                    ref={inp => this.input = inp}
                    value={inpValue}
                    type="text"
                    onChange={this.handlChange} />
                <button onClick={this.addtodo}>Add</button>
                <h3>正在进行</h3>
                <ul style={{backgroundColor:'lightblue'}}>{this.renderTodo(false)}</ul>
                <h3>已完成</h3>
                <ul style={{backgroundColor:'lightgreen'}}>{this.renderTodo(true)}</ul>
            </div>
        );
    }
}
