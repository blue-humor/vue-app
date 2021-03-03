import Vue from 'vue'
// import VeeValidate from 'vee-validate'

import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import store from './vuex/store'
import Start from './components/Start/Start.vue'


// Vue.use(VeeValidate)

Vue.component('Start', Start)

Vue.config.productionTip = false

// 注册全局组件
Vue.component('Header', Header)
new Vue({
  render: h => h(App),
  router,
  store //  $store
}).$mount('#app')