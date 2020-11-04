
let shoucang = []
const shoucanglist = (state = shoucang, action) => {
    //add shoucang
    if (action.type === 'ADD_SHOUCANG') {
        console.log(action)
        return [...state, action.value]
    }

    //delete todo
    if (action.type === 'DEL_SHOUCANG') {
        let arr = [...state];
        arr.splice(action.index, 1)
        return arr;
    }
    return state;
}

export default shoucanglist
