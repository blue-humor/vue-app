/* 封装axios的模块 */
import axios from 'axios'
import qs from 'qs'
// 创建一个新的Axios的实例（功能是上的）
const instance = axios.create({
  timeout: 10000, //限制设置请求超时的时间10s
  baseURL: '/api' //所有请求都需要一个基础路径
})

// 添加请求拦截器，处理post请求参数（从对象转换为urlencoding）
instance.interceptors.request.use((config) => {
  if (config.method.toUpperCase() === 'POST' && config.data instanceof Object) {
    config.data = qs.stringify(config.data) //username=tom&pwd=123
  }
  return config //必须返回config 否则找不到请求 
})

/* 
 添加响应拦截器
   成功的回调：成功的结果不再是response，而是response.date
   失败的回调：统一处理请求异常
*/
instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    alert(error.message)
    return new Promise(() => {}) //返回一个pending状态的promise 就是中断promise链
  }
)

export default instance