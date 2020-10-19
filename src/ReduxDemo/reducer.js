

let todo=[12345]  
  
function todolist(state=todo,action){
    if(action.type =='add_todo'){
    console.log(action)
        return [...state,action.value]
    }
    return state;
}

export default todolist