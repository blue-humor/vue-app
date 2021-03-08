import Vue from 'vue'
// import VeeValidate from 'vee-validate'
import {
  Button
} from 'mint-ui'

import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import store from './vuex/store'
import Start from './components/Start/Start.vue'
import * as API from './api'
import './mock/mockServer'
Vue.prototype.$API = API


// Vue.use(VeeValidate)



Vue.config.productionTip = false

// 注册全局组件
Vue.component('Header', Header)
Vue.component('Start', Start)
Vue.component(Button.name, Button)
new Vue({
  render: h => h(App),
  router,
  store //  $store
}).$mount('#app')