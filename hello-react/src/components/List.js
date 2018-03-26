import React from 'react';
class List extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.params);
    }
    render(){
        // let match=this.props.match.params
        return (
            <div>
                List列表页面{this.props.match.params.id}
            </div>
        )
    }
}
export default List;