import React from 'react';
import {Row,Col} from 'antd';
import { Menu, Icon, Tabs, message, Form, Input, Button, Checkbox, Modal } from 'antd';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import '../../css/pc.css';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FromItem=Form.Item;
const TabPane=Tabs.TabPane;

class PCHeader extends React.Component{
    constructor(){
        super();
        this.state={
            current:'top',
            modalVisible:false,
            action: 'login',
            hasLogined: false,
            userNickName:'',
            userid: 0
        };
    }
    componentWillMount(){
		if (localStorage.userid!=='undefined') {
			this.setState({hasLogined:true});
            this.setState({userNickName:localStorage.userNickName,userid:localStorage.userid});
		}
	}
    handleClick=(e)=>{
        if (e.key == "register") {
			this.setState({current: 'register',modalVisible:true});
		} else {
			{
				this.setState({current: e.key});
			}
		}
        console.log(e.key);
    }
    handleCancel=()=>{
        this.setState({
            modalVisible:false
        });
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        var myFetchOptions={
            method: 'GET'
        }
        var formData = this.props.form.getFieldsValue();
		console.log(formData);
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
		+ "&username="+formData.userName+"&password="+formData.password
		+"&r_userName=" + formData.r_userName + "&r_password="
		+ formData.r_password + "&r_confirmPassword="
		+ formData.r_confirmpassword, myFetchOptions)
		.then(response => response.json())
		.then(json => {
            // console.log(json);
			this.setState({userNickName: json.NickUserName, userid: json.UserId});
			localStorage.userid= json.UserId;
			localStorage.userNickName = json.NickUserName;
		});
        if(this.state.action=='login'){
            this.setState({hasLogined:true});
        }
        message.success('请求成功！');
        this.setState({modalVisible:false});
    }
    callback=(key)=>{
        if(key==1){
            this.setState({action:'login'})
        }else if(key==2){
            this.setState({action:'register'});
        }
    }
    logout(){
		localStorage.userid= '';
		localStorage.userNickName = '';
		this.setState({hasLogined:false});
	};
    render(){
        let {getFieldDecorator} = this.props.form;
        
        const userShow=this.state.hasLogined ? <Menu.Item key='logout' className='register'>
            <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
            &nbsp;&nbsp;
            <Link target="_blank"><Button type="dashed" htmlType="button">个人中心</Button></Link>
            &nbsp;&nbsp;
            <Button type="ghost" htmlType="button"  onClick={this.logout.bind(this)}>退出</Button>
        </Menu.Item>:<Menu.Item key="register" className="register">
            <Icon type="typestore"></Icon>
            <span>注册/登陆</span>
        </Menu.Item>;
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a className="logo">
                            <img src={require('../../images/logo.png')}alt="logo"/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                    <Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick}>
                        <Menu.Item key='top'>
                            <Icon type="appstore" />
                            <span>头条</span>
                        </Menu.Item>
                        <Menu.Item key='shehui'>
                            <Icon type="appstore" />
                            <span>社会</span>
                        </Menu.Item>
                        <Menu.Item key='guonei'>
                            <Icon type="appstore" />
                            <span>国内</span>
                        </Menu.Item>
                        <Menu.Item key='guoji'>
                            <Icon type="appstore" />
                            <span>国际</span>
                        </Menu.Item>
                        <Menu.Item key='yule'>
                            <Icon type="appstore" />
                            <span>娱乐</span>
                        </Menu.Item>
                        <Menu.Item key='tiyu'>
                            <Icon type="appstore" />
                            <span>体育</span>
                        </Menu.Item>
                        <Menu.Item key='keji'>
                            <Icon type="appstore" />
                            <span>科技</span>
                        </Menu.Item>
                        <Menu.Item key='shishang'>
                            <Icon type="appstore" />
                            <span>时尚</span>
                        </Menu.Item>
                        {userShow}
                    </Menu>
                    <Modal titile="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel={this.handleCancel} onOk={this.handleCancel} okText="关闭">
                        <Tabs type='card' onChange={this.callback}>
                            <TabPane tab='登录' key='1'>
                                <Form horizontal onSubmit={this.handleSubmit}>
                                    <FromItem label='账户'> {
                                        getFieldDecorator('userName',{rules:[{required:true,message:'输入用户名'}]})(<Input placeholder="请输入您的账号" />)
                                    }</FromItem>
                                    <FromItem label='密码'> {
                                        getFieldDecorator('password',{rules:[{required:true,message:'输入用户名'}]})(<Input placeholder="请输入您的密码" type='password'/>)
                                    }</FromItem> 
                                    <Button type='primary' htmlType='submit'>登录</Button> 
                                </Form>
                            </TabPane>
                            <TabPane tab='注册' key='2'>
                                <Form horizontal onSubmit={this.handleSubmit}>
                                    <FromItem label='账户'> {
                                        getFieldDecorator('r_userName',{rules:[{required:true,message:'输入用户名'}]})(<Input placeholder="请输入您的账号" />)
                                    }</FromItem>
                                    <FromItem label='密码'> {
                                        getFieldDecorator('r_password',{rules:[{required:true,message:'输入用户名'}]})(<Input placeholder="请输入您的密码" type='password'/>)
                                    }</FromItem> 
                                    <FromItem label='确认密码'> {
                                        getFieldDecorator('r_confirmpassword',{rules:[{required:true,message:'输入用户名'}]})(<Input type='password' placeholder="请再次输入您的密码" />)
                                    }</FromItem>
                                    <Button type='primary' htmlType='submit'>注册</Button> 
                                </Form>
                            </TabPane>
                        </Tabs>
                    </Modal>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        );
    }
}
export default PCHeader=Form.create({})(PCHeader);
// {...getFieldDecorator('r_userName')} {...getFieldDecorator('r_password')} {...getFieldDecorator('r_confirmPassword')}