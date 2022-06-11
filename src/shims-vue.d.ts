/* eslint-disable */
import store from '@/store'
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

import { Store } from 'vuex'
import { IStoreType } from '@/store/types'
declare module '@vue/runtime-core' {
  // declare your own store states

  // provide typings for `this.$store`
  declare module '*.vue'
  declare module '*.json'
  interface ComponentCustomProperties {
    $store: Store<IStoreType>
  }
}
