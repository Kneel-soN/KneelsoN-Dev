import { createRouter, createWebHistory } from 'vue-router'
import LoginContainer from '@/views/LoginContainer.vue'
import Parent from '@/views/Parent.vue'
const routes = [
  {
    path: '/',
    name: 'LoginContainer',
    component: LoginContainer,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Parent,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
