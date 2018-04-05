import {createStore} from "redux";
import reducer from './reducer';
let store = createStore(reducer);
window.$store=store;// 暴露到全局，可以在控制台查看数据
export default store;