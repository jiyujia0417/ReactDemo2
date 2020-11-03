import { createStore, combineReducers } from 'redux'
import collect from './reducer/collect';
import datalist from './reducer/datalist';
import userinfo from './reducer/userinfo';

let rootreducer = combineReducers({
    datalist:datalist,
    collect:collect,
    userinfo:userinfo,
})
const store = createStore(
    rootreducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;