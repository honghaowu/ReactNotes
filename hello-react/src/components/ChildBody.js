import React from 'react';
export default class ChildBody extends React.Component{
    // 子组件传递父组件，主要是通过，调用父组件的方法，在父组件方法中，重新设置state,通过事件的对象e.target.value;
    render(){
        return (
            <div>
                <p>{this.props.age}</p>,
                <input type='text' onChange={this.props.handle} />
            </div>
        )
    }
}