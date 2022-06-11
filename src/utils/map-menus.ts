import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(menu: any[]): RouteRecordRaw[] {
  //初始化allRoutes，用来保存所有的路由
  const allRoutes: RouteRecordRaw[] = []
  //获得router文件夹中所有的ts文件的名字字符串
  const routeFiles = require.context('@/router/main', true, /\.ts/)
  routeFiles.keys().forEach((item: string) => {
    //获得获得router文件夹中所有的ts文件中导出的route，放到allRoutes数组中
    const routeFile = require('@/router/main' + item.slice(1))
    allRoutes.push(routeFile.default)
  })
  //遍历menu中的每一个菜单，通过里面的url找到对应的allRoutes中的route，动态添加main的嵌套路由
  const routes: RouteRecordRaw[] = []
  function addRouteByMenu(menus: any[]) {
    menus.forEach((menu) => {
      //如果type为1，说明它含有子菜单，通过递归，遍历它的children
      if (menu.type === 1) {
        addRouteByMenu(menu.children)
      }
      const route = allRoutes.find((route) => route.path === menu.url)
      if (route) routes.push(route)
    })
  }
  addRouteByMenu(menu)
  return routes
}
