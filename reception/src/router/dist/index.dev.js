"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* 路由器对象 */
// import store from '../vuex/store'
_vue["default"].use(_vueRouter["default"]); // 路由导航守卫
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


var router = new _vueRouter["default"]({
  mode: 'history',
  routes: _routes["default"]
});
var _default = router;
exports["default"] = _default;