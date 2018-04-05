import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import Comment from './Comment';
export default class CommentList extends Component{
    static defaultProps={
        comments:[]
    }
    render(){
        return (
            <div>
                {this.props.comments.map((item,index)=>{
                    return <Comment key={index} comment={item}/>
                })}
            </div>
        );
    }
}