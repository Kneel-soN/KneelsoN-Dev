import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login.vue';  
import Portfolio from '@/views/Porfolio/Porfolio.vue'
import Parent from '@/views/Parent.vue'
const routes = [
  {
    path: '/', 
    name: 'Login',
    component: Login,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Parent, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
