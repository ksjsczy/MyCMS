import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store, { setupStore } from './store'
import 'normalize.css'
import '@/assets/css/index.less'

const app = createApp(App)
app.use(store)
setupStore()
//app.use(router)需要放在setupStore后面，否则会出错，详见video38开头
app.use(router)

app.mount('#app')
