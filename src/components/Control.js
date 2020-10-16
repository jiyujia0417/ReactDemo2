import React, { Component } from 'react'

//组件名首字母大写
export default class Control extends Component {//rcc
    constructor() {
        super();
        this.state = {
            inpValue: ''
        }
    }
    handlChange = (e) => {
        this.setState({ inpValue: e.target.value })
    }

    //挂载完执行
    componentDidMount() {
        this.input.focus()
    }

    //只要input加了value属性，input就受react控制了
    render() {
        return (
            <div>
                <input
                    ref={inp => this.input = inp}
                    value={this.state.inpValue}
                    type="text"
                    onChange={this.handlChange} >
                </input>
                <br/>
                <input
                value={this.state.inpValue}
                type="text"
                onChange={this.handlChange} 
                ></input>
            </div>
        )
    }
}

// class Control extends Component {
//     constructor(){
//         super();
//         this.state={
//             inpValue:''
//         }
//     }
//     handlChange=(e)=>{
//         this.setState({inpValue:e.target.value})
//         // console.log(e.target);//真正的dome对象
//     }
//     
//     render() {
//         return (
//             <div>
//                 <input 
//                 value= {this.state.inpValue}
//                 type="text"
//                 onChange={this.handlChange()}
//                 ></input>
//             </div>
//         )
//     }
// }
// //组件名首字母大写
// export default Control;