import myRequest from '@/service'

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
