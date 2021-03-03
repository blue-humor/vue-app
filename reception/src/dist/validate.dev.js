"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _veeValidate = _interopRequireDefault(require("vee-validate"));

var _zh_CN = _interopRequireDefault(require("vee-validate/dist/locale/zh_CN"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_veeValidate["default"]);

_veeValidate["default"].Validator.localize('zh_CN', {
  messages: _zh_CN["default"].messages,
  attributes: {
    phone: '手机号',
    code: '验证码',
    name: '用户名',
    pwd: '密码',
    captcha: '验证码'
  }
}); // import VeeValidate from 'vee-validate'
// VeeValidate.Validator.extend('phone', {
//   validate: value => {
//     return /^1\d{10}$/.test(value)
//   },
//   getMessage: field => field + '必须是11位手机号码'
// })