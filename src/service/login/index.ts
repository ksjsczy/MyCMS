import myRequest from '@/service'
import { IAccount } from './types'

export function accountLogin(data: IAccount) {
  return myRequest.post({
    url: '/login',
    data
  })
}

export function getUserinfoById(id: number) {
  return myRequest.get({
    url: '/users/' + id
  })
}

export function getMenuByRoleId(roleId: number) {
  return myRequest.get({
    url: '/role/' + roleId + '/menu'
  })
}
