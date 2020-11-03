
const homereducer = (state = { username: '' }, action) => {
    switch (action.type) {
        case 'LOGIN':
            // Object.assign({},state,{username:'123'})
            // console.log('state:',state);
            return { username: action.username }
        default:
            return state;
    }
}
export default homereducer;