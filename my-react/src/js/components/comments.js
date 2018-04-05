import React from 'react';
import {Row,Col,Card} from 'antd';
import { Menu, Icon, Tabs, message, Form, Input, Button, Checkbox, Modal } from 'antd';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import '../../css/pc.css';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem=Form.Item;
const TabPane=Tabs.TabPane;
class Comments extends React.Component{
    constructor(){
        super();
        this.state={
            comments: ''
        }
    }
    handleSubmit=(e)=> {
		e.preventDefault();
		var myFetchOptions = {
			method: 'GET'
		};
        var formdata = this.props.form.getFieldsValue();
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.match.uniquekey + "&commnet=" + formdata.remark, myFetchOptions).then(response => response.json()).then(json => {
			this.componentDidMount();
		})
	}
    componentDidMount() {
        console.log(this.props.uniquekey);
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
            this.setState({comments: json});
        })
    }
    render(){
        const {getFieldDecorator} = this.props.form;
        const {comments} =this.state;
        const conmentList=comments.length?
        comments.map((comment,index)=><Card key={index} title={comment.UserName} extra={<a href="#">发表于{comment.datetime}</a>}>
            <p>{comment.Comments}</p>
        </Card>):'没有任何评论';
        return (
            <div>
                <Row>
                    <Col span={24}>
                        {conmentList}
                        <Form onSubmit={this.handleSubmit}>
                        <FormItem>
                            </FormItem>
                            <FormItem label="您的评论">
                                {getFieldDecorator('remark',{rules:[{required:true}]})(<Input placeholder="请输入你的评论" />)}
                            </FormItem>
                            <Button type="primary" htmlType="submit">提交评论</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}
let ComComments=Form.create()(Comments);
export default ComComments;