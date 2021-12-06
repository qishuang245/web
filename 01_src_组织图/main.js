import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

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


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
