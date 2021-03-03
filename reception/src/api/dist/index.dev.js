"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqShops = exports.reqCategorys = exports.reqAddress = void 0;

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


exports.reqAddress = reqAddress;

var reqCategorys = function reqCategorys() {
  return (0, _ajax["default"])({
    method: 'GET',
    url: "/index_category"
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
    }
  });
};

exports.reqShops = reqShops;