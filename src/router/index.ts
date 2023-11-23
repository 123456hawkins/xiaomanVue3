import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { createApp, createVNode, render } from 'vue'
import loadingBar from '../components/loadingBar.vue'
const Vnode = createVNode(loadingBar)
// 挂载虚拟dom
render(Vnode, document.body)
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import('@/views/login.vue')
  },
  {
    path: "/index",
    component: () => import('@/views/index.vue')
  },

]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // 如果已经在 '/' 路由，不执行重定向逻辑
  // to从哪来,from到哪去,next()放行
  Vnode.component?.exposed?.startLoading()
  if (to.path === '/' && !localStorage.getItem('token')) {
    next();
  } else {
    // 如果有token就放行，否则重定向到 '/'
    localStorage.getItem('token') ? next() : next('/');
  }
});
router.afterEach((to, from) => {
  Vnode.component?.exposed?.endLoading()
})

export default router
