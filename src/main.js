import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.config.globalProperties.$foo = 'bar'//注入原型

app.use(store).use(router).mount('#app')
