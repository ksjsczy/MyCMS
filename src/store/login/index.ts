import { Module } from 'vuex'
import { IRootState } from '../types'
import { ILoginState } from './types'

const login: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      username: '',
      password: ''
    }
  }
}

export default login
