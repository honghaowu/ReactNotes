import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../store/action';
import Item from './Item';
class List extends Component{
    filterTodo(){
        let todoList=[];
        if(this.props.type=="all"){
            todoList=this.props.todoList;
        }else if(this.props.type=="finish"){
            todoList= this.props.todoList.filter((item)=>item.isSelected);
        }else if(this.props.type=="unfinish"){
            todoList=this.props.todoList.filter((item)=>!item.isSelected);
        }
        return todoList;
    }
    render(){
        let {todoList,changeSelected,deleteTodo}=this.props;
        return (
            <div>
                <ul className="list-group">
                    {
                        this.filterTodo().map((item,index)=>{
                            return <Item item={item} key={index} changeSelected={()=>{changeSelected(item.id);}} deleteTodo={()=>{deleteTodo(item.id);}}/>
                        })
                    }
                </ul>
            </div>
        );
    }
}
export default connect((state)=>({...state}),actions)(List);