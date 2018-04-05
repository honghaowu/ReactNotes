import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../store/action';
class Header extends Component{
    
    getUnFinish=()=>{
        return this.props.todoList.filter(item=>!item.isSelected).length;
    }
    handleKeyUp=(e)=>{
        let {addTodo}=this.props;
        if(e.keyCode==13){
            addTodo({id:Math.random(),isSelected:false,title:e.target.value});
            e.target.value='';
        }
    }
    render(){
        let {todoList}=this.props;
        return (
            <div>
                <h1>还有{this.getUnFinish()}件事未完成</h1>
                <input type="text" className="form-control" onKeyUp={this.handleKeyUp}/>
            </div>
        );
    }
}
export default connect((state)=>({...state}),actions)(Header);