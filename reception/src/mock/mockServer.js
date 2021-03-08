/* 这是一个使用mockjs定义mock接口的模块 */

import Mock from 'mockjs'
import data from './data.json' //js对象

// 定义mock接口
Mock.mock('/api/goods', {
  code: 0,
  data: data.goods
})
Mock.mock('/api/ratings', {
  code: 0,
  data: data.ratings
})
Mock.mock('/api/info', {
  code: 0,
  data: data.info
})


// 不用暴露任何东西