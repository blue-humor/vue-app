"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _vue = _interopRequireDefault(require("vue"));

var _mintUi = require("mint-ui");

var _vueLazyload = _interopRequireDefault(require("vue-lazyload"));

var _loading = _interopRequireDefault(require("./common/images/loading.gif"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _Header = _interopRequireDefault(require("./components/Header/Header.vue"));

var _Start = _interopRequireDefault(require("./components/Start/Start.vue"));

var _CartControl = _interopRequireDefault(require("./components/CartControl/CartControl.vue"));

var _store = _interopRequireDefault(require("./vuex/store"));

var _i18n = _interopRequireDefault(require("./i18n"));

var API = _interopRequireWildcard(require("./api"));

require("./mock/mockServer");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import VeeValidate from 'vee-validate'
_vue["default"].prototype.$API = API; // Vue.use(VeeValidate)

_vue["default"].use(_vueLazyload["default"], {
  //内部订立了全局指令：lazy
  loading: _loading["default"]
});

_vue["default"].config.productionTip = false; // 注册全局组件

_vue["default"].component('Header', _Header["default"]);

_vue["default"].component('Start', _Start["default"]);

_vue["default"].component('CartControl', _CartControl["default"]);

_vue["default"].component(_mintUi.Button.name, _mintUi.Button);

new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  },
  router: _router["default"],
  store: _store["default"],
  //  $store
  i18n: _i18n["default"] //所有的组件多个：$t(key) /  $i18n 

}).$mount('#app');