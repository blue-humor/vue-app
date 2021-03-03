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
_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  mode: 'history',
  routes: _routes["default"]
});

exports["default"] = _default;