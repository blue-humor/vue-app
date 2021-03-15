import Vue from 'vue'
// import VeeValidate from 'vee-validate'
import {
  Button
} from 'mint-ui'

import VueLazyload from 'vue-lazyload'

import loading from './common/images/loading.gif'

import App from './App.vue'
import router from './router'
import Split from './components/Split/Split.vue'
import Header from './components/Header/Header.vue'
import Start from './components/Start/Start.vue'
import CartControl from './components/CartControl/CartControl.vue'

import store from './vuex/store'

import i18n from './i18n'
import * as API from './api'
import './mock/mockServer'
import './filters/index'

Vue.prototype.$API = API


// Vue.use(VeeValidate)

Vue.use(VueLazyload, { //内部订立了全局指令：lazy
  loading,
})
Vue.prototype.$eventBus = new Vue()

Vue.config.productionTip = false

// 注册全局组件
Vue.component('Header', Header)
Vue.component('Start', Start)
Vue.component('CartControl', CartControl)
Vue.component('Split', Split)



Vue.component(Button.name, Button)
new Vue({
  render: h => h(App),
  router,
  store, //  $store
  i18n, //所有的组件多个：$t(key) /  $i18n 
}).$mount('#app')