### 初始React
```javascript
    // jsx的写法
<script type="text/babel">
        ReactDOM.render(
            <h1>您好啊</h1>,
            document.getElementById('root')
        );
    </script>
    // jsx的写法会转为下面的js写法
    /**
     * React.createElement(标签类型，属性对象，子元素),
     * react元素是通过js对象描述DOM结构
     * {
     *    tagName: 'h1',
     *    props:{
     *      attr: null.,
     *      chilren:['hello']
     *    }
     * }
     * 
    */
    <script>
        ReactDOM.render(
            React.createElement('h1',null,['hello']),
            document.getElementById('app')
        );
    </script>
```

### react组件
- 组建的两种定义方式  
```javascript
/** 1 函数定义，参数是属性对象props，下面的是解构赋值
 *  2 组件的首字母大写
 *  3 组件定义完后，可以像React元素一样使用
 * 缺点：比如定时器，函数方式声明的组件是静态的。
 * **/
let Message=({msg})=>{
    return <h1>{msg}</h1>
}
ReactDOM.render(<Message msg='hello'/>,document.querySelector('#app'));
// 时钟,就需要每秒渲染
let Clock=()=>{
    return <h1>{new Date().toLocalString()}</h1>
}
setInterval(()=>{
    ReactDOM.render(
    <Clock/>,
    document.getElementById("clock")
    );
},1000);

/**
 * 通过类来声明组件，类需要继承Component
 * 类含有状态，状态可以用来存放组件内部一些变化的值，状态只能由内部初始化，内部改变
 * render方法是指该组件将要如何渲染，一定要返回一个React元素，而且只能返回一个React元素
 * 改变组件中的state会重新render
 * 
*/
class Clock extends Component{
    constructor(){
      super();
      this.state={time:new Date().toLocaleString()}  
    }
    render(){
        return <h1>{this.state.time}</h1>
    }
    //生命周期函数 组件渲染完成
    componentDidMount(){
        setInterval(()=>{
            this.setState({time:new Date().toLocaleString()});
        },1000);
    }
}
```
### React组件的属性
```javascript
/**
 * defaultProps是设置默认的属性对象
 * propTypes 是进行验证类型等信息
 * **/
class Person extends React.Component{
    static defaultProps={
        name: 'wuh'
    }
    static propTypes={
        name:PropsTypes.string,
        age: PropsTypes.number.isRequired
    }
    render(){
        return (
            <div>
                <p>name:{this.props.name}</p>
                <button>改变</button>    
            </div>
        );
    }
}
ReactDOM.render(
    <Person/>,
    document.querySelector(".person")
);
```

### DOM操作
- 实现双向数据绑定
```javascript
 // 实现双向数据绑定
        class Input extends React.Component{
            constructor(){
                super();
                this.state={
                    val: ""
                }
            }
            handle=(e)=>{
                let val=e.target.value;
                this.setState({
                    val
                });
            }
            render(){
                return (
                    <div>
                        <p>{this.state.val}</p>
                        <input type='text' value={this.state.val} onChange={this.handle}/>
                    </div>
                );
            }
        }
        ReactDOM.render(
            <Input/>,
            document.querySelector(".input")
        );
```
- ref this.refs.对应的ref  
`ref等于一个函数比如ref={ref=>{this.a=ref}} 表示当元素挂载到页面后，立即执行此函数，并传入渲染后的DOM元素，形参ref即为渲染后的DOM元素，赋值给组件中的a`

### 复合组件
- 属性传递，需要父级-子级-孙子级 不能隔代传递

### 组件的生命周期
`this.setState是异步的`但可以传递第二个参数为回调函数。
- componentWillMount 组件将要被加载
- componentDidMount 组件挂在完成，即render之后
- shouldComponentUpdate 组件是否要更新
- componentWillUpdate 组件将要更新
- componentDidUpdate 组件更新结束
- componentWillReceiveProps  
