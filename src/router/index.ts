import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainPage from '@/views/pages/main-page.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main-page',
    component: MainPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
