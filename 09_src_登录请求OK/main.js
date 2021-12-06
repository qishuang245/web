import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'

import axios from 'axios'
//配置请求的根路径??????
axios.defaults.baseURL = 'https://lianghj.top:8888/api/private/v1/'
//axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

import Highcharts from 'highcharts/highcharts'
import HighchartsVue from 'highcharts-vue'
import exporting from 'highcharts/modules/exporting'
import sankey from 'highcharts/modules/sankey'
import oldie from 'highcharts/modules/oldie'
import organization from 'highcharts/modules/organization'
exporting(Highcharts)
sankey(Highcharts)
oldie(Highcharts)
organization(Highcharts)

Vue.use(HighchartsVue)
Vue.prototype.$http = axios


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
