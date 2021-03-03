import Vue from 'vue'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)

VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    phone: '手机号',
    code: '验证码',
    name: '用户名',
    pwd: '密码',
    captcha: '验证码'
  }
})

// import VeeValidate from 'vee-validate'
// VeeValidate.Validator.extend('phone', {
//   validate: value => {
//     return /^1\d{10}$/.test(value)
//   },
//   getMessage: field => field + '必须是11位手机号码'
// })