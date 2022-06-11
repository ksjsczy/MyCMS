import { createStore, Store, useStore as vuexUseStore } from 'vuex'

import login from '@/store/login'
import { IRootState, IStoreType } from './types'
const store = createStore<IRootState>({
  state() {
    return {
      counter: 50
    }
  },
  modules: {
    login
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
