"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _Header = _interopRequireDefault(require("./components/Header/Header.vue"));

var _store = _interopRequireDefault(require("./vuex/store"));

var _Start = _interopRequireDefault(require("./components/Start/Start.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import VeeValidate from 'vee-validate'
// Vue.use(VeeValidate)
_vue["default"].component('Start', _Start["default"]);

_vue["default"].config.productionTip = false; // 注册全局组件

_vue["default"].component('Header', _Header["default"]);

new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  },
  router: _router["default"],
  store: _store["default"] //  $store

}).$mount('#app');