export interface IUsersList {
  id: number
  name: string
  realname: string
  cellphone: string
  enable: number
  departmentId: number
  roleId: number
  createAt: string
  updateAt: string
}

export interface ISystemState {
  usersList: IUsersList[]
  usersCount: number
}
