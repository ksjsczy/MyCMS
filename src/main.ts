import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store, { setupStore } from './store'
import 'normalize.css'
import '@/assets/css/index.less'

const app = createApp(App)
app.use(router as any)
app.use(store as any)
setupStore()

app.mount('#app')
