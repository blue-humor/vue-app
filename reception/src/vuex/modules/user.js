/* 对应suer模块 */
import {
  RECEIVE_USER,
  RECEIVE_TOKEN,
  LOGOUT,
} from '../mutations-types'
import {

  reqAutoLogin,


} from '../../api'
const state = {
  user: {}, //登录用户信息
  token: localStorage.getItem('token_key'), //登录token标识
}
const mutations = {
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
}
const actions = {
  /* 保存用户的action */
  saveUser({
    commit
  }, user) {
    const token = user.token
    // 将token保存到local中
    // localStorage.setItem('token_key', user.token)
    localStorage.setItem('token_key', token)
    commit(RECEIVE_TOKEN, {
      token
    })
    delete user.token
    commit(RECEIVE_USER, {
      user
    })
  },

  /* 退出登录 */
  logout({
    commit
  }) {
    //  清除local中的token
    localStorage.removeItem('token_key')
    // 清除state中user/token 
    commit(LOGOUT)
  },

  /* 自动登录 */
  async autoLogin({
    commit
  }) {
    const result = await reqAutoLogin()
    if (result.code === 0) {
      const user = result.data
      commit(RECEIVE_USER, {
        user
      })
    }
  },
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters,

}