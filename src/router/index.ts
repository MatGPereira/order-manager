import ChangePassword from '@/views/pages/auth/ChangePassword.vue';
import Login from '@/views/pages/auth/Login.vue';
import CreateOrder from '@/views/pages/CreateOrder.vue';
import Home from '@/views/pages/Home.vue';
import List from '@/views/pages/List.vue';
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
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'listagem',
          name: 'list',
          component: List
        },
        {
          path: 'criar-novo-pedido',
          name: 'createNewOrder',
          component: CreateOrder
        }
      ]
    }
  ]
});

export default router;
