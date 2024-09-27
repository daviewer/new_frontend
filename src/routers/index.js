import { createWebHistory, createRouter } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import UploadView from '@/views/UploadView.vue'

const routes = [
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView,
  },
  {
    path: '/', // TestComponent.vue로 이동할 Path
    name: 'UploadView', // router name
    component: UploadView, // Path로 이동될 Component
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
