import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import {BackTop} from 'antd';
// import App from './App';
import PcIndex from './js/components/pc_index';
import PCNewsDetails from './js/components/pc_detail';
import PCHeader from './js/components/pc_header';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
class Root extends React.Component{
    render(){
        return (
            <div>
                <Router>
                    <div>
                        <Route exact  path='/' component={PcIndex}></Route>
                        <Route path='/details/:uniquekey' component={PCNewsDetails}></Route>
                        <BackTop/>
                    </div>
                </Router>
            </div>
        );
    }
}
ReactDOM.render(<Root />, document.getElementById('root'));
