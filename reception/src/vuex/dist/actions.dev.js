"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _api = require("../api");

var _mutationsTypes = require("./mutations-types");

/* 包含n个用于间接更新的方法对象
可以包含异步/逻辑代码
*/
var _default = {
  /* 请求获取当前地址信息异步actions */
  getAddress: function getAddress(_ref) {
    var commit, state, longitude, latitude, result, address;
    return regeneratorRuntime.async(function getAddress$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit, state = _ref.state;
            //  1发异步ajax请求
            longitude = state.longitude, latitude = state.latitude;
            _context.next = 4;
            return regeneratorRuntime.awrap((0, _api.reqAddress)(longitude, latitude));

          case 4:
            result = _context.sent;

            // 2请求成功后，提交mutation
            if (result.code === 0) {
              address = result.data;
              commit(_mutationsTypes.RECEIVE_ADDRESS, {
                address: address
              });
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  // 请求获取商品列表分类
  getCategorys: function getCategorys(_ref2, callback) {
    var commit, result, categorys;
    return regeneratorRuntime.async(function getCategorys$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            commit = _ref2.commit;
            _context2.next = 3;
            return regeneratorRuntime.awrap((0, _api.reqCategorys)());

          case 3:
            result = _context2.sent;

            if (result.code == 0) {
              categorys = result.data;
              commit(_mutationsTypes.RECEIVE_CATEGORYS, {
                categorys: categorys
              }); //同步执行mutation方法
              //  在commmit之后调用 callback

              typeof callback === 'function' && callback();
            }

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  // 获取商家列表分类
  getShops: function getShops(_ref3) {
    var commit, state, longitude, latitude, result, shops;
    return regeneratorRuntime.async(function getShops$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            commit = _ref3.commit, state = _ref3.state;
            longitude = state.longitude, latitude = state.latitude;
            _context3.next = 4;
            return regeneratorRuntime.awrap((0, _api.reqShops)(longitude, latitude));

          case 4:
            result = _context3.sent;

            if (result.code == 0) {
              shops = result.data;
              commit(_mutationsTypes.RECEIVE_SHOPS, {
                shops: shops
              });
            }

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    });
  },

  /* 保存用户的action */
  saveUser: function saveUser(_ref4, user) {
    var commit = _ref4.commit;
    var token = user.token; // 将token保存到local中
    // localStorage.setItem('token_key', user.token)

    localStorage.setItem('token_key', token);
    commit(_mutationsTypes.RECEIVE_TOKEN, {
      token: token
    });
    delete user.token;
    commit(_mutationsTypes.RECEIVE_USER, {
      user: user
    });
  },

  /* 退出登录 */
  logout: function logout(_ref5) {
    var commit = _ref5.commit;
    //  清除local中的token
    localStorage.removeItem('token_key'); // 清除state中user/token 

    commit(_mutationsTypes.LOGOUT);
  }
};
exports["default"] = _default;