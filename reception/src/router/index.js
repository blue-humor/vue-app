/* 路由器对象 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// import store from '../vuex/store'

Vue.use(VueRouter)

// 路由导航守卫
// 功能1  进入a/b必须登录，如果没哟度鞥路自动跳转到登录页面
// const paths = ['/a', '/b']
// // 定义全局前置守卫
// router.beforeEach((from, to, next) => {
//   // 如果目标path在paths中，但用户没自动登录，自动跳转到login
//   if (paths.indexOf(to.path) !== -1 && store.state.user.token) {
//     next('./login')
//   } else {
//     next()
//   }
// })


const router = new VueRouter({
  mode: 'history',
  routes,
})
export default router