/* 包含n个用于间接更新的方法对象
可以包含异步/逻辑代码
*/
import {
  reqAddress,
  reqShops,
  reqCategorys,
  reqAutoLogin,
  reqRatings,
  reqGoods,
  reqInfo

} from '../api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RECEIVE_TOKEN,
  LOGOUT,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS

} from './mutations-types'

export default {
  /* 请求获取当前地址信息异步actions */
  async getAddress({
    commit,
    state
  }) {
    //  1发异步ajax请求
    const {
      longitude,
      latitude
    } = state
    const result = await reqAddress(longitude, latitude)

    // 2请求成功后，提交mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {
        address
      })
    }
  },

  // 请求获取商品列表分类
  async getCategorys({
    commit,
  }, callback) {
    const result = await reqCategorys()
    if (result.code == 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {
        categorys
      })
      //同步执行mutation方法
      //  在commmit之后调用 callback
      typeof callback === 'function' && callback()
    }
  },

  // 获取商家列表分类
  async getShops({
    commit,
    state
  }) {
    const {
      longitude,
      latitude
    } = state
    const result = await reqShops(longitude, latitude)
    if (result.code == 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {
        shops
      })
    }
  },

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
  }

}