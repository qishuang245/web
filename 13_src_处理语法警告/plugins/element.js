import Vue from 'vue'
// 引入弹框提示组件 Message 需要全局引用 使用 Vue.prototype

//导入弹窗提示组件
//import  { Message } from 'element-ui'

import {
    Button,
    Form,
    FormItem,
    Input,
    Message
} from 'element-ui'



Vue.use(Button)
Vue.use(Form )
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message
