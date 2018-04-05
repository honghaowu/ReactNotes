import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import '../css/components.css';
export default class CommentApp extends Component{
    constructor(){
        super();
        this.state={
            comments:[]
        }
    }
    handleSubmitComment=(comment)=>{
        console.log(comment);
        this.state.comments.push(comment);
        this.setState({commens:this.state.comments});
    }
    render(){
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitComment}/>
                <CommentList comments={this.state.comments}/>
            </div>
        );
    }
}