/**
 * 写一个类似redux的方法
 * reducer 是需要自己定义的方法，改变状态的，在dispatch中执行
 * state listener dispatch subscribe getState
 * state是存储状态
 * listener 存是发布订阅模式
 * subscribe 是订阅函数
 * dispatch 是修改状态并执行订阅模式中的自定义方法
 * getState 是获取state，防止改变原来的state,所以只是copy一份一样的。
 * **/
function createStore(reducer){
    let state,listener=[],
    dispatch=(action)=>{
        state=reducer(state,action);
        listener.forEach(item=>item());
    }
    dispatch({});// 初始化下state
    subscribe=(fn)=>{
        listener=[...listener,fn];
        return ()=>{
            listener=listener.filter(item=>item!=fn);
        }
    }
    getState=()=>JSON.parse(JSON.stringify(state))
    return {
        getState,
        dispatch,
        subscribe
    }
}