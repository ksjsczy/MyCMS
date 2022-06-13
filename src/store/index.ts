import { createStore, Store, useStore as vuexUseStore } from 'vuex'
import login from '@/store/login'
import system from '@/store/main/system'
import product from '@/store/main/product'
import { IRootState, IStoreType } from './types'
import { getDepartmentList, getMenuList, getRoleList } from '@/service/main/system'
const store = createStore<IRootState>({
  state() {
    return {
      departmentList: [],
      roleList: [],
      menuList: []
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      //获取所有部门列表
      const departmentListResult = await getDepartmentList()
      commit('changeDepartmentList', departmentListResult.data.data.list)
      //获取所有角色列表
      const roleListResult = await getRoleList()
      commit('changeRoleList', roleListResult.data.data.list)
      //获取所有菜单列表
      const menuListResult = await getMenuList()
      commit('changeMenuList', menuListResult.data.data.list)
    }
  },
  mutations: {
    changeDepartmentList(state, payload) {
      state.departmentList = payload
    },
    changeRoleList(state, payload) {
      state.roleList = payload
    },
    changeMenuList(state, payload) {
      state.menuList = payload
    }
  },
  modules: {
    login,
    system,
    product
  }
})

//初始化loginStore的state
export function setupStore() {
  store.dispatch('login/setupLoginState')
}

export function useStore(): Store<IStoreType> {
  return vuexUseStore()
}
export default store
