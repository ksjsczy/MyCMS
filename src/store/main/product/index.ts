import { getPageList } from '@/service/main/system'
import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { IProductState } from './types'

const product: Module<IProductState, IRootState> = {
  namespaced: true,
  state() {
    return {
      goodsList: [],
      goodsCount: 0
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
    changeGoodsList(state, payload) {
      state.goodsList = payload
    },
    changeGoodsCount(state, payload) {
      state.goodsCount = payload
    }
  }
}

export default product
