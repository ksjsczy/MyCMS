import { createStore } from 'vuex'

import login from '@/store/login'
const store = createStore({
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
