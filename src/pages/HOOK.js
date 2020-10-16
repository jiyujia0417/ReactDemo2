import React, { useState, useEffect } from 'react'
//useEffect代替生命周期函数
//useState 代替状态
const HOOK = () => {
    //数字时钟
    const [time, setTime] = useState(new Date().toLocaleString());
    useEffect(() => {
        console.log('effect');
        setInterval(() => {
            setTime(new Date().toLocaleString())
        }, 1000);

        return()=>{
            console.log('componentWillUnMount');
        }
        //第二个参数为空数组时，相当于componentDidMount
    }, [])

    //第二个参数不加或者指定某个值时，相当于componentDidUpdate
    useEffect(() => {
        console.log(2);
    })

    return (
        <div>
            {time}
        </div>
    )
}

export default HOOK

