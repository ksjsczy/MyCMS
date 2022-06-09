import MyRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'

const myRequest = new MyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor(config) {
      //在请求成功的拦截中，把token添加到headers中
      const token = localCache.getCache('token')
      if (token) {
        config.headers!.Authorization = 'Bearer ' + token
      }
      return config
    }
  }
})

export default myRequest
