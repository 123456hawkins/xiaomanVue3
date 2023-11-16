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
// 自定义全局变量
app.config.globalProperties.$hawkins = 'hawkins'
// 自定义全局函数
app.config.globalProperties.$filters = {
  format<T>(str: T) {
    return `HAWKINS-${str}`
  }
}

// 编写生命文件，不然TS无法正确类型推导
type Filter = {
  format<T>(str: T): string
}

// 声明要扩充@vue/runtime-core包的声明.
// 这里扩充"ComponentCustomProperties"接口, 因为他是vue3中实例的属性的类型.
declare module 'vue' {
  export interface ComponentCustomProperties {
    $filters: Filter
    $hawkins: string
  }
}


app.config.globalProperties.$Bus = Mit

app.use(createPinia())
// app.use(router)
app.use(ElementPlus)
app.mount('#app')
