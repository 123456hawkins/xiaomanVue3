import { createRouter, createWebHistory, } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import('../components/footer.vue'),
    children: [
      {
        // path为空代表默认展示
        path: "",
        name: 'login',
        component: () => import('../components/login.vue')
      },
      {
        path: "/reg",
        name: "reg",
        component: () => import('../components/reg.vue')
      }
    ]
  }

]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
