import Vue from 'vue'
// 引入弹框提示组件 Message 需要全局引用 使用 Vue.prototype

//导入弹窗提示组件
//import  { Message } from 'element-ui'

import {
    Button,
    Form,
    FormItem,
    Input,
    Message,
    Container,
    Header,
    Aside,
    Main,
    Menu,
    Submenu,
    MenuItem,
} from 'element-ui'



Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use( Submenu)
Vue.use(MenuItem)
Vue.prototype.$message = Message
