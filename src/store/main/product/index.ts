import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { IProductState } from './types'
import {
  useGetPageList,
  useCreateItem,
  useDeleteItem,
  useEditItem
} from '@/hooks/use-actions-in-common'

const product: Module<IProductState, IRootState> = {
  namespaced: true,
  state() {
    return {
      goodsList: [],
      goodsCount: 0,
      categoryList: [],
      categoryCount: 0
    }
  },
  actions: {
    getPageListAction({ commit }, payload) {
      useGetPageList(commit, payload)
    },
    async createItemAction({ dispatch }, payload) {
      useCreateItem(dispatch, payload)
    },
    async deleteItemAction({ dispatch }, payload) {
      useDeleteItem(dispatch, payload)
    },
    async editItemAction({ dispatch }, payload) {
      useEditItem(dispatch, payload)
    }
  },
  mutations: {
    changeGoodsList(state, payload) {
      state.goodsList = payload
    },
    changeGoodsCount(state, payload) {
      state.goodsCount = payload
    },
    changeCategoryList(state, payload) {
      state.categoryList = payload
    },
    changeCategoryCount(state, payload) {
      state.categoryCount = payload
    }
  }
}

export default product
