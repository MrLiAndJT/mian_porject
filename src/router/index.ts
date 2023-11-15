import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      redirect: { name: 'home' },
      meta: { title: '首页' },
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeView,
          children: [
            {
              // history模式需要通配所有路由，详见vue-router文档
              path: '/test-three/:pathMatch(.*)*',
              name: 'test-three',
              meta: {},
              component: () => import('@/qiankun/SubContainer.vue')
            },
            {
              path: '/About',
              name: 'About',
              meta: {},
              component: () => import('@/views/AboutView.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router
