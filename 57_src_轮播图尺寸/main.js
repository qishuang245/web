import Vue from 'vue'
//import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
//导入JSON用
//import VueResource from 'vue-resource'
import './plugins/element.js'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'
// 导入NProgress 对应的js和css
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import axios from 'axios'
//配置请求的根路径??????
axios.defaults.baseURL = 'https://lianghj.top:8888/api/private/v1/'
//axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 在request拦截器中展示进度条 NProgress.start()
axios.interceptors.request.use(config => {
  NProgress.start()
  // 登录授权 请求验证是否有token  需要授权的 API ，必须在请求头中使用 `Authorization` 字段提供 `token` 令牌
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config // 必须返回否则没有值
})
// 在reponse拦截器中,隐藏进度条 NProgress.done()
axios.interceptors.response.use(config => {
  NProgress.done()
  return config
})

import Highcharts from 'highcharts/highcharts'
import HighchartsVue from 'highcharts-vue'
import exporting from 'highcharts/modules/exporting'
import sankey from 'highcharts/modules/sankey'
import oldie from 'highcharts/modules/oldie'
import organization from 'highcharts/modules/organization'
//引入钻取功能
//import drilldown from 'highcharts/modules/drilldown'
exporting(Highcharts)
sankey(Highcharts)
oldie(Highcharts)
organization(Highcharts)
//drilldown(Highcharts)

//Vue.use(ElementUI)
Vue.use(HighchartsVue)
Vue.prototype.$http = axios
//导入JSON
//Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
