// reducer/shoucang.js

let shoucang = []
const shoucanglist = (state = shoucang, action) => {
    //add shoucang
    if (action.type === 'ADD_SHOUCANG') {
        return [...state, action.value]
    }

    //delete shoucang
    if (action.type === 'DEL_SHOUCANG') {
        let arr = [...state];
        arr = arr.filter((item) => item != action.value)
        return arr;
    }
    return state;
}

export default shoucanglist
