import { createRouter, createWebHashHistory } from 'vue-router';
import MainLayout from '@/components/layouts/MainLayout.vue';

const routes = [
  {
    path: '/',
    name: 'layout',
    component: MainLayout,
    children: [
      {
        component: import(/* webpackChunkName: "home-pag" */ '@/views/HomeView.vue'),
        name: 'home-page',
        path: '/',
      },
      {
        component: import(/* webpackChunkName: "detailed-news" */ '@/views/DetailedNewsView.vue'),
        name: 'detailed-news',
        path: '/news/:id',
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
