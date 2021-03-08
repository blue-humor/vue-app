/* 包含n个用于直接更新状态数据方法的对象 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  // RECEIVE_SHOPS
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RECEIVE_TOKEN,
  LOGOUT,

  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS


} from './mutations-types'

export default {
  [RECEIVE_ADDRESS](state, {
    address
  }) {
    state.address = address //更新state数据
  },
  [RECEIVE_CATEGORYS](state, {
    categorys
  }) {
    state.categorys = categorys //更新state数据
  },
  [RECEIVE_SHOPS](state, {
    shops
  }) {
    state.shops = shops //更新state数据
  },




  [RECEIVE_USER](state, {
    user
  }) {
    state.user = user
  },

  [RECEIVE_TOKEN](state, {
    token
  }) {
    state.token = token
  },


  [LOGOUT](state) {
    state.token = ''
    state.user = {}
  },

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

}