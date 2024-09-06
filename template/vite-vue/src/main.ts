import { createPinia } from 'pinia'
import persistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import '@/assets/styles/index.less'
import 'virtual:svg-icons-register'
import 'virtual:uno.css'

const app = createApp(App)
const pinia = createPinia()
pinia.use(persistedstate)
app.use(pinia)
app.use(router)
app.mount('#app')
