import React, {Component} from 'react';
import {connect} from "react-redux";
import actions from '../store/action';
class Footer extends Component{
    render(){
        return (
            <div>
                <nav className="nav nav-pills" onClick={(e)=>{
                    // console.log(e.target.dataset);
                    let typeVal=e.target.dataset.type;
                    this.props.changeType(typeVal);
                }}>
                    <button className={this.props.type=="all"?"btn-primary":''} data-type="all">全部</button>
                    <button data-type="finish" className={this.props.type=="finish"?"btn-primary":''} >已完成</button>
                    <button data-type="unfinish" className={this.props.type=="unfinish"?"btn-primary":''} >未完成</button>
                </nav>
            </div>
        );
    }
}
export default connect((state)=>({...state}),actions)(Footer);