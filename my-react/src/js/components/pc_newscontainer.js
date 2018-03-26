import React from 'react';
import {Row,Col} from 'antd';
import {Tabs,Carousel} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
const TabPane=Tabs.TabPane;
export default class PCNewsContainer extends React.Component{
    render(){
        const settings={
            dots:true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        }
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div class='leftContainer'>
                            <div className="carousel">
                                <Carousel {...settings}>
                                    <div><img src={require("../../images/carousel_1.jpg")} alt=""/></div>
                                    <div><img src={require("../../images/carousel_2.jpg")} alt=""/></div>
                                    <div><img src={require("../../images/carousel_3.jpg")} alt=""/></div>
                                    <div><img src={require("../../images/carousel_4.jpg")} alt=""/></div>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock count={6} type="guoji" width='400px' cartTitle="国际头条" imageWidth='112px'/>
                            {/* <PCNewsImageBlock count={6} type="yule" width='400px' cartTitle="娱乐头条" imageWidth='112px'/> */}
                        </div>
                        <Tabs className="tabs_news">
                            <TabPane tab="头条" key="1">
                                <PCNewsBlock type="top" count={22}/>
                            </TabPane>
                            <TabPane tab="国内" key="2">
                                <PCNewsBlock type="guonei" count={22}/>
                            </TabPane>
                        </Tabs>
                        <div>
                            <PCNewsImageBlock count={8} type="guonei" width='1190px' cartTitle="国内新闻" imageWidth='132px'/>
                            <PCNewsImageBlock count={16} type="yule" width='1190px' cartTitle="娱乐新闻" imageWidth='132px'/>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}