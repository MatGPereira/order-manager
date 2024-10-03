import ChangePassword from '@/views/pages/auth/ChangePassword.vue';
import Login from '@/views/pages/auth/Login.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/auth/login'
    },
    {
      path: '/auth/login',
      name: 'login',
      component: Login
    },
    {
      path: '/auth/change-password',
      name: 'change-password',
      component: ChangePassword
    }
  ]
});

export default router;
