import { Module } from 'vuex'
import { IRootState } from '../types'
import { ILoginState } from './types'

import { accountLogin, getUserinfoById, getMenuByRoleId } from '@/service/login'
import { IAccount } from '@/service/login/types'
import router from '@/router'
import localCache from '@/utils/cache'
import { mapMenusToRoutes } from '@/utils/map-menus'

const login: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userinfo: {},
      menu: []
    }
  },
  actions: {
    //账号登录
    async accountLoginAction({ commit }, payload: IAccount) {
      //1.发起账号登录的网络请求
      const loginResult = await accountLogin(payload)

      //如果登录失败则弹出错误提示，并return
      if (loginResult === undefined) {
        alert(loginResult.response.data)
        return
      }

      const { token, id } = loginResult.data.data
      //请求用户信息
      const userinfoResult = await getUserinfoById(id)
      const userinfo = userinfoResult.data.data

      const roleId = userinfo.role.id
      //请求角色菜单
      const menuResult = await getMenuByRoleId(roleId)
      const menu = menuResult.data.data

      //2.登录成功，更新state中的token,userinfo
      commit('changeToken', token)
      commit('changeUserinfo', userinfo)
      commit('changeMenu', menu)

      //3.保存token,userinfo
      localCache.setCache('token', token)
      localCache.setCache('userinfo', userinfo)
      localCache.setCache('menu', menu)

      //4.跳转页面
      router.push('/main')
    },
    //利用localStorage中的数据初始化state
    setupLoginState({ commit }) {
      const token = localCache.getCache('token')
      commit('changeToken', token)
      const userinfo = localCache.getCache('userinfo')
      commit('changeUserinfo', userinfo)
      const menu = localCache.getCache('menu')
      commit('changeMenu', menu)
    }
  },
  mutations: {
    changeToken(state, payload) {
      state.token = payload
    },
    changeUserinfo(state, payload) {
      state.userinfo = payload
    },
    changeMenu(state, payload) {
      state.menu = payload
      const routes = mapMenusToRoutes(payload)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  }
}

export default login
