/* 这是vuex最核心的管理模块 */

import Vue from 'vue'
import Vuex from 'vuex'


import mutations from './mutations'
import actions from './actions'
import getters from './getters'

/* 模块 */
import msite from './modules/msite'
import user from './modules/user'
import shop from './modules/shop'

Vue.use(Vuex)

export default new Vuex.Store({

  mutations, //总mutations
  actions, //总的actions
  getters, //总的getters
  modules: {
    msite,
    user,
    shop,
  }
})

/* 总state结构 
{
 msite ：{msite的state}
 user ：{user的state}
 shop ：{shop的state}
}
*/