import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login.vue';  
import Portfolio from '@/views/Porfolio/Porfolio.vue'

const routes = [
  {
    path: '/', 
    name: 'Login',
    component: Login,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
