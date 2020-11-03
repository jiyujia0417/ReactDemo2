const login = (username) => {
    return {
        type: 'LOGIN',
        username: username
    }
}

const list = (data) => {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
        let obj = { 
            id:data[i].id,
            img:data[i].img,
            title:data[i].title,
            price:data[i].price
        }
        arr.push(obj);
    }
    return {
        type: 'LIST',
        data: arr
    }
}

export { login, list }