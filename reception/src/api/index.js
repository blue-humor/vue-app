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
// export const reqCategorys = () => ajax({
//   method: 'GET',
//   url: `/index_category`,

// })
export const reqCategorys = () => ajax('/index_category', {
  headers: {
    needToken: true
  }
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
  headers: {
    needToken: true
  }
})

// http://localhost:4000/sendcode?phone=13716962779
// 发送短信验证码  参数phone
export const reqSendCode = (phone) => ajax({
  method: 'GET',
  url: `/sendcode`,
  params: {
    phone
  }
})

// http://localhost:4000/login_pwd
// 用户名密码登陆
export const reqPwdLogin = ({
  name,
  pwd,
  captcha
}) => ajax({
  method: 'POST',
  url: `/login_pwd`,
  data: {
    name,
    pwd,
    captcha
  }
})


// http://localhost:5000/login_sms
// 手机号验证码登陆
export const reqLoain_sms = (
  phone,
  code
) => ajax({
  method: "POST",
  url: '/login_sms',
  data: {
    phone,
    code
  }
})