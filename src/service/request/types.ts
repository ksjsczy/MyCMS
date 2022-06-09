import { AxiosRequestConfig, AxiosResponse } from 'axios'
interface IMyRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (err: any) => any
}

interface IMyRequestConfig extends AxiosRequestConfig {
  interceptors?: IMyRequestInterceptors
}

export { IMyRequestConfig }
