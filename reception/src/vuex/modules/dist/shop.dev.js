"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _mutationsTypes = require("../mutations-types");

var _api = require("../../api");

var _mutations;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var state = {
  goods: [],
  //商品列表
  ratings: [],
  info: {},
  cartFoods: [] //购物车所有的food数组

};
var mutations = (_mutations = {}, _defineProperty(_mutations, _mutationsTypes.RECEIVE_GOODS, function (state, _ref) {
  var goods = _ref.goods;
  state.goods = goods;
}), _defineProperty(_mutations, _mutationsTypes.RECEIVE_INFO, function (state, _ref2) {
  var info = _ref2.info;
  state.info = info;
}), _defineProperty(_mutations, _mutationsTypes.RECEIVE_RATINGS, function (state, _ref3) {
  var ratings = _ref3.ratings;
  state.ratings = ratings;
}), _defineProperty(_mutations, _mutationsTypes.ADD_FOOD_COUNT, function (state, _ref4) {
  var food = _ref4.food;

  if (!food.count) {
    //  给 food添加一个新的属性 属性名为count 值为1
    // food.count = 1 //不会自动刚更新界面：新增加的属性没有数据绑定
    // 为响应对象添加一个属性，确保新属性也是响应式的，并且能够更新视图数据
    _vue["default"].set(food, 'count', 1); // 像food添加carfoods


    state.cartFoods.push(food);
  } else {
    food.count++;
  }
}), _defineProperty(_mutations, _mutationsTypes.REDDUCE_FOOD_COUNT, function (state, _ref5) {
  var food = _ref5.food;

  if (food.count > 0) {
    //限制
    food.count--;

    if (food.count === 0) {
      // 将food从cartfoods中移除
      state.cartFoods.splice(state.cartFoods.indexOf(food), 1);
    }
  }
}), _defineProperty(_mutations, _mutationsTypes.CLEAR_CART, function (state) {
  state.cartFoods.forEach(function (food) {
    food.count = 0;
  });
  state.cartFoods = [];
}), _mutations);
var actions = {
  /* 异步获取商品列表 */
  getShopGoods: function getShopGoods(_ref6, callback) {
    var commit, result, goods;
    return regeneratorRuntime.async(function getShopGoods$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref6.commit;
            _context.next = 3;
            return regeneratorRuntime.awrap((0, _api.reqGoods)());

          case 3:
            result = _context.sent;

            if (result.code === 0) {
              goods = result.data;
              commit(_mutationsTypes.RECEIVE_GOODS, {
                goods: goods
              });
              callback && callback();
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  //异步获取商家评价列表
  getShopRatings: function getShopRatings(_ref7, callback) {
    var commit, result, ratings;
    return regeneratorRuntime.async(function getShopRatings$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            commit = _ref7.commit;
            _context2.next = 3;
            return regeneratorRuntime.awrap((0, _api.reqRatings)());

          case 3:
            result = _context2.sent;

            if (result.code === 0) {
              ratings = result.data;
              commit(_mutationsTypes.RECEIVE_RATINGS, {
                ratings: ratings
              });
              callback && callback();
            }

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  // 异步获取商家信息
  getShopInfo: function getShopInfo(_ref8, callback) {
    var commit, result, info;
    return regeneratorRuntime.async(function getShopInfo$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            commit = _ref8.commit;
            _context3.next = 3;
            return regeneratorRuntime.awrap((0, _api.reqInfo)());

          case 3:
            result = _context3.sent;

            if (result.code === 0) {
              info = result.data;
              commit(_mutationsTypes.RECEIVE_INFO, {
                info: info
              });
              callback && callback();
            }

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    });
  },

  /* 更新food数量的同步actions */
  updateFoodCount: function updateFoodCount(_ref9, _ref10) {
    var commit = _ref9.commit;
    var isAdd = _ref10.isAdd,
        food = _ref10.food;

    if (isAdd) {
      commit(_mutationsTypes.ADD_FOOD_COUNT, {
        food: food
      });
    } else {
      commit(_mutationsTypes.REDDUCE_FOOD_COUNT, {
        food: food
      });
    }
  }
};
var getters = {
  //计算属性初始是执行一次  数据发生变化话也会计算 效率太低
  // cartFoods(state) {
  //   return state.goods.reduce((pre, good) => {
  //     good.foods.forEach(food => { 
  //       if (food.count > 0) {
  //         pre.push(food)
  //       }
  //     })
  //     return pre
  //   }, [])
  // }
  totalCount: function totalCount(state) {
    return state.cartFoods.reduce(function (pre, food) {
      return pre + food.count;
    }, 0);
  },
  totalPrice: function totalPrice(state) {
    return state.cartFoods.reduce(function (pre, food) {
      return pre + food.count * food.price;
    }, 0);
  },

  /*
  总商家评论数
   */
  totalRatingsCount: function totalRatingsCount(state) {
    return state.ratings.length;
  },

  /*
  总商家推荐评论数
   */
  positiveRatingsCount: function positiveRatingsCount(state) {
    return state.ratings.reduce(function (pre, rating) {
      return pre + (rating.rateType === 0 ? 1 : 0);
    }, 0);
  }
};
var _default = {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
exports["default"] = _default;