import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import cartView from "@/views/cartView.vue";
import shoeView from "@/views/shoeView.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/carrinho',
      name: 'cart',
      component: cartView
    },
    {
      path: '/sapato/:id',
      name: 'shoe',
      component: shoeView
    },
  ]
})

export default router
