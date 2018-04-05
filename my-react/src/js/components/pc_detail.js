import React from 'react';
import {Row,Col} from 'antd';
import PCNewsImageBlock from './pc_news_image_block';
import ComComments from "./comments";
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
export default class PCNewsDetails extends React.Component{
    constructor(){
        super();
        this.state={
            newsItem: ''
        }
    }
    componentDidMount(){
        console.log(this.props.match.params.uniquekey);
        var myFetchOptions={
            method:'GET'
        }
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
            console.log(json);
			this.setState({newsItem: json});
			document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
        })
    }
    createMarkup(){
        return {__html:this.state.newsItem.pagecontent};
    }
    render(){
        return (
            <div>
                <PCHeader/>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className="container">
                        <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                        <ComComments uniquekey={this.props.match.params.uniquekey}/>
                    </Col>
                    <Col span={6}>
                    <PCNewsImageBlock count={40} type="guoji" width='100%' cartTitle="国际头条" imageWidth='150px'/>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter/>
            </div>
        );
    }
}