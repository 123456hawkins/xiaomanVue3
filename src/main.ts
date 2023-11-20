import './assets/main.css'

import { createApp, toRaw } from 'vue'
import { createPinia, } from 'pinia'
import type { PiniaPluginContext } from 'pinia'
// pinia持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import mitt from 'mitt'

const Mit = mitt()

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import Loading from './components/Loading'

const app = createApp(App)

// pinia持久化
// const __piniaKey__: string = 'hawkins'
// const setStorage = (key: string, value: any) => {
//   localStorage.setItem(key, JSON.stringify(value))
// }
// type Options = {
//   key?: string
// }
// const getStorage = (key: string) => {
//   return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
// }
// const piniaPlugin = (options: Options) => {
//   return (context: PiniaPluginContext) => {
//     const { store } = context;
//     const data = getStorage(`${options?.key ?? __piniaKey__}-${store.$id}`)
//     store.$subscribe(() => {
//       // 一发生变化就存储
//       setStorage(`${options?.key ?? __piniaKey__}-${store.$id}`, toRaw(store.$state))
//     })
//     console.log(store, 'store');

//     return {
//       ...data
//     }
//   }
// }

const store = createPinia()
// store.use(piniaPlugin({
//   key: "pinia"
// }))
store.use(piniaPluginPersistedstate)
// app.use(Loading)
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

app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
