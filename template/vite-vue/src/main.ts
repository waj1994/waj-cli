import { createApp } from 'vue'
import router from './routes'

import App from './App.vue'

import '@/assets/styles/index.css'
import 'virtual:svg-icons-register'

createApp(App).use(router).mount('#app')
