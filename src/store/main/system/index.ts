import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ISystemState } from './types'
import {
  useGetPageList,
  useCreateItem,
  useDeleteItem,
  useEditItem
} from '@/hooks/use-actions-in-common'

const system: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      departmentList: [],
      departmentCount: 0,
      roleList: [],
      roleCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  actions: {
    async getPageListAction({ commit }, payload) {
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
    changeUsersList(state, payload) {
      state.usersList = payload
    },
    changeUsersCount(state, payload) {
      state.usersCount = payload
    },
    changeDepartmentList(state, payload) {
      state.departmentList = payload
    },
    changeDepartmentCount(state, payload) {
      state.departmentCount = payload
    },
    changeRoleList(state, payload) {
      state.roleList = payload
    },
    changeRoleCount(state, payload) {
      state.roleCount = payload
    },
    changeMenuList(state, payload) {
      state.menuList = payload
    },
    changeMenuCount(state, payload) {
      state.menuCount = payload
    }
  }
}

export default system
