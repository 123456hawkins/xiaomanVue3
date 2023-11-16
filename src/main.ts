import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import mitt from 'mitt'

const Mit = mitt()

import App from './App.vue'
// import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

// 声明mitt
declare module 'vue' {
  export interface ComponentCustomProperties {
    $Bus: typeof Mit
  }
}
app.config.globalProperties.$Bus = Mit

app.use(createPinia())
// app.use(router)
app.use(ElementPlus)
app.mount('#app')
