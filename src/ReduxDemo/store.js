import { createStore, combineReducers } from 'redux'
import homereducer from './homereducer';
import todolist from './todosreducer'

let rootreducer = combineReducers({
    todo: todolist,
    home: homereducer
})
const store = createStore(
    rootreducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;