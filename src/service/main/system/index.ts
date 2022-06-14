import myRequest from '@/service'

//获取页面需要展示的数据的列表
export function getPageList(pageName: string, data: any) {
  return myRequest.post({
    url: `${pageName}/list`,
    data
  })
}

//获取所有部门的列表
export function getDepartmentList() {
  return myRequest.post({
    url: 'department/list',
    data: {
      offset: 0,
      size: 100
    }
  })
}

//获取所有角色的列表
export function getRoleList() {
  return myRequest.post({
    url: 'role/list',
    data: {
      offset: 0,
      size: 100
    }
  })
}

//获取所有菜单的列表
export function getMenuList() {
  return myRequest.post({
    url: 'menu/list'
  })
}

//创建新用户/部门/菜单/角色
export function createItem(pageName: string, data: any) {
  return myRequest.post({
    url: pageName,
    data
  })
}

//删除用户/部门/菜单/角色
export function deleteItem(pageName: string, id: number) {
  return myRequest.delete({
    url: `${pageName}/${id}`
  })
}

export function editItem(pageName: string, id: number, data: any) {
  return myRequest.patch({
    url: `${pageName}/${id}`,
    data
  })
}
