import { createRouter, createWebHistory } from 'vue-router';
import Signup from '@/views/Signup';
import Signin from '@/views/Signin';

const routes = [
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
