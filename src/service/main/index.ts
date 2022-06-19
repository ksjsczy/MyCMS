import myRequest from '@/service'

//获取页面需要展示的数据的列表
export function getPageList(pageName: string, data: any) {
  return myRequest.post({
    url: `${pageName}/list`,
    data
  })
}

//创建新item
export function createItem(pageName: string, data: any) {
  return myRequest.post({
    url: pageName,
    data
  })
}

//删除item
export function deleteItem(pageName: string, id: number) {
  return myRequest.delete({
    url: `${pageName}/${id}`
  })
}

//编辑item
export function editItem(pageName: string, id: number, data: any) {
  console.log(id, data)
  return myRequest.patch({
    url: `${pageName}/${id}`,
    data
  })
}
