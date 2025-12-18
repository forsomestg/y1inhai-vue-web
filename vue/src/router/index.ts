import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import { diaryRoutes } from '@/router/diaryRoute' // ← 引入日记路由
import Calendar from '@/views/CalendarView.vue'
import About from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { hideNavbar: true }
    },
    ...diaryRoutes,
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
})

export default router
