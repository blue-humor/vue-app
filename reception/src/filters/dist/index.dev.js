"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
自定义过滤器模块
 */
// 日期格式化过滤器: date-format
_vue["default"].filter('date-format', function (value, formatStr) {
  return (0, _moment["default"])(value).format(formatStr || 'YYYY-MM-DD HH:mm:ss');
});