import {createStore} from 'redux'
import todolist from './reducer'

const store = createStore(todolist);

export default store