
// import './study/jsx';
import React from 'react';
import ReactDOM,{render} from 'react-dom';
import ComponentHeader from './Header';
import IndexBody from './IndexBody';
import IndexFooter from './Footer';

class Index extends React.Component{
    render(){
        return (
            <div>
                <ComponentHeader/>
                <IndexBody />
                <IndexFooter/>
            </div>
        )
    }
}

export default Index;