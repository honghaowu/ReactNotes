import React from 'react';
import {Row,Col} from 'antd';
import { Menu, Icon } from 'antd';
import '../../css/pc.css';



export default class PCHeader extends React.Component{
    render(){
        return (
            <footer>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                    &copy;&nbsp;2016 ReactNews. All Rights Reserced.
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        );
    }
}