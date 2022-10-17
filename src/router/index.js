import { createRouter, createWebHashHistory } from 'vue-router';
import MainLayout from '@/components/layouts/MainLayout.vue';
import HomeView from '@/views/HomeView.vue';
import DetailedNewsView from '@/views/DetailedNewsView.vue';

const routes = [
  {
    path: '/',
    name: 'layout',
    component: MainLayout,
    children: [
      {
        component: HomeView,
        name: 'home-page',
        path: '/',
      },
      {
        component: DetailedNewsView,
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
