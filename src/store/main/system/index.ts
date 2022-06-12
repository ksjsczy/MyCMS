import { getPageList } from '@/service/main/system'
import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ISystemState } from './types'

const system: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0
    }
  },
  actions: {
    async getPageListAction({ commit }, payload) {
      const { pageName, requestParams } = payload
      const pageListResult = await getPageList(pageName, requestParams)
      const usersList = pageListResult.data.data.list
      const usersCount = pageListResult.data.data.totalCount
      const pageNameCapital = pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`change${pageNameCapital}List`, usersList)
      commit(`change${pageNameCapital}Count`, usersCount)
    }
  },
  mutations: {
    changeUsersList(state, payload) {
      state.usersList = payload
    },
    changeUsersCount(state, payload) {
      state.usersCount = payload
    }
  }
}

export default system
