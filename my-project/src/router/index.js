import { createRouter, createWebHistory } from 'vue-router';
import Signup from '@/views/Signup';

const routes = [
  {
    path: '/',
    name: 'Signup',
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
