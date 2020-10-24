// reducer 是一个纯函数，没有副作用。如果有固定的输入，一定会有相同的输出
// 在此处对状态进行处理，是更新状态唯一的地方

let todo = [12345]

function todolist(state = todo, action) {

    // add todos
    if (action.type === 'ADD_TODO') {
        console.log(action)
        // 返回的一定是一个不可变对象（和原状态不能是一个地址，才能得到变化响应）
        return [...state, action.value]
    }

    // delete todo
    if (action.type === 'DEL_TODO') {
        let arr = [...state];
        arr.splice(action.index,1);
        return arr;
    }
    return state;
}

export default todolist