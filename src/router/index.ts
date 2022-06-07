import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/view/main/main.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/view/not-found/not-found.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
