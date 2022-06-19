export interface IUserinfo {
  cellphone?: number
  createAt?: string
  department?: object
  enable?: number
  id?: number
  name?: string
  realname?: string
  role?: object
  updateAt?: string
}

export interface ILoginState {
  token: string
  userinfo: IUserinfo
  menu: object[]
  permissions: any[]
}
