const datalist = (state = [], action) => {

    switch (action.type) {
        case 'LIST':
            let arr = [];
            for (let i = 0; i < action.data.length; i++) {
                let obj = {
                    id: action.data[i].id,
                    img: action.data[i].img,
                    title: action.data[i].title,
                    price: action.data[i].price
                }
                arr.push(obj);
            }
            return arr;
        default:
            return state;
    }
}

export default datalist
