import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { IMyRequestConfig } from './types'

class MyRequest {
  instance: AxiosInstance
  constructor(config: IMyRequestConfig) {
    this.instance = axios.create(config)

    //添加所有实例的拦截器
    this.instance.interceptors.request.use(
      (config: IMyRequestConfig) => {
        // console.log('所有实例的请求成功的拦截')
        return config
      },
      (err: any) => {
        // console.log('所有实例的请求失败的拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (config: AxiosResponse) => {
        // console.log('所有实例的响应成功的拦截')
        return config
      },
      (err: any) => {
        // console.log('所有实例的响应失败的拦截')
        return err
      }
    )

    //添加实例专属的拦截器
    this.instance.interceptors.request.use(
      config?.interceptors?.requestInterceptor,
      config?.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      config?.interceptors?.responseInterceptor,
      config?.interceptors?.responseInterceptorCatch
    )
  }
  request<T = any>(config: IMyRequestConfig): Promise<T> {
    //添加request方法的拦截器
    if (config?.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res: any) => {
          resolve(res)
        })
        .catch((err: any) => {
          reject(err)
        })
    })
  }

  get(config: IMyRequestConfig) {
    return this.request({ ...config, method: 'GET' })
  }
  post(config: IMyRequestConfig) {
    return this.request({ ...config, method: 'POST' })
  }
  delete(config: IMyRequestConfig) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch(config: IMyRequestConfig) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default MyRequest
