"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _store = _interopRequireDefault(require("../vuex/store"));

var _router = _interopRequireDefault(require("../router"));

var _axios = _interopRequireDefault(require("axios"));

var _qs = _interopRequireDefault(require("qs"));

var _mintUi = require("mint-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* 封装axios的模块 */
var instance = _axios["default"].create({
  timeout: 10000,
  //限制设置请求超时的时间10s
  baseURL: '/api' //所有请求都需要一个基础路径

}); // 添加请求拦截器，


instance.interceptors.request.use(function (config) {
  // 处理post请求参数（从对象转换为urlincoding）
  if (config.method.toUpperCase() === 'POST' && config.data instanceof Object) {
    config.data = _qs["default"].stringify(config.data); //username=tom&pwd=123
  } // 处理token的问题


  var token = _store["default"].state.token;
  console.log(token);

  if (config.headers.needToken) {
    if (token) {
      //把token放入Authorization头里
      config.headers.Authorization = token;
    } else {
      throw new Error();
    }
  }

  return config; //必须返回config 否则找不到请求 
});
/* 
 添加响应拦截器
   成功的回调：成功的结果不再是response，而是response.date
   失败的回调：统一处理请求异常
*/

instance.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  //1 没有token不发请求的错误
  if (!error.response) {
    if (_router["default"].currentRoute.path !== './login') {
      (0, _mintUi.MessageBox)('提示', error.message); // 2跳转到登录页面

      _router["default"].replace('/login');
    }
  } else {
    // 3发请求但是token失效
    if (error.response.status == 401) {
      //  退出登录
      _store["default"].dispatch('logout'); // 如果当前没有在登录界面自动跳转到登录界面


      if (_router["default"].currentRoute.path !== './login') {
        (0, _mintUi.MessageBox)('提示', error.message); // 2跳转到登录页面

        _router["default"].replace('/login');
      }
    } else if (error.response.status == 404) {
      (0, _mintUi.Toast)('此资源不存在');
    }
  } // MessageBox('提示', error.message)


  return new Promise(function () {}); //返回一个pending状态的promise 就是中断promise链
});
var _default = instance;
exports["default"] = _default;