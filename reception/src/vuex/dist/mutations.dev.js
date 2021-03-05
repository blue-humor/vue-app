"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mutationsTypes = require("./mutations-types");

var _RECEIVE_ADDRESS$RECE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (_RECEIVE_ADDRESS$RECE = {}, _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationsTypes.RECEIVE_ADDRESS, function (state, _ref) {
  var address = _ref.address;
  state.address = address; //更新state数据
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationsTypes.RECEIVE_CATEGORYS, function (state, _ref2) {
  var categorys = _ref2.categorys;
  state.categorys = categorys; //更新state数据
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationsTypes.RECEIVE_SHOPS, function (state, _ref3) {
  var shops = _ref3.shops;
  state.shops = shops; //更新state数据
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationsTypes.RECEIVE_USER, function (state, _ref4) {
  var user = _ref4.user;
  state.user = user;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationsTypes.RECEIVE_TOKEN, function (state, _ref5) {
  var token = _ref5.token;
  state.token = token;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationsTypes.LOGOUT, function (state) {
  state.token = '';
  state.user = {};
}), _RECEIVE_ADDRESS$RECE);

exports["default"] = _default;