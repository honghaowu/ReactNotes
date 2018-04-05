import React from "react";
class Item extends React.Component{
    render(){
        let {item} = this.props;
        return (
            <li className="list-group-item">
                <input type="checkbox" checked={item.isSelected} onChange={()=>{
                    this.props.changeSelected();
                }}/>
                {item.title}
                <button className="btn btn-xs pull-right" onClick={()=>{
                    this.props.deleteTodo();
                }}>&times;</button>
            </li>
        );
    }
}
export default Item;