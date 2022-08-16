import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import request from './request/index'
import axios from 'axios'
// 请求的根路径
axios.defaults.baseURL='http://47.108.251.106:8881/api/private/v1'
//将axios挂着到protopy
Vue.prototype.$http=axios
Vue.config.productionTip = false
// vue.prototype.$http=request
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
