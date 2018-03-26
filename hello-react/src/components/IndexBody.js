import React from 'react';
import ChildBody from './ChildBody';
import PropTypes from 'prop-types';
class IndexBody extends React.Component{
    // 如果在构造函数中初始化state，需要传递props，否则报错。在render中不需要传递，直接使用
    constructor(props){
        super(props);
        this.state={
            name: 'wh'
            // age: this.props.age
        }
    }
    handle=(e)=>{
        this.setState({age:e.target.value});
    }
    /*指定默认的属性 */
    static defaultProps={
        age: 30
    }
    /*默认的属性的验证*/
    static propTypes = {
        age:PropTypes.number
      }
    render(){
        return (
            <div>
                <hr/>
                <p>姓名-{this.state.name}-年龄-{this.props.age}</p>
                {/*{...this.props}可以把父级的属性继承过来*/}
                <ChildBody {...this.props} handle={this.handle}/>
            </div>
        )
    }
}
export default IndexBody;
