import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import PropTypes from 'prop-types';
export default class CommentInput extends Component{
    constructor(){
        super();
        this.state={
            username: '',
            content: ''
        }
    }
    static propTypes={
        onSubmit:PropTypes.func
    }
    handleUsernameChange=(e)=>{
        this.setState({
            username:e.target.value
        });
    }
    handleCommentChange=(e)=>{
        this.setState({
            content:e.target.value
        });
    }
    handleSubmit=()=>{
        if(this.props.onSubmit){
            const {username,content} =this.state;
            this.props.onSubmit({username,content});
        }
        this.setState({content:''});
    }
    componentWillMount(){
        if(localStorage.username){
            this.setState(
                {username: localStorage.username}
            );
        }
    }
    componentDidMount(){
        this.textarea.focus();
    }
    handleUsernameBlur=(e)=>{
        localStorage.username=e.target.value;
    }
    render(){
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名:</span>
                    <div className="comment-field-input">
                        <input value={this.state.username} onChange={this.handleUsernameChange} onBlur={this.handleUsernameBlur}/>
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容：</span>
                    <div className="comment-field-input">
                        <textarea value={this.state.content} onChange={this.handleCommentChange} ref={ref=>this.textarea=ref}/>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.handleSubmit}>发布</button>
                </div>
            </div>
        );
    }
}