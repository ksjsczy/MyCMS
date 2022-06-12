import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'

export interface IRootState {
  counter: number
}

export interface IStoreType extends IRootState {
  login: ILoginState
  system: ISystemState
}
