import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store, { setupStore } from './store'

const app = createApp(App)
app.use(router)
app.use(store)
setupStore()

app.mount('#app')
