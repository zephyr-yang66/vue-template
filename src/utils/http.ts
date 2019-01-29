// axios 封装
import axios from 'axios'
import { filterParams } from './utils'
const METHOD_GET: string = 'GET'
const METHOD_POST: string = 'POST'
// 默认超时时间30s
axios.defaults.timeout = 30 * 1000
// 发送请求时携带cookie
axios.defaults.withCredentials = true
axios.defaults.headers = {
  'content-type': 'application/x-www-form-urlencoded'
}
// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    // 请求前做的事
    return config
  },
  error => {
    // 请求错误reject error
    return Promise.reject(error)
  }
)
// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)
export default {
  get(options: Paramter) {
    return axios(
      Object.assign({}, options, { method: METHOD_GET, url: options.url, params: filterParams({ ...options.params }) },options)
    )
  },
  post(options: Paramter) {
    return axios(Object.assign({}, { method: METHOD_POST, url: options.url, data: (filterParams({ ...options.params }))  }, options))
  }
}
interface Paramter {
  method: string,
  [propName: string]: any
}
