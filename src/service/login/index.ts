import myRequest from '@/service'
import { IAccount } from './types'

export function accountLogin(data: IAccount) {
  return myRequest.post({
    url: '/login',
    data
  })
}
