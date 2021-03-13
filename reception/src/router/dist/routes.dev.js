"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Msite = _interopRequireDefault(require("../pages/Msite/Msite.vue"));

var _Order = _interopRequireDefault(require("../pages/Order/Order.vue"));

var _Search = _interopRequireDefault(require("../pages/Search/Search.vue"));

var _Profile = _interopRequireDefault(require("../pages/Profile/Profile.vue"));

var _Login = _interopRequireDefault(require("../pages/Login/Login.vue"));

var _Shop = _interopRequireDefault(require("../pages/Shop/Shop.vue"));

var _Goods = _interopRequireDefault(require("../pages/Shop/Goods.vue"));

var _Info = _interopRequireDefault(require("../pages/Shop/Info.vue"));

var _Ratings = _interopRequireDefault(require("../pages/Shop/Ratings.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = [{
  path: '/msite',
  component: _Msite["default"],
  meta: {
    isShowFooter: true
  }
}, {
  path: '/order',
  component: _Order["default"],
  meta: {
    isShowFooter: true
  }
}, {
  path: '/search',
  component: _Search["default"],
  meta: {
    isShowFooter: true
  }
}, {
  path: '/profile',
  component: _Profile["default"],
  meta: {
    isShowFooter: true
  }
}, {
  path: '/login',
  component: _Login["default"]
}, {
  path: '/shop',
  component: _Shop["default"],
  children: [{
    path: '/shop/goods',
    component: _Goods["default"]
  }, {
    path: '/shop/info',
    component: _Info["default"]
  }, {
    path: '/shop/ratings',
    component: _Ratings["default"]
  }, {
    path: '',
    redirect: '/shop/goods'
  }]
}, {
  path: '/',
  redirect: '/msite'
}];
exports["default"] = _default;