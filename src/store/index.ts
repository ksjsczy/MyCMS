import { createStore } from 'vuex'

import login from '@/store/login'
import { IRootState } from './types'
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

export default store
