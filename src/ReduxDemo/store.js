import {createStore} from 'redux'
import todolist from './todosreducer'

const store = createStore(todolist);

export default store