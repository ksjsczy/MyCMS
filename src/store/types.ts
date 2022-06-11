import { ILoginState } from './login/types'

export interface IRootState {
  counter: number
}

export interface IStoreType extends IRootState {
  login: ILoginState
}
