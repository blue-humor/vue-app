"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqLoain_sms = exports.reqPwdLogin = exports.reqSendCode = exports.reqShops = exports.reqCategorys = exports.reqAddress = void 0;

var _ajax = _interopRequireDefault(require("./ajax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* 
是一个包含n个接口的模块,
  每个接口的返回值都是一个promise对象
*/
// http://localhost:4000/position   参数latitude  longitude  根据经纬度获取位置详情
var reqAddress = function reqAddress(longitude, latitude) {
  return (0, _ajax["default"])({
    method: 'GET',
    url: "/position/".concat(latitude, ",").concat(longitude)
  });
}; // 获取食品分类列表
// export const reqCategorys = () => ajax({
//   method: 'GET',
//   url: `/index_category`,
// })


exports.reqAddress = reqAddress;

var reqCategorys = function reqCategorys() {
  return (0, _ajax["default"])('/index_category', {
    headers: {
      needToken: true
    }
  });
}; // 根据经纬度获取商户列表


exports.reqCategorys = reqCategorys;

var reqShops = function reqShops(_ref) {
  var longitude = _ref.longitude,
      latitude = _ref.latitude;
  return _ajax["default"].get('/shops', {
    params: {
      latitude: latitude,
      longitude: longitude
    },
    headers: {
      needToken: true
    }
  });
}; // http://localhost:4000/sendcode?phone=13716962779
// 发送短信验证码  参数phone


exports.reqShops = reqShops;

var reqSendCode = function reqSendCode(phone) {
  return (0, _ajax["default"])({
    method: 'GET',
    url: "/sendcode",
    params: {
      phone: phone
    }
  });
}; // http://localhost:4000/login_pwd
// 用户名密码登陆


exports.reqSendCode = reqSendCode;

var reqPwdLogin = function reqPwdLogin(_ref2) {
  var name = _ref2.name,
      pwd = _ref2.pwd,
      captcha = _ref2.captcha;
  return (0, _ajax["default"])({
    method: 'POST',
    url: "/login_pwd",
    data: {
      name: name,
      pwd: pwd,
      captcha: captcha
    }
  });
}; // http://localhost:5000/login_sms
// 手机号验证码登陆


exports.reqPwdLogin = reqPwdLogin;

var reqLoain_sms = function reqLoain_sms(phone, code) {
  return (0, _ajax["default"])({
    method: "POST",
    url: '/login_sms',
    data: {
      phone: phone,
      code: code
    }
  });
};

exports.reqLoain_sms = reqLoain_sms;