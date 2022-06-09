import { Module } from 'vuex'
import { IRootState } from '../types'
import { ILoginState } from './types'

import { accountLogin } from '@/service/login'
import { IAccount } from '@/service/login/types'
import router from '@/router'
import localCache from '@/utils/cache'

const login: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      name: '',
      token: '',
      id: 0
    }
  },
  actions: {
    //账号登录
    async accountLoginAction({ commit }, payload: IAccount) {
      //1.发起账号登录的网络请求
      const loginResult = await accountLogin(payload)
      const data = loginResult.data

      //如果登录失败则弹出错误提示，并return
      if (data === undefined) {
        alert(loginResult.response.data)
        return
      }

      //2.登录成功
      commit('changeName', data.data.name)
      commit('changeId', data.data.token)
      commit('changeToken', data.data.id)

      //3.保存token
      localCache.setCache('token', data.data.token)
      localCache.setCache('name', data.data.name)

      //4.跳转页面
      router.push('/main')
    },
    //利用localStorage中的数据初始化state
    setupLoginState({ commit }) {
      const token = localCache.getCache('token')
      commit('changeToken', token)

      const name = localCache.getCache('name')
      commit('changeName', name)
    }
  },
  mutations: {
    changeName(state, payload) {
      state.name = payload
    },
    changeToken(state, payload) {
      state.token = payload
    },
    changeId(state, payload) {
      state.id = payload
    }
  }
}

export default login
