/* 包含n个用于直接更新状态数据方法的对象 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  // RECEIVE_SHOPS
  RECEIVE_SHOPS
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
}