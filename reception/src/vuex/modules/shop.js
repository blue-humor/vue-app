/* 对应shop模块 */
import Vue from 'vue'
import {
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  ADD_FOOD_COUNT,
  REDDUCE_FOOD_COUNT
} from '../mutations-types'
import {
  reqRatings,
  reqGoods,
  reqInfo
} from '../../api'

const state = {
  goods: [], //商品列表
  ratings: [],
  info: {}
}
const mutations = {


  [RECEIVE_GOODS](state, {
    goods
  }) {
    state.goods = goods
  },

  [RECEIVE_INFO](state, {
    info
  }) {
    state.info = info
  },

  [RECEIVE_RATINGS](state, {
    ratings
  }) {
    state.ratings = ratings
  },
  [ADD_FOOD_COUNT](state, {
    food
  }) {
    if (!food.count) {
      //  给 food添加一个新的属性 属性名为count 值为1
      // food.count = 1 //不会自动刚更新界面：新增加的属性没有数据绑定
      // 为响应对象添加一个属性，确保新属性也是响应式的，并且能够更新视图数据
      Vue.set(food, 'count', 1)
    } else {
      food.count++
    }
  },
  [REDDUCE_FOOD_COUNT](state, {
    food
  }) {
    if (food.count > 0) { //限制
      food.count--
    }
  },
}


const actions = {

  /* 异步获取商品列表 */
  async getShopGoods({
    commit
  }, callback) {
    const result = await reqGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {
        goods
      })
      callback && callback()
    }

  },

  //异步获取商家评价列表
  async getShopRatings({
    commit
  }, callback) {
    const result = await reqRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {
        ratings
      })
      callback && callback()
    }
  },

  // 异步获取商家信息
  async getShopInfo({
    commit
  }, callback) {
    const result = await reqInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, {
        info
      })
      callback && callback()
    }
  },

  /* 更新food数量的同步actions */
  updateFoodCount({
    commit
  }, {
    isAdd,
    food
  }) {

    if (isAdd) {
      commit(ADD_FOOD_COUNT, {
        food
      })
    } else {
      commit(REDDUCE_FOOD_COUNT, {
        food
      })
    }

  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters,

}