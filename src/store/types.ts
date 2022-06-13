import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'

export interface IRootState {
  departmentList: any[]
  roleList: any[]
  menuList: any[]
}

export interface IStoreType extends IRootState {
  login: ILoginState
  system: ISystemState
}
