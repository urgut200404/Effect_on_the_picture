import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from '../routers/router.js'

let app = createApp(App)

// const pinia = createPinia()

// app.use(pinia)
app.use(router)
app.mount('#app')
