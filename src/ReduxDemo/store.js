import { createStore, combineReducers } from 'redux'
import homereducer from './homereducer';
import todolist from './todosreducer'

let rootreducer = combineReducers({ 
    todo:todolist,
    home:homereducer
})
const store = createStore(rootreducer);

export default store;