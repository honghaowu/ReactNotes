//actions
import * as Types from '../action-types';
let actions ={
    addTodo(todo){
        return {type:Types.ADD_TODO,todo}
    },
    changeSelected(id){
        return {type:Types.CHANGE_SELECTED,id}
    },
    deleteTodo(id){
        return {type:Types.DELETE_TODO,id}
    },
    changeType(typeVal){
        return {type:Types.CHANGE_TYPE,typeVal}
    } 
}
export default actions;