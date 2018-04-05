import React, {Component} from 'react';
import Head from './Header';
import Foot from './Footer';
import List from './List';

export default class App extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <Head/>
                <List/>
                <Foot/>
            </div>
        );
    }
}