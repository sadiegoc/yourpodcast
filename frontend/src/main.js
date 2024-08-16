import 'font-awesome/css/font-awesome.css'
import { createApp } from 'vue'
import App from './App.vue'
import store from './config/store'

createApp(App).use(store).mount('#app')
