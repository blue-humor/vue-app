/* 
是一个包含n个接口的模块,
  每个接口的返回值都是一个promise对象
*/

import ajax from './ajax'
// http://localhost:4000/position   参数latitude  longitude  根据经纬度获取位置详情
export const reqAddress = (longitude, latitude) => ajax({
  method: 'GET',
  url: `/position/${latitude},${longitude}`
})

// 获取食品分类列表
export const reqCategorys = () => ajax({
  method: 'GET',
  url: `/index_category`
})

// 根据经纬度获取商户列表
export const reqShops = ({
  longitude,
  latitude
}) => ajax.get('/shops', {
  params: {
    latitude,
    longitude
  },
})