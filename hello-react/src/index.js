
// import './study/jsx';
import React from 'react';
import ReactDOM,{render} from 'react-dom';
// import { Router, Route} from 'react-router';
// import { Link} from 'react-router-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import ComponentHeader from './components/Header';
import IndexBody from './components/IndexBody';
import IndexFooter from './components/Footer'
import IndexPage from './components/IndexPage';
import List from './components/List';
import Detail from './components/Detail';

class Index extends React.Component{
    render(){
        return (
            <Router>
                <div>
                    <ul>
                        {/* <li><Link to='/'>首页</Link></li> */}
                        <li><Link to='/list/1234'>列表页</Link></li>
                        <li><Link to='/detail'>详情页</Link></li>
                    </ul>
                    {/* <Route path="/" component={IndexPage}></Route> */}
                    <Route path="/list/:id" component={List}></Route>
                    <Route path="/detail" component={Detail}></Route>
                </div>
                
                
            </Router>
        )
    }
}
render(
    <Index/>,
    document.getElementById('root')
);