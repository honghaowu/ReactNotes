import * as Types from '../action-types';
let initState={
    type: 'all',// all finish unfinish
    todoList:[
        {isSelected: true,title: '睡觉',id:1},
        {isSelected: false,title: '吃饭',id:2}
    ]
}
function reducer(state=initState,action){
    switch (action.type){
        case Types.ADD_TODO:
            return {...state,todoList:[...state.todoList,action.todo]};
        case Types.CHANGE_SELECTED:{
            let todoList=state.todoList.map(item=>{
                if(item.id==action.id){
                    item.isSelected=!item.isSelected;
                }
                return item;
            })
            return {...state,todoList};
        }
        case Types.DELETE_TODO:
            let todoList=state.todoList.filter(item=>item.id!=action.id);
            return {...state,todoList};
        case Types.CHANGE_TYPE:
            return {...state,type:action.typeVal};
        default: 
            return state;  
    }
}
export default reducer;